"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Globe, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";

const navItems = [
  { name: { es: "Inicio", en: "Home" }, href: "/" },
  { name: { es: "Sobre Nosotros", en: "About Us" }, href: "/about" },
  { name: { es: "Colectivo", en: "Collective" }, href: "/collective" },
  { name: { es: "Noticias", en: "News" }, href: "/news" },
  { name: { es: "Medios", en: "Media" }, href: "/media" },
  { name: { es: "Contacto", en: "Contact" }, href: "/contact" },
];

export function Navbar({ locale }: { locale: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLocale = locale as "es" | "en";
  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b",
        scrolled
          ? "bg-black/80 backdrop-blur-md py-6 border-white/10"
          : "bg-transparent py-6 border-transparent",
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href={`/${locale}`} className="flex items-center">
          <Image
            src="/assets/logo/YL-logo.png"
            alt="Young Legends"
            width={128}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              prefetch={true}
              className={cn(
                "text-sm uppercase tracking-widest hover:text-white transition-colors",
                pathname.includes(item.href) && item.href !== "/"
                  ? "text-white font-bold"
                  : "text-muted-foreground",
              )}
            >
              {item.name[currentLocale]}
            </Link>
          ))}

          <Link
            href={pathname.replace(`/${locale}`, `/${otherLocale}`)}
            className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-white transition-colors border border-muted-foreground/30 px-2 py-1 rounded"
          >
            <Globe className="w-3 h-3" />
            <span>{otherLocale.toUpperCase()}</span>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background border-l border-white/10 w-[300px]"
            >
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="relative w-24 h-8">
                  <Image
                    src="/assets/logo/YL-logo.png"
                    alt="Young Legends"
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={`/${locale}${item.href}`}
                    prefetch={true}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-black uppercase tracking-tighter hover:text-primary transition-colors"
                  >
                    {item.name[currentLocale]}
                  </Link>
                ))}
                <Link
                  href={pathname.replace(`/${locale}`, `/${otherLocale}`)}
                  onClick={() => setOpen(false)}
                  className="flex items-center space-x-2 text-sm text-muted-foreground pt-6 border-t border-white/10"
                >
                  <Globe className="w-4 h-4" />
                  <span>
                    {otherLocale === "es"
                      ? "Switch to Spanish"
                      : "Switch to English"}
                  </span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
