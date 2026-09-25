"use client";

import { Suspense, useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { useRouter } from "next/navigation";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import type { Group } from "three";
import { usePrefersReducedMotion } from "./use-media";
import { cutCover } from "@/lib/catalog";

const CARD_W = 5.55;
const CARD_H = 3.12;
const SCENE_BG = "#07080c";

const VERTEX = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const FRAGMENT = `
uniform sampler2D map;
varying vec2 vUv;
void main() {
  vec4 tex = texture2D(map, vUv);
  if (tex.a < 0.18) discard;
  gl_FragColor = vec4(tex.rgb, 1.0);
}
`;

type CarItem = { slug: string; coverPath: string };

type Slot = {
  x: number;
  y: number;
  z: number;
  rotY: number;
  scale: number;
};

function signedOffset(cardIndex: number, activeIndex: number, count: number): number {
  let delta = cardIndex - activeIndex;
  const half = Math.floor(count / 2);
  if (delta > half) delta -= count;
  if (delta < -half) delta += count;
  return delta;
}

function slotFromOffset(offset: number): Slot {
  const abs = Math.abs(offset);
  const theta = offset * 0.64;
  const radius = 6.95;
  return {
    x: Math.sin(theta) * radius,
    y: 0.08,
    z: -(1 - Math.cos(theta)) * 2.85 - abs * 0.22 + (abs === 0 ? 0.58 : 0),
    rotY: -theta * 0.5,
    scale: abs === 0 ? 1.2 : Math.max(0.76, 0.92 - abs * 0.09),
  };
}

let beamGlowTexture: THREE.CanvasTexture | null = null;

function getBeamGlowTexture() {
  if (beamGlowTexture) return beamGlowTexture;
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    beamGlowTexture = new THREE.CanvasTexture(canvas);
    return beamGlowTexture;
  }

  ctx.clearRect(0, 0, size, size);
  const cx = size / 2;
  const cy = size / 2;
  const bloom = ctx.createRadialGradient(cx, cy, 4, cx, cy, size * 0.48);
  bloom.addColorStop(0, "rgba(255, 252, 255, 0.55)");
  bloom.addColorStop(0.16, "rgba(190, 232, 255, 0.28)");
  bloom.addColorStop(0.4, "rgba(122, 200, 255, 0.1)");
  bloom.addColorStop(0.7, "rgba(80, 170, 230, 0.03)");
  bloom.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = bloom;
  ctx.fillRect(0, 0, size, size);

  beamGlowTexture = new THREE.CanvasTexture(canvas);
  beamGlowTexture.colorSpace = THREE.SRGBColorSpace;
  beamGlowTexture.needsUpdate = true;
  return beamGlowTexture;
}

function SharedFloor({ reduced }: { reduced: boolean }) {
  const wash = useRef<THREE.SpriteMaterial>(null);
  const core = useRef<THREE.SpriteMaterial>(null);
  const glowMap = useMemo(() => getBeamGlowTexture(), []);

  useFrame(({ clock }) => {
    const pulse = reduced ? 0.78 : 0.7 + Math.sin(clock.elapsedTime * 0.85) * 0.1;
    if (wash.current) wash.current.opacity = 0.55 * pulse;
    if (core.current) core.current.opacity = 0.74 * pulse;
  });

  return (
    <group position={[0, -0.96, 0.45]}>
      <pointLight position={[0, 0.35, 0.2]} intensity={1} color="#d7f3ff" distance={8} decay={2} />
      <sprite scale={[16.8, 3.45, 1]} raycast={() => null}>
        <spriteMaterial
          ref={wash}
          map={glowMap}
          transparent
          opacity={0.48}
          depthWrite={false}
          toneMapped={false}
          blending={THREE.AdditiveBlending}
        />
      </sprite>
      <sprite position={[0, 0.05, 0.1]} scale={[9.4, 2.15, 1]} raycast={() => null}>
        <spriteMaterial
          ref={core}
          map={glowMap}
          transparent
          opacity={0.62}
          depthWrite={false}
          toneMapped={false}
          blending={THREE.AdditiveBlending}
        />
      </sprite>
    </group>
  );
}

