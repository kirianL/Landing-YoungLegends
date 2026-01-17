import { ContactForm } from "@/components/contact-form";
import { SITE_SETTINGS } from "@/data/content";
import { Mail, Phone, MessageSquare } from "lucide-react";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === "es";
  const data = SITE_SETTINGS;

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">
            {isEs ? "Contacto" : "Contact"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {isEs
              ? "¿Tienes un proyecto en mente? Hablemos y hagamos historia."
              : "Have a project in mind? Let's talk and make history."}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter">
                {isEs ? "Información Directa" : "Direct Info"}
              </h2>
              <div className="space-y-4">
                <a
                  href={`mailto:${data.contactEmail}`}
                  className="flex items-center space-x-4 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-medium">
                    {data.contactEmail}
                  </span>
                </a>
                <a
                  href={`https://wa.me/${data.contactWhatsApp.replace(/ /g, "")}`}
                  className="flex items-center space-x-4 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-medium">
                    {data.contactWhatsApp}
                  </span>
                </a>
                <a
                  href={data.communityLink}
                  className="flex items-center space-x-4 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-medium">
                    {isEs ? "Unirse a la Comunidad" : "Join the Community"}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white/5 p-8 md:p-12 border border-white/5">
            <ContactForm locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
