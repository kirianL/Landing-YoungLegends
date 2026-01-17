import Link from "next/link";

export function Footer({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h3 className="text-xl font-bold tracking-tighter uppercase mb-4">
              Young Legends
            </h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              {isEs
                ? "Una generación que transforma el arte en legado. Más que un sello, una familia."
                : "A generation transforming art into legacy. More than a label, a family."}
            </p>
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
