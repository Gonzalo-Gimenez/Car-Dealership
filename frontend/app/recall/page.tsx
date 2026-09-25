import { ContentPageLoader } from "@/components/ContentPageLoader";
import { InquiryForm } from "@/components/InquiryForm";

export default function RecallPage() {
  return (
    <>
      <ContentPageLoader slug="recall" />
      <div className="mx-auto max-w-3xl px-6 pb-24">
        <p className="mb-4 text-sm text-zinc-500">Consulta por VIN (demo)</p>
        <InquiryForm />
      </div>
    </>
  );
}
