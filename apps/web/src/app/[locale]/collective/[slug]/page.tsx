import { PortfolioRenderer } from "@/components/portfolio-renderer";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MEMBERS, ROLE_TRANSLATIONS } from "@/data/content";
import * as motion from "framer-motion/client";

export default async function MemberProfilePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const member = MEMBERS.find((m) => m.slug === slug);
  if (!member) notFound();

  const isEs = locale === "es";

  return (
    <div className="pt-24 min-h-screen bg-black text-white relative">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Dynamic Background Effects */}
        <div
          className="absolute w-full h-full top-0 left-0"
          style={{
            background: `radial-gradient(circle at 50% -20%, ${(member as any).themeColor || "#ffffff"}44 0%, transparent 60%)`,
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute w-full h-[300px] top-0 left-0"
          style={{
            background: `linear-gradient(to bottom, ${(member as any).themeColor || "#ffffff"}22, transparent)`,
          }}
        />

        {/* Giant Background Outline Text */}
        <div className="absolute top-[10%] left-[-5%] right-[-5%] flex justify-center items-center pointer-events-none select-none -z-10 opacity-20">
          <span
            className="text-[25vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap"
            style={{
              WebkitTextStroke: `2px ${(member as any).themeColor || "#ffffff"}44`,
              color: "transparent",
            }}
          >
            {member.name}
          </span>
        </div>
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Bio Header */}
        <section className="container mx-auto px-6 py-24 flex flex-col lg:flex-row gap-12 lg:gap-24 border-b border-white/10">
          <div className="w-full lg:w-1/3 aspect-[3/4] relative bg-muted shrink-0">
            {member.image && (
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
                quality={90}
              />
            )}
          </div>
          <div className="w-full lg:w-2/3 flex flex-col justify-center min-w-0">
            <div className="flex flex-wrap gap-2 mb-6">
              {member.roles?.map((role: string) => (
                <span
                  key={role}
                  className="text-[10px] md:text-xs uppercase font-bold tracking-[0.2em] bg-white/10 px-3 py-1 rounded"
                >
                  {ROLE_TRANSLATIONS[role]?.[locale] || role}
                </span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-[-0.05em] mb-4 leading-[0.8] md:leading-[0.8] whitespace-nowrap">
              {member.name}
            </h1>
            {(member as any).monthlyListeners && (
              <div className="flex items-center gap-2 mb-8 text-neutral-400">
                <span className="text-[10px] md:text-xs uppercase font-bold tracking-[0.2em]">
                  {(member as any).monthlyListeners}{" "}
                  {isEs ? "oyentes mensuales" : "monthly listeners"}
                </span>
              </div>
            )}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              {member.bio?.[locale as "es" | "en"]}
            </p>
          </div>
        </section>

        {/* Portfolio Sections */}
        {(member as any).portfolio && (
          <PortfolioRenderer
            sections={(member as any).portfolio}
            locale={locale}
          />
        )}
      </motion.div>
    </div>
  );
}
