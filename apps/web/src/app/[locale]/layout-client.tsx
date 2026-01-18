"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function LocaleLayoutClient({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar locale={locale} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
