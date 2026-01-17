import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <div className="noise-overlay" />
      <Navbar locale={locale} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
