import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { MapPin, Calendar } from "lucide-react";

export function NewsCard({ post, locale }: { post: any; locale: string }) {
  const currentLocale = locale as "es" | "en";
  const isEvent = post.category === "event";

  return (
    <Link
      href={`/${locale}/news/${post.slug}`}
      className="flex flex-col group relative overflow-hidden bg-muted aspect-[3/4]"
    >
      <div className="absolute inset-0 z-0">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title?.[currentLocale] || ""}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
      </div>

      <div className="relative z-20 mt-auto p-6 flex flex-col space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-black tracking-[0.2em] text-white bg-primary px-2 py-0.5">
            {post.category || "General"}
          </span>
          {isEvent && (
            <span className="text-[10px] uppercase font-black tracking-[0.2em] text-black bg-white px-2 py-0.5">
              {locale === "es" ? "Evento" : "Event"}
            </span>
          )}
        </div>

        <h3 className="text-2xl font-black uppercase tracking-tighter text-white leading-none">
          {post.title?.[currentLocale]}
        </h3>

        <div className="flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          <div className="flex items-center text-[10px] text-white/70 uppercase tracking-widest">
            <Calendar className="w-3 h-3 mr-1" />
            <span>
              {post.publishedAt ? formatDate(post.publishedAt, locale) : ""}
            </span>
          </div>
          {isEvent && post.location && (
            <div className="flex items-center text-[10px] text-white/70 uppercase tracking-widest">
              <MapPin className="w-3 h-3 mr-1" />
              <span>{post.location[currentLocale]}</span>
            </div>
          )}
          {isEvent && post.status === "upcoming" && (
            <span className="text-[10px] uppercase font-bold tracking-widest text-red-500 animate-pulse pt-1">
              Live
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
