export type Vehicle = {
  id: number;
  slug: string;
  name: string;
  line: string;
  bodyType: string;
  tagline: string;
  description: string;
  specs: Record<string, string>;
  coverPath: string;
  certified: boolean;
};

const spec = (
  power: string,
  fuel: string,
  extra?: Record<string, string>,
): Record<string, string> => ({
  power,
  fuel,
  transmission: extra?.transmission ?? "9G automatic",
  drivetrain: extra?.drivetrain ?? "AWD optional",
  ...extra,
});

export const CATALOG: Vehicle[] = [
  {
    id: 1,
    slug: "aurelia-a",
    name: "Aurelia A",
    line: "core",
    bodyType: "hatchback",
    tagline: "Precisión urbana",
    description:
      "Hatchback compacto de la línea Core. Proporciones cortas, faros delgados y un habitáculo pensado para ciudad. Vehículo ficticio de demostración.",
    specs: spec("163 hp", "Nafta"),
    coverPath: "/vehicles/aurelia-a.png",
    certified: false,
  },
  {
    id: 2,
    slug: "aurelia-c",
    name: "Aurelia C",
    line: "core",
    bodyType: "sedan",
    tagline: "Sedán ejecutivo",
    description:
      "Sedán mediano de tres volúmenes, calandra vertical y línea de techo clásica. El modelo de volumen de Aurelia Argentina.",
    specs: spec("204 hp", "Nafta"),
    coverPath: "/vehicles/aurelia-c.png",
    certified: false,
  },
  {
    id: 3,
    slug: "aurelia-e",
    name: "Aurelia E",
    line: "core",
    bodyType: "sedan",
    tagline: "Confort de batalla larga",
    description:
      "Sedán de batalla más larga que la C, suspensión neumática opcional y asientos traseros de viaje. Ficticio.",
    specs: spec("258 hp", "Nafta"),
    coverPath: "/vehicles/aurelia-e.png",
    certified: false,
  },
  {
    id: 4,
    slug: "aurelia-s",
    name: "Aurelia S",
    line: "core",
    bodyType: "sedan",
    tagline: "Flagship de la marca",
    description:
      "Sedán de representación: parrilla cromada, capó largo y silueta de limusina corta. Tope de gama Core.",
    specs: spec("367 hp", "Nafta"),
    coverPath: "/vehicles/aurelia-s.png",
    certified: false,
  },
  {
    id: 5,
    slug: "atelier-s",
    name: "Atelier S",
    line: "atelier",
    bodyType: "limousine",
    tagline: "Grand limousine",
    description:
      "Carrocería estirada de la S con suite trasera, divisiones de cristal y tapizado a medida. Línea Atelier.",
    specs: spec("496 hp", "Nafta", { drivetrain: "AWD" }),
    coverPath: "/vehicles/atelier-s.png",
    certified: false,
  },
  {
    id: 6,
    slug: "gl-aurelia",
    name: "GL Aurelia",
    line: "core",
    bodyType: "suv",
    tagline: "SUV compacto",
    description:
      "Crossover compacto de entrada a la familia GL. Altura de manejo urbana y maletero en dos niveles.",
    specs: spec("163 hp", "Nafta"),
    coverPath: "/vehicles/gl-aurelia.png",
    certified: false,
  },
  {
    id: 7,
    slug: "glb-aurelia",
    name: "GLB Aurelia",
    line: "core",
    bodyType: "suv",
    tagline: "SUV versátil",
    description:
      "SUV compacto de techo alto y silueta más vertical, con tercera fila opcional en el seed de demostración.",
    specs: spec("190 hp", "Nafta"),
    coverPath: "/vehicles/glb-aurelia.png",
    certified: false,
  },
  {
    id: 8,
    slug: "glc-aurelia",
    name: "GLC Aurelia",
    line: "core",
    bodyType: "suv",
    tagline: "SUV mediano",
    description:
      "SUV mediano de la gama: proporciones equilibradas, rueda de 20 pulgadas y habitáculo de cinco plazas.",
    specs: spec("258 hp", "Nafta"),
    coverPath: "/vehicles/glc-aurelia.png",
    certified: false,
  },
  {
    id: 9,
    slug: "glc-coupe",
    name: "GLC Coupé",
    line: "sport",
    bodyType: "suv",
    tagline: "Techo esculpido",
    description:
      "Derivado coupé del GLC: caída pronunciada del techo, zaga más corta y calibración Sport.",
    specs: spec("367 hp", "Nafta", { drivetrain: "AWD" }),
    coverPath: "/vehicles/glc-coupe.png",
    certified: false,
  },
  {
    id: 10,
    slug: "gle-aurelia",
    name: "GLE Aurelia",
    line: "core",
    bodyType: "suv",
    tagline: "SUV familiar de bandera",
    description:
      "SUV grande de siete plazas (configuración demo), distancia entre ejes de viaje y morro alto.",
    specs: spec("375 hp", "Nafta", { drivetrain: "AWD" }),
    coverPath: "/vehicles/gle-aurelia.png",
    certified: false,
  },
  {
    id: 11,
    slug: "gle-coupe",
    name: "GLE Coupé",
    line: "sport",
    bodyType: "suv",
    tagline: "SUV coupé de performance",
    description:
      "Versión de techo fastback del GLE, vía ancha y difusor marcado. Línea Sport.",
    specs: spec("429 hp", "Nafta", { drivetrain: "AWD" }),
    coverPath: "/vehicles/gle-coupe.png",
    certified: false,
  },
  {
    id: 12,
    slug: "g-aurelia",
    name: "G Aurelia",
    line: "sport",
    bodyType: "suv",
    tagline: "Ícono off-road",
    description:
      "Todoterreno de silueta rectangular, guardabarros planos y parrilla de barras horizontales. No es un modelo real.",
    specs: spec("421 hp", "Nafta", { drivetrain: "AWD lock" }),
    coverPath: "/vehicles/g-aurelia.png",
    certified: false,
  },
  {
    id: 13,
    slug: "cla-coupe",
    name: "CLA Coupé",
    line: "core",
    bodyType: "coupe",
    tagline: "Coupé de cuatro puertas",
    description:
      "Cuatro puertas con línea de techo baja y zaga fastback. El coupé de acceso a la gama.",
    specs: spec("190 hp", "Nafta"),
    coverPath: "/vehicles/cla-coupe.png",
    certified: false,
  },
  {
    id: 14,
    slug: "cle-coupe",
    name: "CLE Coupé",
    line: "sport",
    bodyType: "coupe",
    tagline: "Coupé de performance",
    description:
      "Coupé de dos puertas, batalla media y pasos de rueda anchos. Calibración Sport de fábrica.",
    specs: spec("381 hp", "Nafta", { drivetrain: "AWD" }),
    coverPath: "/vehicles/cle-coupe.png",
    certified: false,
  },
  {
    id: 15,
    slug: "sport-gt-43",
    name: "Sport GT 43",
    line: "sport",
    bodyType: "coupe",
    tagline: "Gran turismo",
    description:
      "Coupé GT de motor delantero, cabina recostada y cuatro plazas 2+2. Entrada a la familia Sport GT.",
    specs: spec("421 hp", "Nafta", { drivetrain: "RWD", transmission: "8G DCT" }),
    coverPath: "/vehicles/sport-gt-43.png",
    certified: false,
  },
  {
    id: 16,
    slug: "sport-gt-63",
    name: "Sport GT 63",
    line: "sport",
    bodyType: "coupe",
    tagline: "GT de pista",
    description:
      "Hermano ancho del GT 43: splitter, vía extra y escape cuádruple. Solo demostración.",
    specs: spec("585 hp", "Nafta", { drivetrain: "AWD", transmission: "8G DCT" }),
    coverPath: "/vehicles/sport-gt-63.png",
    certified: false,
  },
  {
    id: 17,
    slug: "cle-cabrio",
    name: "CLE Cabriolet",
    line: "sport",
    bodyType: "cabrio",
    tagline: "Grand tourer a cielo abierto",
    description:
      "Convertible de lona, cuatro plazas y capó largo. Misma plataforma que el CLE Coupé.",
    specs: spec("381 hp", "Nafta"),
    coverPath: "/vehicles/cle-cabrio.png",
    certified: false,
  },
  {
    id: 18,
    slug: "sl-roadster",
    name: "SL Roadster",
    line: "sport",
    bodyType: "cabrio",
    tagline: "Herencia roadster",
    description:
      "Roadster de dos plazas, capota rígida retráctil en el seed y morro proporcionalmente largo.",
    specs: spec("476 hp", "Nafta", { drivetrain: "RWD" }),
    coverPath: "/vehicles/sl-roadster.png",
    certified: false,
  },
  {
    id: 19,
    slug: "v-aurelia",
    name: "V Aurelia",
    line: "core",
    bodyType: "van",
    tagline: "Van premium",
    description:
      "Furgón de pasajeros de techo alto, asientos enfrentados y climatización zonal. Shuttle ejecutivo ficticio.",
    specs: spec("237 hp", "Diésel", { drivetrain: "RWD" }),
    coverPath: "/vehicles/v-aurelia.png",
    certified: false,
  },
  {
    id: 20,
    slug: "aurelia-a-electra",
    name: "Aurelia A Electra",
    line: "electra",
    bodyType: "hatchback",
    tagline: "Urbano a batería",
    description:
      "Versión eléctrica de demostración del A. Autonomía de seed, no es un vehículo real.",
    specs: spec("150 kW", "Eléctrico", { transmission: "1G", drivetrain: "FWD" }),
    coverPath: "/vehicles/aurelia-a.png",
    certified: false,
  },
  {
    id: 21,
    slug: "glc-electra",
    name: "GLC Electra",
    line: "electra",
    bodyType: "suv",
    tagline: "SUV eléctrico",
    description:
      "SUV mediano de la línea Electra, mismos volúmenes que el GLC Core con tren ficticio a batería.",
    specs: spec("250 kW", "Eléctrico", { transmission: "1G", drivetrain: "AWD" }),
    coverPath: "/vehicles/glc-aurelia.png",
    certified: false,
  },
  {
    id: 22,
    slug: "aurelia-c-certified",
    name: "Aurelia C",
    line: "core",
    bodyType: "sedan",
    tagline: "Usado certificado",
    description:
      "Unidad Certified de demostración sobre la C: historial de service ficticio y garantía de la red.",
    specs: spec("204 hp", "Nafta"),
    coverPath: "/vehicles/aurelia-c.png",
    certified: true,
  },
];

