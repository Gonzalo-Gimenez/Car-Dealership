import { ContentSection } from "@/components/ContentSection";
import { InquiryForm } from "@/components/InquiryForm";
import { getContent } from "@/lib/api";

export default async function RecallPage() {
  const c = await getContent("recall");
  return (
    <ContentSection
      title={c.title}
      kicker={c.kicker}
      body={c.body}
      image={c.image}
      imageAlt={c.imageAlt}
    >
      <p className="mt-8 text-sm text-zinc-500">Consulta por VIN (demo)</p>
      <InquiryForm />
    </ContentSection>
  );
}
