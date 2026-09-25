import Image from "next/image";

type Props = {
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  kicker?: string;
  children?: React.ReactNode;
};

export function ContentSection({ title, body, image, imageAlt, kicker, children }: Props) {
  return (
    <article>
      {image ? (
        <div className="relative isolate min-h-[48vh] w-full overflow-hidden pt-16">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
          <div className="relative mx-auto flex min-h-[48vh] max-w-3xl items-end px-6 pb-12">
            <div>
              {kicker ? (
                <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300">{kicker}</p>
              ) : null}
              <h1 className="mt-3 font-serif text-4xl text-white md:text-6xl">{title}</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-3xl px-6 pt-32">
          {kicker ? (
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">{kicker}</p>
          ) : null}
          <h1 className="mt-3 font-serif text-4xl text-white">{title}</h1>
        </div>
      )}
      <div className={`mx-auto max-w-3xl px-6 ${image ? "py-12" : "mt-6"} pb-24`}>
        <p className="whitespace-pre-line leading-relaxed text-zinc-400">{body}</p>
        {children}
      </div>
    </article>
  );
}