export const LINE_LABEL: Record<string, string> = {
  core: "Aurelia",
  sport: "Aurelia Sport",
  atelier: "Aurelia Atelier",
  electra: "Aurelia Electra",
};

export const BODY_GROUPS: { id: string; label: string; bodyType: string }[] = [
  { id: "sedan", label: "Sedán", bodyType: "sedan" },
  { id: "suv", label: "SUV y Todoterreno", bodyType: "suv" },
  { id: "coupe", label: "Coupés", bodyType: "coupe" },
  { id: "cabrio", label: "Cabriolet y Roadster", bodyType: "cabrio" },
  { id: "hatchback", label: "Hatchbacks", bodyType: "hatchback" },
  { id: "limousine", label: "Grand Limousine", bodyType: "limousine" },
  { id: "van", label: "Vans", bodyType: "van" },
];

export const FEATURED_PROMOS = [
  {
    slug: "cla-coupe",
    kicker: "Expresá tu impulso.",
    title: "CLA Coupé",
    image: "/vehicles/promo-cla.png",
  },
  {
    slug: "cle-cabrio",
    kicker: "El deseo se despliega.",
    title: "CLE Cabriolet",
    image: "/vehicles/promo-cle-cabrio.png",
  },
  {
    slug: "glc-coupe",
    kicker: "Cargada de diseño.",
    title: "GLC Coupé",
    image: "/vehicles/promo-glc-coupe.png",
  },
] as const;

export function filterCatalog(bodyType?: string, certified?: boolean): Vehicle[] {
  return CATALOG.filter((v) => {
    if (bodyType && v.bodyType !== bodyType) return false;
    if (certified !== undefined && v.certified !== certified) return false;
    return true;
  });
}

export function findCatalog(slug: string): Vehicle | undefined {
  return CATALOG.find((v) => v.slug === slug);
}

export function cutCover(coverPath: string) {
  return coverPath.replace("/vehicles/", "/vehicles/cut/");
}
