import { ContentPageLoader } from "@/components/ContentPageLoader";
import { InquiryForm } from "@/components/InquiryForm";

export default async function ContactoPage() {
  return (
    <>
      <ContentPageLoader slug="contacto" />
      <div className="mx-auto max-w-3xl px-6 pb-24">
        <InquiryForm />
      </div>
    </>
  );
}
