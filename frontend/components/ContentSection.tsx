type Props = { title: string; body: string; children?: React.ReactNode };

export function ContentSection({ title, body, children }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24 pt-32">
      <h1 className="font-serif text-4xl text-white">{title}</h1>
      <p className="mt-6 leading-relaxed text-zinc-400">{body}</p>
      {children}
    </article>
  );
}
