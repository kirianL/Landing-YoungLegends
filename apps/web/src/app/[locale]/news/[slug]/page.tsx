import { NEWS } from "@/data/content";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { Calendar, MapPin, ArrowLeft, Share2 } from "lucide-react";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isEs = locale === "es";
  const post = NEWS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const currentLocale = locale as "es" | "en";
  const isEvent = post.category === "event";

  const renderDescription = (text: string) => {
    if (!text) return null;

    // Split by spaces to find handles
    const parts = text.split(/(\s+)/);

    return parts.map((part, i) => {
      if (part === "@4bes4vvvv") {
        return (
          <a
            key={i}
            href="https://www.instagram.com/4bes4vvvv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 font-bold underline underline-offset-4"
          >
            {part}
          </a>
        );
      }
      if (part === "@jeybil.wtfff") {
        return (
          <a
            key={i}
            href="https://www.instagram.com/jeybil.wtfff/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 font-bold underline underline-offset-4"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Navigation */}
        <Link
          href={`/${locale}/news`}
          className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>{isEs ? "Volver a noticias" : "Back to news"}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Cover Image */}
          <div className="relative aspect-[3/4] lg:aspect-[3/4] overflow-hidden bg-muted">
            {post.image && (
              <Image
                src={post.image}
                alt={post.title?.[currentLocale] || ""}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            )}
            {isEvent && (
              <div className="absolute top-6 right-6">
                <span className="bg-primary text-white text-xs font-black uppercase px-4 py-2 tracking-tighter">
                  {isEs ? "Evento Oficial" : "Official Event"}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-xs uppercase font-black tracking-[0.2em] text-primary">
                  {post.category}
                </span>
                {isEvent && post.status === "upcoming" && (
                  <span className="flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest text-red-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>{isEs ? "Próximamente" : "Upcoming"}</span>
                  </span>
                )}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-[-0.05em] leading-[0.9] text-balance">
                {post.title?.[currentLocale]}
              </h1>
            </div>

            {/* Event Details Box */}
            {isEvent && (
              <div className="bg-muted/50 p-8 border border-white/5 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="flex items-center text-xs uppercase tracking-widest text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      {isEs ? "Fecha y Hora" : "Date & Time"}
                    </div>
                    <p className="text-xl font-bold">
                      {formatDate(post.publishedAt, locale)}
                    </p>
                  </div>
                  {post.location && (
                    <div className="space-y-2">
                      <div className="flex items-center text-xs uppercase tracking-widest text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {isEs ? "Ubicación" : "Location"}
                      </div>
                      <p className="text-xl font-bold">
                        {post.location[currentLocale]}
                      </p>
                    </div>
                  )}
                </div>
                {post.presentedBy && (
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      {isEs ? "Presentado por" : "Presented by"}
                    </p>
                    <p className="font-bold tracking-tight text-lg italic uppercase">
                      {post.presentedBy}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Excerpt/Description */}
            <div className="text-xl md:text-2xl leading-relaxed text-muted-foreground whitespace-pre-wrap">
              {renderDescription(post.excerpt?.[currentLocale] || "")}
            </div>

            {/* Video Section (Horizontal) */}
            {post.video && (
              <div className="relative aspect-video w-full overflow-hidden bg-black border border-white/5 shadow-2xl">
                <video
                  src={post.video}
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  poster={post.image || ""}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Shared/Meta */}
            <div className="pt-8 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-muted-foreground">
                <Share2 className="w-4 h-4" />
                <span>{isEs ? "Compartir" : "Share"}</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50">
                YL/FEED/{post.id}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
