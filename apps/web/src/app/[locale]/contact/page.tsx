import { SITE_SETTINGS } from "@/data/content";
import { Mail, Phone, MessageSquare, Instagram, Globe } from "lucide-react";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === "es";
  const data = SITE_SETTINGS;

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col justify-center">
      <div className="fixed inset-0 bg-[url('/assets/noise.svg')] opacity-20 pointer-events-none z-50 mix-blend-overlay transform-gpu" />

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <header className="space-y-6">
            <h1 className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-none text-white">
              {isEs ? "Contacto" : "Contact"}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
              {isEs
                ? "¿Tienes un proyecto en mente o quieres ser parte del movimiento? Hablemos y hagamos historia."
                : "Have a project in mind or want to be part of the movement? Let's talk and make history."}
            </p>
          </header>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent my-16" />

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
            {/* Email */}
            <a
              href={`mailto:${data.contactEmail}`}
              className="group flex flex-col items-center space-y-4 p-8 border border-white/5 hover:border-white/20 transition-all bg-white/[0.02] hover:bg-white/[0.05]"
            >
              <div className="p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">
                  Email
                </p>
                <p className="text-lg font-bold break-all">
                  {data.contactEmail}
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${data.contactWhatsApp.replace(/ /g, "")}`}
              className="group flex flex-col items-center space-y-4 p-8 border border-white/5 hover:border-white/20 transition-all bg-white/[0.02] hover:bg-white/[0.05]"
            >
              <div className="p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500">
                <Phone className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">
                  WhatsApp
                </p>
                <p className="text-xl font-bold">{data.contactWhatsApp}</p>
              </div>
            </a>

            {/* Community */}
            <a
              href={data.communityLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-4 p-8 border border-white/5 hover:border-white/20 transition-all bg-white/[0.02] hover:bg-white/[0.05]"
            >
              <div className="p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500">
                <MessageSquare className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">
                  {isEs ? "Comunidad" : "Community"}
                </p>
                <p className="text-xl font-bold">YL / CHAT</p>
              </div>
            </a>
          </div>

          {/* Footer branding */}
          <div className="pt-24 opacity-20 pointer-events-none select-none">
            <h2 className="text-[15vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap overflow-hidden">
              Young Legends Young Legends Young Legends
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
