import LocaleLayoutClient from "./layout-client";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <LocaleLayoutClient locale={locale}>{children}</LocaleLayoutClient>;
}