function CarMesh({
  item,
  cardIndex,
  activeIndex,
  count,
  texture,
  onSelectSide,
}: {
  item: CarItem;
  cardIndex: number;
  activeIndex: number;
  count: number;
  texture: THREE.Texture;
  onSelectSide: (index: number) => void;
}) {
  const router = useRouter();
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  const offset = signedOffset(cardIndex, activeIndex, count);
  const abs = Math.abs(offset);
  const isFront = offset === 0;
  const slot = slotFromOffset(offset);
  const targetPos = useRef(new THREE.Vector3(slot.x, slot.y, slot.z));
  const uniforms = useMemo(() => ({ map: { value: texture } }), [texture]);

  useEffect(() => {
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  useFrame(() => {
    if (!group.current) return;
    targetPos.current.set(slot.x, slot.y, slot.z);
    group.current.position.lerp(targetPos.current, 0.14);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, slot.rotY, 0.14);
    const hoverBoost = hovered ? (isFront ? 1.03 : 1.08) : 1;
    const s = THREE.MathUtils.lerp(group.current.scale.x, slot.scale * hoverBoost, 0.16);
    group.current.scale.setScalar(s);
  });

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (isFront) {
      router.push(`/modelos/${item.slug}`);
      return;
    }
    onSelectSide(cardIndex);
  };

  return (
    <group ref={group} renderOrder={10 - abs}>
      <mesh
        renderOrder={10 - abs}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <planeGeometry args={[CARD_W, CARD_H]} />
        <shaderMaterial
          transparent={false}
          depthWrite
          depthTest
          glslVersion={THREE.GLSL1}
          uniforms={uniforms}
          vertexShader={VERTEX}
          fragmentShader={FRAGMENT}
        />
      </mesh>
    </group>
  );
}

function CoverflowRig({
  vehicles,
  activeIndex,
  onSelectSide,
  reduced,
}: {
  vehicles: CarItem[];
  activeIndex: number;
  onSelectSide: (index: number) => void;
  reduced: boolean;
}) {
  const loaded = useTexture(vehicles.map((v) => cutCover(v.coverPath)));
  const textures = (Array.isArray(loaded) ? loaded : [loaded]) as THREE.Texture[];

  useMemo(() => {
    textures.forEach((t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 8;
      t.premultiplyAlpha = false;
    });
  }, [textures]);

  return (
    <>
      <fog attach="fog" args={[SCENE_BG, 16, 30]} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 5, 6]} intensity={0.45} />
      <spotLight position={[0, 3.2, 6]} angle={0.58} penumbra={0.75} intensity={1.05} color="#e8f4ff" />
      <SharedFloor reduced={reduced} />
      {vehicles.map((item, i) =>
        Math.abs(signedOffset(i, activeIndex, vehicles.length)) > 2 ? null : (
          <CarMesh
            key={item.slug}
            item={item}
            cardIndex={i}
            activeIndex={activeIndex}
            count={vehicles.length}
            texture={textures[i]}
            onSelectSide={onSelectSide}
          />
        ),
      )}
    </>
  );
}

export default function CoverflowScene({
  vehicles,
  activeIndex,
  onSelectSide,
}: {
  vehicles: CarItem[];
  activeIndex: number;
  onSelectSide: (index: number) => void;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  if (!vehicles.length) return null;

  return (
    <div ref={wrap} className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.22, 7.15], fov: 46 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%", display: "block", background: "transparent" }}
        eventSource={wrap as unknown as RefObject<HTMLElement>}
        eventPrefix="offset"
      >
        <Suspense fallback={null}>
          <CoverflowRig
            vehicles={vehicles}
            activeIndex={activeIndex}
            onSelectSide={onSelectSide}
            reduced={reduced}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
