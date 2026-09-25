import { ContentSection } from "@/components/ContentSection";
import { InquiryForm } from "@/components/InquiryForm";
import { findCatalog } from "@/lib/catalog";
import { getContent } from "@/lib/api";

export default async function ConsultaPage({
  searchParams,
}: {
  searchParams: Promise<{ modelo?: string }>;
}) {
  const { modelo } = await searchParams;
  const vehicle = modelo ? findCatalog(modelo) : undefined;
  const c = await getContent("consulta");
  return (
    <ContentSection
      title={c.title}
      kicker={c.kicker}
      image={c.image}
      imageAlt={c.imageAlt}
      body={
        vehicle
          ? `Consulta sobre ${vehicle.name}. Un asesor Aurelia (demo) responderá.`
          : c.body
      }
    >
      <InquiryForm modelId={vehicle?.id} />
    </ContentSection>
  );
}
