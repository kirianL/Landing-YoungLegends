import { Hero } from "@/components/hero";
import { NewsCard } from "@/components/news-card";
import { MemberCard } from "@/components/member-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_SETTINGS, MEMBERS, NEWS } from "@/data/content";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === "es";
  const data = SITE_SETTINGS;

  return (
    <div>
      <Hero
        title={data.title}
        tagline={data.tagline?.[locale as "es" | "en"] || "The world is ours"}
        ctaText={isEs ? "Explorar" : "Explore"}
        locale={locale}
      />

      {/* Manifesto Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
              {data.manifestoTitle?.[locale as "es" | "en"]}
            </h2>
            <div className="text-xl md:text-3xl leading-relaxed text-muted-foreground space-y-6">
              {data.manifesto?.[locale as "es" | "en"]?.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <section className="py-24 border-t">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4">
                {isEs ? "El Equipo" : "The Team"}
              </h2>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                {isEs ? "Colectivo" : "Collective"}
              </h3>
            </div>
            <Link
              href={`/${locale}/collective`}
              className="flex items-center space-x-2 text-sm uppercase font-bold tracking-widest hover:text-white transition-colors"
            >
              <span>{isEs ? "Ver todos" : "See all"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {MEMBERS.slice(0, 6).map((member: any) => (
              <MemberCard key={member.id} member={member} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
            {isEs ? "Últimas Noticias" : "Latest News"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS.slice(0, 3).map((post: any) => (
              <NewsCard key={post.id} post={post} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
