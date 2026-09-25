export type Dealer = {
  id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
};

export const DEALERS: Dealer[] = [
  {
    id: 1,
    name: "Aurelia Puerto Madero",
    city: "CABA",
    address: "Av. Alicia Moreau de Justo 1200",
    phone: "+54 11 4000-1000",
    lat: -34.61,
    lng: -58.36,
  },
  {
    id: 2,
    name: "Aurelia Palermo",
    city: "CABA",
    address: "Av. del Libertador 4500",
    phone: "+54 11 4000-1001",
    lat: -34.57,
    lng: -58.42,
  },
  {
    id: 3,
    name: "Aurelia Córdoba",
    city: "Córdoba",
    address: "Av. Colón 5000",
    phone: "+54 351 400-2000",
    lat: -31.42,
    lng: -64.19,
  },
  {
    id: 4,
    name: "Aurelia Rosario",
    city: "Rosario",
    address: "Bv. Oroño 1200",
    phone: "+54 341 400-3000",
    lat: -32.95,
    lng: -60.64,
  },
];
