import { NewsCard } from "@/components/news-card";
import { NEWS } from "@/data/content";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">
            {isEs ? "Noticias" : "News"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {isEs
              ? "Lo último de Young Legends: lanzamientos, colaboraciones y anuncios."
              : "The latest from Young Legends: releases, collaborations, and announcements."}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {NEWS.map((post) => (
            <NewsCard key={post.id} post={post} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  );
}
