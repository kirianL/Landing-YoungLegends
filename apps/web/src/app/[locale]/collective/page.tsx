import { CollectiveView } from "@/components/collective-view";
import { MEMBERS } from "@/data/content";

export default async function CollectivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4">
            {isEs ? "Nuestro Colectivo" : "Our Collective"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {isEs
              ? "Un grupo diverso de creativos unidos por el deseo de construir algo más grande."
              : "A diverse group of creatives united by the desire to build something bigger."}
          </p>
        </header>

        <CollectiveView members={MEMBERS} locale={locale} />
      </div>
    </div>
  );
}
