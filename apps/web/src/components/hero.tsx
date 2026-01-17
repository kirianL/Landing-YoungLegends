"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  tagline: string;
  ctaText: string;
  locale: string;
}

export function Hero({ title, tagline, ctaText, locale }: HeroProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const translateKbraX = useTransform(dx, [-500, 500], [-15, 15]);
  const translateKbraY = useTransform(dy, [-500, 500], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-6">
      {/* Background with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
        <motion.div
          animate={{
            scale: [1, 1.1],
            x: [0, -10],
            y: [0, -5],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="w-full h-full"
        >
          <Image
            src="/assets/hero/HeroYL.jpg"
            alt="Young Legends"
            fill
            className="object-cover opacity-60"
            priority
            quality={90}
            sizes="100vw"
          />
        </motion.div>
      </div>

      {/* Film Grain Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="absolute inset-[-200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain" />
      </div>

      <div className="relative z-20 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium mb-4 text-muted-foreground"
        >
          {tagline}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.05em] mb-8 leading-[0.8] text-balance"
        >
          {title.split(".").map((part, i) => (
            <span key={i} className="block">
              {part}
              {i < title.split(".").length - 1 ? "." : ""}
            </span>
          ))}
        </motion.h1>

        {/* Kbra Logo with Parallax and Glitch */}
        <motion.div
          style={{ x: translateKbraX, y: translateKbraY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-64 h-32 mx-auto mb-8 cursor-pointer group"
        >
          <div className="w-full h-full relative group-hover:animate-glitch">
            <Image
              src="/assets/hero/KbraYL.png"
              alt="Kbra"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 256px, 256px"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href={`/${locale}/collective`}
            className="inline-block bg-white text-black px-10 py-4 font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 relative group overflow-hidden"
          >
            <span className="relative z-10">{ctaText}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-[1px] h-16 bg-white" />
      </div>
    </section>
  );
}
