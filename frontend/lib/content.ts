export type ContentPage = {
  slug: string;
  title: string;
  kicker: string;
  body: string;
  image: string;
  imageAlt: string;
};

const SHOWROOM = "/content/showroom.png";
const WORKSHOP = "/content/workshop.png";
const LAB = "/content/lab.png";
const CHARGE = "/content/charge.png";
const ATELIER = "/content/atelier.png";
const COLLECTION = "/content/collection.png";

export const CONTENT: Record<string, ContentPage> = {
  innovacion: {
    slug: "innovacion",
    title: "Innovación",
    kicker: "Tecnología",
    image: LAB,
    imageAlt: "Cockpit digital Aurelia de demostración",
    body: `Aurelia desarrolla asistencia al conductor, un cockpit OLED de horizonte amplio y actualizaciones remotas de software. En esta demostración, cada modelo comparte una plataforma electrónica común.

El Aura Drive interpreta cámaras, radar y ultrasonido para mantener el carril, regular la distancia y estacionar en espacios estrechos de ciudad. El conductor siempre puede retomar el control.

Ningún sistema de esta ficha es un producto real: es un recorte de portafolio para mostrar cómo se presentaría una marca de lujo.`,
  },
  sustentabilidad: {
    slug: "sustentabilidad",
    title: "Sustentabilidad",
    kicker: "Tecnología",
    image: CHARGE,
    imageAlt: "Carga nocturna de un Aurelia Electra",
    body: `La hoja de ruta ficticia de Aurelia apunta a ensamblaje neto cero en 2035 y a una red Electra con energía renovable certificada en los puntos de carga de la demo.

Los talleres de la red reacondicionan baterías y reciclan aluminio estructural. Los materiales de tapicería Atelier incluyen cuero de origen trazable y textiles técnicos de origen vegetal.

Los números de autonomía y CO₂ que ves en las fichas son seeds de catálogo, no mediciones de laboratorio.`,
  },
  historia: {
    slug: "historia",
    title: "Historia y marca",
    kicker: "Tecnología",
    image: SHOWROOM,
    imageAlt: "Showroom Aurelia de noche",
    body: `En esta historia alternativa Aurelia nace en 1926 como taller de carrocerías de plata pulida. La calandra vertical y el óvalo A son marcas propias de la demo: no copian emblemas de ningún fabricante real.

La red argentina abre en 1994 con un único punto en Puerto Madero. Hoy la ficción suma Palermo, Córdoba y Rosario.

Esta web es un clon de IA con fines de portafolio. Aurelia no está afiliada a Mercedes-Benz ni a importadores reales.`,
  },
  "movilidad-electrica": {
    slug: "movilidad-electrica",
    title: "Movilidad eléctrica",
    kicker: "Tecnología",
    image: CHARGE,
    imageAlt: "SUV compacto eléctrico cargando en la calle",
    body: `La línea Electra cubre el hatch A y el SUV GLC con trenes a batería de demostración. La autonomía de seed llega a 500 km WLTP en el GLC Electra y a 380 km en el A Electra.

La recarga de 10 a 80 % se estima en 22 minutos en un punto de 150 kW. El cable Tipo 2 y el wallbox de 11 kW forman parte de Collection.

Son especificaciones de catálogo para esta demo, no vehículos a la venta.`,
  },
  nosotros: {
    slug: "nosotros",
    title: "Sobre nosotros",
    kicker: "Empresa",
    image: SHOWROOM,
    imageAlt: "Concesionario Aurelia con piso de piedra",
    body: `Aurelia Argentina es un importador ficticio creado para este portafolio. Opera showrooms, talleres oficiales y un canal digital de consulta.

El equipo de la demo cubre ventas, postventa, Atelier y Electra. No hay operación comercial real detrás de los formularios: cada envío queda en el navegador si el API no está en marcha.

Si llegaste desde un buscador, esto no es un sitio oficial de ninguna marca de lujo existente.`,
  },
  contacto: {
    slug: "contacto",
    title: "Contacto",
    kicker: "Empresa",
    image: SHOWROOM,
    imageAlt: "Interior del showroom Aurelia",
    body: `Escribí por el formulario o visitá un concesionario de la red demo. Un asesor ficticio responde consultas de modelos, turnos y Collection.

Horario de salón en la ficción: lunes a viernes de 9 a 18, sábados de 9 a 13. Teléfono central: +54 11 4000-1000.`,
  },
  rrhh: {
    slug: "rrhh",
    title: "Recursos humanos",
    kicker: "Empresa",
    image: SHOWROOM,
    imageAlt: "Espacio de marca Aurelia",
    body: `Buscamos perfiles de ventas, técnicos de Electra y especialistas Atelier para esta red de demostración. Enviá tu CV a careers@aurelia.demo.

No hay proceso de selección real. El correo es un buzón de ejemplo para completar la sección Empresa.`,
  },
  prensa: {
    slug: "prensa",
    title: "Prensa",
    kicker: "Empresa",
    image: LAB,
    imageAlt: "Habitáculo digital Aurelia",
    body: `El kit de prensa de Aurelia Argentina incluye recortes de producto, fotos de showroom y una guía de marca. Todo el material es original de esta demo.

Pedí acceso por el formulario de contacto. No hay sala de prensa corporativa ni voceros reales.`,
  },
  politica: {
    slug: "politica",
    title: "Política de calidad y medio ambiente",
    kicker: "Empresa",
    image: SHOWROOM,
    imageAlt: "Showroom Aurelia",
    body: `Aurelia declara, en esta ficción, un sistema de gestión alineado a ISO 9001 e ISO 14001. La postventa registra cada intervención y los residuos de taller se trazan hasta el recicladador.

Los datos personales del formulario se usan sólo para la demo. No hay transferencia a terceros ni base de producción.`,
  },
  servicios: {
    slug: "servicios",
    title: "Servicios y reparaciones",
    kicker: "Servicios",
    image: WORKSHOP,
    imageAlt: "Taller oficial Aurelia",
    body: `La red oficial cubre mantenimiento programado, diagnosis electrónica y carrocería. Los recambios son de catálogo Aurelia: no hay stock real.

Agendá un turno desde la web o el concesionario más cercano. Mobile Service cubre CABA y Rosario en la demo.

Cada intervención queda documentada en la ficha Certified del vehículo.`,
  },
  "mobile-service": {
    slug: "mobile-service",
    title: "Mobile Service",
    kicker: "Servicios",
    image: WORKSHOP,
    imageAlt: "Bahía de servicio Aurelia",
    body: `Un técnico se acerca a domicilio u oficina en las ciudades cubiertas. El servicio incluye cambios de aceite, software, revisiones pre-viaje y diagnóstico.

La unidad móvil lleva recambios de alta rotación. Trabajos de carrocería o tren de rodaje se derivan al taller fijo.

Reservá desde Agendar turno eligiendo “Mobile Service” como tipo.`,
  },
  repuestos: {
    slug: "repuestos",
    title: "Repuestos originales",
    kicker: "Servicios",
    image: WORKSHOP,
    imageAlt: "Taller con recambios Aurelia",
    body: `Los recambios se piden a través del concesionario. Pastillas, filtros, ópticas y kits de carga Electra están en el catálogo de demostración.

Si tu modelo es Certified, la garantía de recambio sigue la misma red. Consultá disponibilidad por el formulario.`,
  },
  recall: {
    slug: "recall",
    title: "Consulta recall",
    kicker: "Servicios",
    image: WORKSHOP,
    imageAlt: "Diagnóstico en taller Aurelia",
    body: `Ingresá tus datos para simular una consulta de campañas abiertas. En esta demo no hay VIN real ni campañas vigentes.

Si el API está apagado, el formulario confirma igual para que puedas recorrer el flujo.`,
  },
  garantia: {
    slug: "garantia",
    title: "Garantía",
    kicker: "Servicios",
    image: WORKSHOP,
    imageAlt: "Service oficial Aurelia",
    body: `La garantía de fábrica ficticia cubre 3 años o 100.000 km, lo que ocurra primero. Certified suma 12 meses extra sobre usados revisados.

Los planes extendidos se cotizan en concesionario. Esta página no emite pólizas reales.`,
  },
  consulta: {
    slug: "consulta",
    title: "Realizar consulta",
    kicker: "Asesorate",
    image: SHOWROOM,
    imageAlt: "Asesoramiento en el showroom Aurelia",
    body: `Completá el formulario y un asesor Aurelia (demo) responderá sobre el modelo que te interesa, disponibilidad ficticia y prueba de manejo.`,
  },
  turno: {
    slug: "turno",
    title: "Agendar turno de servicio",
    kicker: "Servicios",
    image: WORKSHOP,
    imageAlt: "Taller Aurelia listo para un turno",
    body: `Elegí concesionario, tipo de trabajo y horario. La confirmación es de demostración: no se reserva un bay real.`,
  },
  certified: {
    slug: "certified",
    title: "Aurelia Certified",
    kicker: "Asesorate",
    image: SHOWROOM,
    imageAlt: "Usados certificados en el salón Aurelia",
    body: `Cada usado Certified pasa por 120 puntos de control, historial de service y garantía de la red. Las unidades de esta lista son de catálogo, no stock real.`,
  },
  sport: {
    slug: "sport",
    title: "Aurelia Sport",
    kicker: "Nuestras marcas",
    image: "/vehicles/promo-cla.png",
    imageAlt: "Línea Aurelia Sport",
    body: `Alta performance: GT, coupés, cabrios y SUV de techo esculpido. Vehículos ficticios con calibración de chasis propia.`,
  },
  atelier: {
    slug: "atelier",
    title: "Aurelia Atelier",
    kicker: "Nuestras marcas",
    image: ATELIER,
    imageAlt: "Suite trasera Aurelia Atelier",
    body: `Grand limousines y suites traseras a medida. Madera, cuero y un lounge enfrentado para viaje ejecutivo. Línea de ultra lujo ficticia.`,
  },
  electra: {
    slug: "electra",
    title: "Aurelia Electra",
    kicker: "Nuestras marcas",
    image: CHARGE,
    imageAlt: "Aurelia Electra en carga",
    body: `Movilidad electrificada del roadmap ficticio. Hatch y SUV a batería, con la misma silueta de Core y tren de demostración.`,
  },
};

export function getLocalContent(slug: string): ContentPage | undefined {
  return CONTENT[slug];
}
