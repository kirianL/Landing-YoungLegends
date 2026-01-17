import { SITE_SETTINGS } from "@/data/content";
import { OptimizedImage } from "@/components/optimized-image";
import * as motion from "framer-motion/client";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = SITE_SETTINGS;
  const isEs = locale === "es";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-neutral-800 selection:text-white relative overflow-x-hidden">
      <div className="fixed inset-0 bg-[url('/assets/noise.svg')] opacity-20 pointer-events-none z-50 mix-blend-overlay transform-gpu" />
      {/* 
        HERO SECTION: STACKED MAGAZINE LAYOUT
        Priority: Full visibility of the 'nosotros.jpg' group image.
        Mobile: Title -> Image (Aspect Ratio Preserved) -> Content.
        Desktop: Immersive theater mode.
      */}
      <section className="relative w-full pt-32 pb-12 md:py-0 md:h-screen flex flex-col md:justify-center overflow-hidden">
        {/* Mobile: Title Top */}
        <div className="md:hidden container mx-auto px-4 mb-8 text-center relative z-20">
          <h1 className="text-6xl font-black uppercase tracking-tighter text-white leading-[0.8]">
            Young
            <br />
            Legends
          </h1>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] font-medium text-neutral-400">
            {data.tagline?.[locale as "es" | "en"]}
          </p>
        </div>

        {/* Image Container 
            Mobile: Aspect ratio 4/3 or 3/2 to show the group wide.
            Desktop: Absolute full cover.
        */}
        <div className="relative w-full aspect-[4/3] md:absolute md:inset-0 md:aspect-auto z-0">
          <OptimizedImage
            src="/assets/we/nosotros.jpg"
            alt="Young Legends Collective"
            fill
            priority
            className="md:hidden object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
          />
          <OptimizedImage
            src="/assets/we/nosotros.jpg"
            alt="Young Legends Collective"
            fill
            priority
            className="hidden md:block object-cover object-top opacity-60"
            sizes="100vw"
            quality={90}
          />

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:via-black/40" />
        </div>

        {/* Desktop Title (Overlay) & Mobile Spacer */}
        <div className="relative z-10 w-full container mx-auto px-6 text-center hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[10vw] leading-[0.75] font-black uppercase tracking-tighter text-white mix-blend-overlay mb-6">
              Young Legends
            </h1>
            <p className="max-w-xl mx-auto text-lg uppercase tracking-[0.4em] font-medium text-white/80">
              {data.tagline?.[locale as "es" | "en"]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 
        NARRATIVE FLOW
      */}
      <section className="relative py-24 md:py-32 container mx-auto px-6 max-w-5xl">
        <h2 className="sr-only">Manifesto</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Decorative '01' - Now in its own column */}
          <div className="md:col-span-3">
            <span className="text-[8rem] md:text-[10rem] font-black text-blue-600 leading-[0.8] block select-none">
              01
            </span>
          </div>

          {/* Content */}
          <div className="md:col-span-9 space-y-8 pt-4">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none mb-12">
              {data.manifestoTitle?.[locale as "es" | "en"]}
            </h3>
            {/* @ts-ignore */}
            {data.manifesto?.[locale as "es" | "en"]?.map((text, i) => (
              <p
                key={i}
                className="text-xl md:text-3xl font-light text-neutral-300 leading-normal md:leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 
        VISUAL INTERLUDE: GROUP 2
      */}
      <section className="w-full relative h-[50vh] md:h-[80vh] overflow-hidden my-12">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full relative"
        >
          <OptimizedImage
            src="/assets/we/YL-Group2.jpg"
            alt="Studio Session"
            fill
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </motion.div>
      </section>

      {/* 
        HISTORY
      */}
      <section className="py-24 container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Decorative '02' - In its own column */}
          <div className="md:col-span-3">
            <span className="text-[8rem] md:text-[10rem] font-black text-white leading-[0.8] block select-none">
              02
            </span>
          </div>

          {/* Content */}
          <div className="md:col-span-9 flex flex-col pt-4">
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-[0.4em] font-bold text-neutral-500 border-t border-neutral-800 pt-4 inline-block">
                {isEs ? "Nuestra Historia" : "Our History"}
              </h3>
            </div>
            <div className="space-y-8">
              {/* @ts-ignore */}
              {data.history?.[locale as "es" | "en"]?.map((text, i) => (
                <p key={i} className="text-lg text-neutral-400 leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 
        STATS: FULL WIDTH ROWS
      */}
      <section className="py-24 border-t border-neutral-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col">
            {/* Stats Header */}
            <div className="pb-8 mb-8 border-b border-neutral-800">
              <h3 className="text-sm font-mono text-neutral-500 uppercase">
                {isEs ? "Estadísticas" : "Key Metrics"}
              </h3>
            </div>

            {/* Stat Rows */}
            {/* @ts-ignore */}
            {data.stats?.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-neutral-900 group cursor-default"
              >
                <span className="text-sm md:text-base uppercase tracking-[0.3em] text-neutral-500 group-hover:text-white transition-colors mb-4 md:mb-0">
                  {stat.label?.[locale as "es" | "en"]}
                </span>
                <span className="text-7xl md:text-8xl font-black tracking-tighter text-white">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        PILLARS: VERTICAL LIST
      */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-[15vw] md:text-[12vw] font-black text-red-600 text-center leading-none mb-12 select-none">
          {isEs ? "VALORES" : "VALUES"}
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-12 md:gap-16">
          {/* @ts-ignore */}
          {data.pillars?.map((pillar, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-4 md:gap-12 items-start"
            >
              <span className="text-xs font-mono border border-neutral-800 rounded-full px-3 py-1 text-neutral-500">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
                  {pillar.title?.[locale as "es" | "en"]}
                </h3>
                <p className="text-neutral-400 text-base md:text-lg max-w-md">
                  {pillar.description?.[locale as "es" | "en"]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER ANCHOR */}
      <section className="h-[50vh] flex items-center justify-center bg-white text-black px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter max-w-5xl mx-auto leading-tight mb-8">
            {isEs ? "Esto es solo el comienzo." : "This is just the beginning."}
          </h2>
          <div className="flex justify-center">
            <OptimizedImage
              src="/assets/costa-rica.png"
              alt="Costa Rica"
              width={64}
              height={64}
              className="w-16 h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
