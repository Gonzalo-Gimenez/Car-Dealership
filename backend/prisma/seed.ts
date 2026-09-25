import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const vehicles = [
  { slug: 'aurelia-a', name: 'Aurelia A', line: 'core', bodyType: 'hatchback', tagline: 'Urban precision', certified: false },
  { slug: 'aurelia-c', name: 'Aurelia C', line: 'core', bodyType: 'sedan', tagline: 'Executive sedan', certified: false },
  { slug: 'aurelia-e', name: 'Aurelia E', line: 'core', bodyType: 'sedan', tagline: 'Long-wheelbase comfort', certified: false },
  { slug: 'aurelia-s', name: 'Aurelia S', line: 'atelier', bodyType: 'sedan', tagline: 'Grand limousine', certified: false },
  { slug: 'glaurelia', name: 'GL Aurelia', line: 'core', bodyType: 'suv', tagline: 'Compact SUV', certified: false },
  { slug: 'glb-aurelia', name: 'GLB Aurelia', line: 'core', bodyType: 'suv', tagline: 'Versatile SUV', certified: false },
  { slug: 'glc-aurelia', name: 'GLC Aurelia', line: 'core', bodyType: 'suv', tagline: 'Midsize SUV', certified: false },
  { slug: 'glc-coupe', name: 'GLC Coupé Aurelia', line: 'sport', bodyType: 'suv', tagline: 'Sculpted roofline', certified: false },
  { slug: 'gle-aurelia', name: 'GLE Aurelia', line: 'core', bodyType: 'suv', tagline: 'Family flagship SUV', certified: false },
  { slug: 'g-aurelia', name: 'G Aurelia', line: 'sport', bodyType: 'suv', tagline: 'Off-road icon', certified: false },
  { slug: 'cla-coupe', name: 'CLA Coupé', line: 'core', bodyType: 'coupe', tagline: 'Four-door coupé', certified: false },
  { slug: 'cle-coupe', name: 'CLE Coupé', line: 'sport', bodyType: 'coupe', tagline: 'Performance coupé', certified: false },
  { slug: 'cle-cabrio', name: 'CLE Cabriolet', line: 'sport', bodyType: 'cabrio', tagline: 'Open-air grand tourer', certified: false },
  { slug: 'sl-roadster', name: 'SL Roadster', line: 'sport', bodyType: 'cabrio', tagline: 'Roadster heritage', certified: false },
  { slug: 'v-aurelia', name: 'V Aurelia', line: 'core', bodyType: 'van', tagline: 'Premium van', certified: false },
  { slug: 'aurelia-c-certified', name: 'Aurelia C', line: 'core', bodyType: 'sedan', tagline: 'Certified pre-owned', certified: true },
];

const spec = (power: string, fuel: string) => ({
  power,
  fuel,
  transmission: '9G automatic',
  drivetrain: 'AWD optional',
});

async function main() {
  for (const v of vehicles) {
    await prisma.vehicleModel.upsert({
      where: { slug: v.slug },
      create: {
        ...v,
        description: `${v.name} is part of the fictional Aurelia lineup for demonstration only.`,
        specs: spec('250 hp', v.line === 'electra' ? 'Electric' : 'Petrol'),
        coverPath: `/vehicles/${v.slug}.jpg`,
      },
      update: {},
    });
  }

  const dealers = [
    { name: 'Aurelia Puerto Madero', city: 'CABA', address: 'Av. Alicia Moreau de Justo 1200', phone: '+54 11 4000-1000', lat: -34.61, lng: -58.36 },
    { name: 'Aurelia Palermo', city: 'CABA', address: 'Av. del Libertador 4500', phone: '+54 11 4000-1001', lat: -34.57, lng: -58.42 },
    { name: 'Aurelia Córdoba', city: 'Córdoba', address: 'Av. Colón 5000', phone: '+54 351 400-2000', lat: -31.42, lng: -64.19 },
    { name: 'Aurelia Rosario', city: 'Rosario', address: 'Bv. Oroño 1200', phone: '+54 341 400-3000', lat: -32.95, lng: -60.64 },
  ];
  for (const d of dealers) {
    const existing = await prisma.dealer.findFirst({ where: { name: d.name } });
    if (!existing) await prisma.dealer.create({ data: d });
  }

  const accessories = [
    { name: 'All-weather floor mats', category: 'Interior', priceHint: 'Consultar', line: 'collection' },
    { name: 'Roof box 400L', category: 'Exterior', priceHint: 'Consultar', line: 'accessories' },
    { name: 'Charging cable Type 2', category: 'Electra', priceHint: 'Consultar', line: 'collection' },
    { name: 'Sport brake kit', category: 'Sport', priceHint: 'Consultar', line: 'accessories' },
  ];
  for (const a of accessories) {
    const ex = await prisma.accessory.findFirst({ where: { name: a.name } });
    if (!ex) await prisma.accessory.create({ data: a });
  }

  const pages: { slug: string; title: string; body: string }[] = [
    { slug: 'innovacion', title: 'Innovación', body: 'Aurelia invest in driver assistance and digital cockpit experiences. Fictional content for demo.' },
    { slug: 'sustentabilidad', title: 'Sustentabilidad', body: 'Electra line targets net-zero assembly by 2035 in this fictional roadmap.' },
    { slug: 'historia', title: 'Historia y marca', body: 'Founded in 1926 in this alternate history, Aurelia stands for silver-star craftsmanship.' },
    { slug: 'movilidad-electrica', title: 'Movilidad eléctrica', body: 'Electra models offer up to 500 km WLTP in seed specs (not real vehicles).' },
    { slug: 'nosotros', title: 'Sobre nosotros', body: 'Aurelia Argentina is a fictional importer for portfolio demonstration.' },
    { slug: 'contacto', title: 'Contacto', body: 'Use the inquiry form or visit a dealer.' },
    { slug: 'rrhh', title: 'Recursos humanos', body: 'Send your CV to careers@aurelia.demo (fictional).' },
    { slug: 'prensa', title: 'Prensa', body: 'Media kit available on request.' },
    { slug: 'politica', title: 'Política de calidad y medio ambiente', body: 'ISO-aligned fictional policy statement.' },
    { slug: 'servicios', title: 'Servicios y reparaciones', body: 'Official service with genuine parts.' },
    { slug: 'mobile-service', title: 'Mobile Service', body: 'Technician visits your home or office in covered cities.' },
    { slug: 'repuestos', title: 'Repuestos originales', body: 'Order parts through your dealer.' },
    { slug: 'recall', title: 'Consulta recall', body: 'Check VIN for open campaigns (demo form).' },
    { slug: 'garantia', title: 'Garantía', body: 'Factory warranty and extended plans (fictional).' },
    { slug: 'sport', title: 'Aurelia Sport', body: 'High-performance line with track-bred engineering.' },
    { slug: 'atelier', title: 'Aurelia Atelier', body: 'Ultra-luxury appointments and rear executive suites.' },
    { slug: 'electra', title: 'Aurelia Electra', body: 'Battery-electric and plug-in hybrid portfolio.' },
  ];
  for (const p of pages) {
    await prisma.contentPage.upsert({
      where: { slug: p.slug },
      create: p,
      update: { title: p.title, body: p.body },
    });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
