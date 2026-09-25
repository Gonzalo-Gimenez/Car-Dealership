import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const spec = (power: string, fuel: string, extra: Record<string, string> = {}) => ({
  power,
  fuel,
  transmission: extra.transmission ?? '9G automatic',
  drivetrain: extra.drivetrain ?? 'AWD optional',
});

const vehicles = [
  { slug: 'aurelia-a', name: 'Aurelia A', line: 'core', bodyType: 'hatchback', tagline: 'Precisión urbana', certified: false, power: '163 hp', fuel: 'Nafta' },
  { slug: 'aurelia-c', name: 'Aurelia C', line: 'core', bodyType: 'sedan', tagline: 'Sedán ejecutivo', certified: false, power: '204 hp', fuel: 'Nafta' },
  { slug: 'aurelia-e', name: 'Aurelia E', line: 'core', bodyType: 'sedan', tagline: 'Confort de batalla larga', certified: false, power: '258 hp', fuel: 'Nafta' },
  { slug: 'aurelia-s', name: 'Aurelia S', line: 'core', bodyType: 'sedan', tagline: 'Flagship de la marca', certified: false, power: '367 hp', fuel: 'Nafta' },
  { slug: 'atelier-s', name: 'Atelier S', line: 'atelier', bodyType: 'limousine', tagline: 'Grand limousine', certified: false, power: '496 hp', fuel: 'Nafta', extra: { drivetrain: 'AWD' } },
  { slug: 'gl-aurelia', name: 'GL Aurelia', line: 'core', bodyType: 'suv', tagline: 'SUV compacto', certified: false, power: '163 hp', fuel: 'Nafta' },
  { slug: 'glb-aurelia', name: 'GLB Aurelia', line: 'core', bodyType: 'suv', tagline: 'SUV versátil', certified: false, power: '190 hp', fuel: 'Nafta' },
  { slug: 'glc-aurelia', name: 'GLC Aurelia', line: 'core', bodyType: 'suv', tagline: 'SUV mediano', certified: false, power: '258 hp', fuel: 'Nafta' },
  { slug: 'glc-coupe', name: 'GLC Coupé', line: 'sport', bodyType: 'suv', tagline: 'Techo esculpido', certified: false, power: '367 hp', fuel: 'Nafta', extra: { drivetrain: 'AWD' } },
  { slug: 'gle-aurelia', name: 'GLE Aurelia', line: 'core', bodyType: 'suv', tagline: 'SUV familiar de bandera', certified: false, power: '375 hp', fuel: 'Nafta', extra: { drivetrain: 'AWD' } },
  { slug: 'gle-coupe', name: 'GLE Coupé', line: 'sport', bodyType: 'suv', tagline: 'SUV coupé de performance', certified: false, power: '429 hp', fuel: 'Nafta', extra: { drivetrain: 'AWD' } },
  { slug: 'g-aurelia', name: 'G Aurelia', line: 'sport', bodyType: 'suv', tagline: 'Ícono off-road', certified: false, power: '421 hp', fuel: 'Nafta', extra: { drivetrain: 'AWD lock' } },
  { slug: 'cla-coupe', name: 'CLA Coupé', line: 'core', bodyType: 'coupe', tagline: 'Coupé de cuatro puertas', certified: false, power: '190 hp', fuel: 'Nafta' },
  { slug: 'cle-coupe', name: 'CLE Coupé', line: 'sport', bodyType: 'coupe', tagline: 'Coupé de performance', certified: false, power: '381 hp', fuel: 'Nafta', extra: { drivetrain: 'AWD' } },
  { slug: 'sport-gt-43', name: 'Sport GT 43', line: 'sport', bodyType: 'coupe', tagline: 'Gran turismo', certified: false, power: '421 hp', fuel: 'Nafta', extra: { drivetrain: 'RWD', transmission: '8G DCT' } },
  { slug: 'sport-gt-63', name: 'Sport GT 63', line: 'sport', bodyType: 'coupe', tagline: 'GT de pista', certified: false, power: '585 hp', fuel: 'Nafta', extra: { drivetrain: 'AWD', transmission: '8G DCT' } },
  { slug: 'cle-cabrio', name: 'CLE Cabriolet', line: 'sport', bodyType: 'cabrio', tagline: 'Grand tourer a cielo abierto', certified: false, power: '381 hp', fuel: 'Nafta' },
  { slug: 'sl-roadster', name: 'SL Roadster', line: 'sport', bodyType: 'cabrio', tagline: 'Herencia roadster', certified: false, power: '476 hp', fuel: 'Nafta', extra: { drivetrain: 'RWD' } },
  { slug: 'v-aurelia', name: 'V Aurelia', line: 'core', bodyType: 'van', tagline: 'Van premium', certified: false, power: '237 hp', fuel: 'Diésel', extra: { drivetrain: 'RWD' } },
  { slug: 'aurelia-a-electra', name: 'Aurelia A Electra', line: 'electra', bodyType: 'hatchback', tagline: 'Urbano a batería', certified: false, power: '150 kW', fuel: 'Eléctrico', extra: { transmission: '1G', drivetrain: 'FWD' } },
  { slug: 'glc-electra', name: 'GLC Electra', line: 'electra', bodyType: 'suv', tagline: 'SUV eléctrico', certified: false, power: '250 kW', fuel: 'Eléctrico', extra: { transmission: '1G', drivetrain: 'AWD' } },
  { slug: 'aurelia-c-certified', name: 'Aurelia C', line: 'core', bodyType: 'sedan', tagline: 'Usado certificado', certified: true, power: '204 hp', fuel: 'Nafta' },
];

async function main() {
  for (const v of vehicles) {
    const extra = 'extra' in v && v.extra ? v.extra : {};
    const coverBySlug: Record<string, string> = {
      'aurelia-c-certified': '/vehicles/aurelia-c.png',
      'aurelia-a-electra': '/vehicles/aurelia-a.png',
      'glc-electra': '/vehicles/glc-aurelia.png',
    };
    const coverPath = coverBySlug[v.slug] ?? `/vehicles/${v.slug}.png`;
    await prisma.vehicleModel.upsert({
      where: { slug: v.slug },
      create: {
        slug: v.slug,
        name: v.name,
        line: v.line,
        bodyType: v.bodyType,
        tagline: v.tagline,
        certified: v.certified,
        description: `${v.name} is part of the fictional Aurelia lineup for demonstration only.`,
        specs: spec(v.power, v.fuel, extra),
        coverPath,
      },
      update: {
        name: v.name,
        line: v.line,
        bodyType: v.bodyType,
        tagline: v.tagline,
        certified: v.certified,
        specs: spec(v.power, v.fuel, extra),
        coverPath,
      },
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
