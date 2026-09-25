import { ContentSection } from "@/components/ContentSection";
import { InquiryForm } from "@/components/InquiryForm";

export default function ConsultaPage() {
  return (
    <ContentSection title="Realizar consulta" body="Completá el formulario y un asesor Aurelia (demo) responderá.">
      <InquiryForm />
    </ContentSection>
  );
}
