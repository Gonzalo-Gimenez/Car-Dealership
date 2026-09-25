"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { LINE_LABEL, cutCover, type Vehicle } from "@/lib/catalog";
import { PasarelaStars } from "./pasarela/PasarelaStars";
import { SceneErrorBoundary } from "./pasarela/SceneErrorBoundary";
import { usePrefersReducedMotion, useWebGLAvailable } from "./pasarela/use-media";

const CoverflowScene = dynamic(() => import("./pasarela/CoverflowScene"), {
  ssr: false,
});

function wrapIndex(i: number, count: number) {
  return ((i % count) + count) % count;
}

function signedOffset(i: number, index: number, count: number) {
  let d = i - index;
  if (count < 2) return d;
  if (d > count / 2) d -= count;
  if (d < -count / 2) d += count;
  return d;
}

function Caption({ current }: { current: Vehicle }) {
  return (
    <div className="text-center" aria-live="polite">
      <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
        {LINE_LABEL[current.line] ?? current.line}
      </p>
      <h3 className="mt-1 font-serif text-3xl text-white md:text-4xl">{current.name}</h3>
      <p className="mt-1 text-sm text-zinc-400">{current.tagline}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
        <Link href={`/modelos/${current.slug}`} className="text-white underline-offset-4 hover:underline">
          Más información
        </Link>
        <Link
          href={`/consulta?modelo=${current.slug}`}
          className="text-zinc-400 underline-offset-4 hover:underline"
        >
          Realizar consulta
        </Link>
      </div>
    </div>
  );
}

function FlatPasarela({
  vehicles,
  index,
  onSelect,
}: {
  vehicles: Vehicle[];
  index: number;
  onSelect: (i: number) => void;
}) {
  const count = vehicles.length;
  return (
    <div className="relative h-96 sm:h-[32rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[14%] left-1/2 h-24 w-[92%] max-w-none -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(215,243,255,0.38),transparent_70%)] blur-2xl"
      />
      {vehicles.map((v, i) => {
        const offset = signedOffset(i, index, count);
        const abs = Math.abs(offset);
        if (abs > 2) return null;
        const active = offset === 0;
        return (
          <button
            key={v.slug}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Ver ${v.name}`}
            className="absolute top-1/2 left-1/2 w-[92%] sm:w-[70%] md:w-[58%]"
            style={{
              zIndex: 20 - abs,
              opacity: active ? 1 : abs === 1 ? 0.4 : 0.14,
              transform: `translate(-50%, -54%) translateX(${offset * 42}%) scale(${active ? 1 : 0.78})`,
              transition:
                "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={cutCover(v.coverPath)}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 80vw"
                className="object-contain"
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}

export function ModelPasarela({
  vehicles,
  label,
  showStars = true,
}: {
  vehicles: Vehicle[];
  label: string;
  showStars?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const webgl = useWebGLAvailable();
  const count = vehicles.length;
  const current = vehicles[index];
  const use3D = webgl === true && !reducedMotion && count > 0;

  const go = (dir: number) => {
    if (count < 2) return;
    setIndex((i) => wrapIndex(i + dir, count));
  };

  useEffect(() => {
    setIndex(0);
  }, [label]);

  useEffect(() => {
    if (!use3D || paused || count < 2) return;
    const id = window.setInterval(() => go(1), 4800);
    return () => window.clearInterval(id);
  }, [use3D, paused, count, index]);

  if (!current) return null;

  const onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return;
    dragStart.current = { x: e.clientX, y: e.clientY };
    setPaused(true);
  };

  const finishDrag = (clientX: number, clientY: number) => {
    if (dragStart.current === null) return;
    const dx = clientX - dragStart.current.x;
    const dy = clientY - dragStart.current.y;
    dragStart.current = null;
    setPaused(false);
    if (Math.abs(dx) < 56) return;
    if (Math.abs(dy) >= Math.abs(dx) * 0.7) return;
    go(dx > 0 ? -1 : 1);
  };

  const stage = (
    <FlatPasarela vehicles={vehicles} index={index} onSelect={setIndex} />
  );

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Pasarela ${label}`}
      tabIndex={0}
      className={`relative outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 ${showStars ? "pasarela-stage overflow-hidden" : ""}`}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(-1);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          go(1);
        }
      }}
    >
      {showStars ? <PasarelaStars /> : null}
      <div className="relative z-10 mt-4">
        {webgl === null ? (
          <div className="relative h-96 sm:h-[32rem]" />
        ) : use3D ? (
          <div
            className="relative h-[28rem] w-full touch-pan-y sm:h-[34rem] md:h-[40rem]"
            onPointerDown={onPointerDown}
            onPointerUp={(e) => finishDrag(e.clientX, e.clientY)}
            onPointerCancel={() => {
              dragStart.current = null;
              setPaused(false);
            }}
          >
            <SceneErrorBoundary fallback={stage}>
              <CoverflowScene
                vehicles={vehicles}
                activeIndex={index}
                onSelectSide={setIndex}
              />
            </SceneErrorBoundary>
          </div>
        ) : (
          stage
        )}

        {count > 1 ? (
          <div className="relative z-10 -mt-6 flex justify-center gap-16 pb-4 sm:-mt-8 sm:gap-24">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => go(-1)}
              className="pasarela-nav inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-zinc-200 backdrop-blur-sm transition hover:border-white hover:text-white active:scale-[0.98]"
            >
              <CaretLeft size={22} weight="bold" />
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => go(1)}
              className="pasarela-nav inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-zinc-200 backdrop-blur-sm transition hover:border-white hover:text-white active:scale-[0.98]"
            >
              <CaretRight size={22} weight="bold" />
            </button>
          </div>
        ) : (
          <div className="h-6" />
        )}

        <div className="mx-auto max-w-7xl px-6 pt-6 pb-2">
          <Caption current={current} />
        </div>
      </div>
    </div>
  );
}
