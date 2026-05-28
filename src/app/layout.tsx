import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SEO } from "@/lib/constants";
import { AppLanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-primary text-text-primary" suppressHydrationWarning>
        <AppLanguageProvider>{children}</AppLanguageProvider>
      </body>
    </html>
  );
}
