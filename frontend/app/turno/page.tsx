import { AppointmentForm } from "@/components/AppointmentForm";
import { ContentSection } from "@/components/ContentSection";
import { getContent } from "@/lib/api";

export default async function TurnoPage() {
  const c = await getContent("turno");
  return (
    <ContentSection
      title={c.title}
      kicker={c.kicker}
      body={c.body}
      image={c.image}
      imageAlt={c.imageAlt}
    >
      <AppointmentForm />
    </ContentSection>
  );
}
