import { getContent } from "@/lib/api";
import { ContentSection } from "./ContentSection";

export async function ContentPageLoader({ slug }: { slug: string }) {
  const c = await getContent(slug);
  return <ContentSection title={c.title} body={c.body} />;
}
