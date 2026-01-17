import Link from "next/link";
import { OptimizedImage } from "./optimized-image";
import { ROLE_TRANSLATIONS } from "@/data/content";
import { cn } from "@/lib/utils";

export function MemberCard({
  member,
  locale,
  index = 0,
}: {
  member: any;
  locale: string;
  index?: number;
}) {
  const isPriority = index < 4;

  return (
    <Link
      href={`/${locale}/collective/${member.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden bg-neutral-900"
    >
      {member.image ? (
        <OptimizedImage
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          priority={isPriority}
          quality={75}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-muted-foreground bg-neutral-900">
          No image
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-0 left-0 p-6 w-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-2xl font-black uppercase tracking-tighter mb-1 leading-none">
          {member.name}
        </h3>
        <div className="flex flex-wrap gap-2">
          {member.roles?.map((role: string) => (
            <span
              key={role}
              className="text-[10px] uppercase font-bold tracking-widest bg-white/20 px-2 py-0.5 rounded"
            >
              {ROLE_TRANSLATIONS[role]?.[locale] || role}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
