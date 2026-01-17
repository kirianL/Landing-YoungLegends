import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://stream.mux.com" />
      </head>
      <body
        className={cn(
          inter.className,
          "antialiased selection:bg-white selection:text-black",
        )}
      >
        <Providers attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </Providers>
      </body>
    </html>
  );
}
