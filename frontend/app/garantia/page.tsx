import { ContentPageLoader } from "@/components/ContentPageLoader";
import { InquiryForm } from "@/components/InquiryForm";

export default function GarantiaPage() {
  return (
    <>
      <ContentPageLoader slug="garantia" />
      <div className="mx-auto max-w-3xl px-6 pb-24">
        <InquiryForm />
      </div>
    </>
  );
}
