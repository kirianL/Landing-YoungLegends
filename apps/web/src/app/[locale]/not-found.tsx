"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound() {
  const params = useParams();
  const locale = (params?.locale as string) || "es";

  const content = {
    es: {
      title: "404",
      subtitle: "Página no encontrada",
      description: "Parece que te has perdido en las calles de Young Legends.",
      backHome: "Volver al inicio",
    },
    en: {
      title: "404",
      subtitle: "Page Not Found",
      description: "It seems you've got lost in the streets of Young Legends.",
      backHome: "Back to Home",
    },
  };

  const currentContent = locale === "en" ? content.en : content.es;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground relative overflow-hidden px-6">
      {/* Background Noise/Grain is handled by the global layout noise-overlay */}

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[12rem] md:text-[20rem] font-black leading-none tracking-tighter text-white/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {currentContent.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <h2
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 font-erode glitch-text"
            data-text={currentContent.title}
          >
            {currentContent.title}
          </h2>
          <p className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-8 text-white/80">
            {currentContent.subtitle}
          </p>
          <p className="max-w-md mx-auto text-muted-foreground mb-12 text-lg">
            {currentContent.description}
          </p>

          <Link
            href={`/${locale}`}
            className="inline-block border border-white px-8 py-4 text-sm font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            {currentContent.backHome}
          </Link>
        </motion.div>
      </div>

      {/* Atmospheric Glitch Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-px bg-white/20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-px bg-white/10" />
      </div>

      <style jsx>{`
        .glitch-text {
          position: relative;
          text-shadow: 2px 0 10px rgba(255, 255, 255, 0.5);
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--background);
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow:
            -2px 0 #00fff9,
            2px 2px #ff00c1;
          animation: glitch-anim2 1s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% {
            clip: rect(31px, 9999px, 94px, 0);
          }
          20% {
            clip: rect(70px, 9999px, 71px, 0);
          }
          40% {
            clip: rect(2px, 9999px, 48px, 0);
          }
          60% {
            clip: rect(62px, 9999px, 1px, 0);
          }
          80% {
            clip: rect(93px, 9999px, 52px, 0);
          }
          100% {
            clip: rect(45px, 9999px, 85px, 0);
          }
        }
        @keyframes glitch-anim2 {
          0% {
            clip: rect(65px, 9999px, 100px, 0);
          }
          20% {
            clip: rect(30px, 9999px, 20px, 0);
          }
          40% {
            clip: rect(10px, 9999px, 60px, 0);
          }
          60% {
            clip: rect(50px, 9999px, 30px, 0);
          }
          80% {
            clip: rect(80px, 9999px, 10px, 0);
          }
          100% {
            clip: rect(20px, 9999px, 90px, 0);
          }
        }
      `}</style>
    </div>
  );
}
