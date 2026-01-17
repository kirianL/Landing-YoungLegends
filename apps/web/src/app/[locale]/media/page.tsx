import { Youtube, Music } from "lucide-react";

export default async function MediaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === "es";

  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@xeuzg?si=ePKf-6q62_FJlEJ2",
      color: "text-red-500",
      description: isEs
        ? "Sigue nuestro canal oficial para videos y contenido exclusivo."
        : "Follow our official channel for videos and exclusive content.",
    },
    {
      name: "Spotify",
      icon: Music,
      url: "https://open.spotify.com/intl-es/artist/7DAssSa8U1Ny7iRhshYCG3?si=lGdPRReFSZC_Y8P7WWy9jQ",
      color: "text-green-500",
      description: isEs
        ? "Escucha lo último del colectivo y nuestros artistas."
        : "Listen to the latest from the collective and our artists.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col justify-center">
      <div className="fixed inset-0 bg-[url('/assets/noise.svg')] opacity-20 pointer-events-none z-50 mix-blend-overlay transform-gpu" />

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <header className="space-y-6">
            <h1 className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-none text-white">
              {isEs ? "Medios" : "Media"}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
              {isEs
                ? "Conecta con Young Legends a través de nuestras plataformas oficiales."
                : "Connect with Young Legends through our official platforms."}
            </p>
          </header>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent my-16" />

          {/* Media Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-6 p-12 border border-white/5 hover:border-white/20 transition-all bg-white/[0.02] hover:bg-white/[0.05] rounded-sm"
              >
                <div className="p-6 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500">
                  <link.icon className={`w-12 h-12 ${link.color}`} />
                </div>
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-black uppercase tracking-tighter">
                    {link.name}
                  </h2>
                  <p className="text-neutral-500 max-w-xs mx-auto">
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Footer branding */}
          <div className="pt-24 opacity-20 pointer-events-none select-none">
            <h2 className="text-[15vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap overflow-hidden">
              YL4L YL4L YL4L YL4L YL4L
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
