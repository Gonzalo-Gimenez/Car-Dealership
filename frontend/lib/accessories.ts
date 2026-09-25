export type Accessory = {
  id: number;
  name: string;
  category: string;
  priceHint: string;
  line: string;
  image: string;
};

export const ACCESSORIES: Accessory[] = [
  {
    id: 1,
    name: "Alfombras all-weather",
    category: "Interior",
    priceHint: "Consultar",
    line: "collection",
    image: "/content/collection.png",
  },
  {
    id: 2,
    name: "Baúl de techo 400 L",
    category: "Exterior",
    priceHint: "Consultar",
    line: "accessories",
    image: "/content/collection.png",
  },
  {
    id: 3,
    name: "Cable de carga Tipo 2",
    category: "Electra",
    priceHint: "Consultar",
    line: "collection",
    image: "/content/charge.png",
  },
  {
    id: 4,
    name: "Kit de frenos Sport",
    category: "Sport",
    priceHint: "Consultar",
    line: "accessories",
    image: "/content/workshop.png",
  },
  {
    id: 5,
    name: "Maleta de viaje Atelier",
    category: "Lifestyle",
    priceHint: "Consultar",
    line: "collection",
    image: "/content/atelier.png",
  },
  {
    id: 6,
    name: "Wallbox 11 kW",
    category: "Electra",
    priceHint: "Consultar",
    line: "accessories",
    image: "/content/charge.png",
  },
];

export function filterAccessories(line?: string) {
  if (!line) return ACCESSORIES;
  return ACCESSORIES.filter((a) => a.line === line);
}
