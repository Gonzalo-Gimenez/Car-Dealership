export const NAV = {
  modelos: [
    { label: "Hatchbacks", href: "/modelos?bodyType=hatchback" },
    { label: "Sedán", href: "/modelos?bodyType=sedan" },
    { label: "SUV y Todoterreno", href: "/modelos?bodyType=suv" },
    { label: "Coupés", href: "/modelos?bodyType=coupe" },
    { label: "Cabriolet y Roadster", href: "/modelos?bodyType=cabrio" },
    { label: "Grand Limousine", href: "/modelos?bodyType=limousine" },
    { label: "Vans", href: "/modelos?bodyType=van" },
  ],
  asesorate: [
    { label: "Aurelia Certified", href: "/certified" },
    { label: "Realizar consulta", href: "/consulta" },
    { label: "Fichas técnicas", href: "/fichas-tecnicas" },
    { label: "Concesionarios", href: "/concesionarios" },
  ],
  servicios: [
    { label: "Agendar turno", href: "/turno" },
    { label: "Accesorios", href: "/accesorios" },
    { label: "Collection", href: "/collection" },
    { label: "Servicios", href: "/servicios" },
    { label: "Mobile Service", href: "/mobile-service" },
    { label: "Repuestos", href: "/repuestos" },
    { label: "Recall", href: "/recall" },
    { label: "Garantía", href: "/garantia" },
  ],
  marcas: [
    { label: "Aurelia Sport", href: "/sport" },
    { label: "Aurelia Atelier", href: "/atelier" },
    { label: "Aurelia Electra", href: "/electra" },
  ],
  tecnologia: [
    { label: "Innovación", href: "/innovacion" },
    { label: "Sustentabilidad", href: "/sustentabilidad" },
    { label: "Historia", href: "/historia" },
    { label: "Movilidad eléctrica", href: "/movilidad-electrica" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
    { label: "RRHH", href: "/rrhh" },
    { label: "Prensa", href: "/prensa" },
    { label: "Política", href: "/politica" },
  ],
};

export const NAV_GROUPS = [
  { title: "Modelos", links: NAV.modelos },
  { title: "Asesorate", links: NAV.asesorate },
  { title: "Servicios", links: NAV.servicios },
  { title: "Nuestras marcas", links: NAV.marcas },
  { title: "Tecnología", links: NAV.tecnologia },
  { title: "Empresa", links: NAV.empresa },
] as const;
