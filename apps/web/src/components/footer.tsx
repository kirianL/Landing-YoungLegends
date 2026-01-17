import Link from "next/link";

export function Footer({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold tracking-tighter uppercase mb-4">
              Young Legends
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              {isEs
                ? "Una generación que transforma el arte en legado. Más que un sello, una familia."
                : "A generation transforming art into legacy. More than a label, a family."}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
              {isEs ? "Contacto" : "Contact"}
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:younglegends4lcr@gmail.com"
                className="hover:text-white transition-colors"
              >
                younglegends4lcr@gmail.com
              </a>
              <a
                href="https://wa.me/50670362578"
                className="hover:text-white transition-colors"
              >
                +506 7036 2578
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
              {isEs ? "Comunidad" : "Community"}
            </h4>
            <a
              href="https://chat.whatsapp.com/K3sq69eSw465F6o0OLYmR8"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              WhatsApp Group
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} YOUNG LEGENDS 4 LIFE ®</p>
          <div className="flex space-x-6">
            <a
              href="https://kirian.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {isEs ? "Desarrollado por kirian.dev" : "Developed by kirian.dev"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
