import { AppointmentForm } from "@/components/AppointmentForm";
import { ContentSection } from "@/components/ContentSection";

export default function TurnoPage() {
  return (
    <ContentSection
      title="Agendar turno de servicio"
      body="Elegí concesionario y horario. Demo sin confirmación real."
    >
      <AppointmentForm />
    </ContentSection>
  );
}
