import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "antialiased selection:bg-white selection:text-black"
        )}
      >
        <Providers attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </Providers>
      </body>
    </html>
  );
}
