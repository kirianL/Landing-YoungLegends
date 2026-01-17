"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-neutral-900 animate-pulse" />,
});

export function PortfolioRenderer({
  sections,
  locale,
}: {
  sections: any[];
  locale: string;
}) {
  if (!sections || sections.length === 0) return null;

  const currentLocale = locale as "es" | "en";

  return (
    <div className="flex flex-col">
      {sections.map((section, idx) => {
        const title = section.title?.[currentLocale];

        return (
          <section
            key={idx}
            className="py-24 border-b border-white/5 last:border-0"
          >
            <div className="container mx-auto px-6">
              {title && (
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-12 opacity-50">
                  {title}
                </h2>
              )}

              {section.type === "reelSection" && section.muxPlaybackId && (
                <div className="aspect-video w-full bg-neutral-900 overflow-hidden rounded-lg">
                  <MuxPlayer
                    playbackId={section.muxPlaybackId}
                    metadataVideoTitle={title}
                    streamType="on-demand"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              )}

              {section.type === "gallerySection" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.images?.map((img: string, i: number) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="aspect-square relative bg-neutral-900 group overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`Gallery item ${i}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              )}

              {section.type === "textSection" && (
                <div className="prose prose-invert max-w-4xl text-lg text-muted-foreground space-y-6">
                  {section.content?.[currentLocale]?.map(
                    (text: string, i: number) => (
                      <p key={i}>{text}</p>
                    ),
                  )}
                </div>
              )}

              {section.type === "discographySection" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
                  {section.items?.map((item: any, i: number) => (
                    <div key={i} className="group relative flex flex-col">
                      <div className="relative aspect-square mb-6">
                        {/* Album Cover */}
                        <div className="w-full h-full relative z-10 bg-neutral-900 border border-white/5 shadow-2xl overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            priority={i < 3}
                            quality={80}
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 250px"
                          />
                        </div>
                      </div>
                      {/* Metadata */}
                      <div className="flex justify-between items-start pt-2 border-t border-white/5 relative z-20">
                        <div className="space-y-0.5 max-w-[70%]">
                          <h4 className="text-white font-black uppercase tracking-tight text-xs md:text-sm leading-none">
                            {item.title}
                          </h4>
                          <p className="text-[10px] text-muted-foreground font-medium tracking-[0.2em] uppercase">
                            {item.type} • {item.year}
                          </p>
                        </div>
                        <div className="text-[10px] font-bold text-white/20">
                          /0{i + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
