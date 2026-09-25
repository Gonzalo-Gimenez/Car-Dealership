import { ContentSection } from "@/components/ContentSection";
import { InquiryForm } from "@/components/InquiryForm";
import { getContent } from "@/lib/api";

export default async function ContactoPage() {
  const c = await getContent("contacto");
  return (
    <ContentSection
      title={c.title}
      kicker={c.kicker}
      body={c.body}
      image={c.image}
      imageAlt={c.imageAlt}
    >
      <InquiryForm />
    </ContentSection>
  );
}
