import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Topbar } from "@/components/Topbar";
import { BackgroundWorldMap } from "@/components/BackgroundWorldMap";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "n8n Blueprints - Automações Prontas",
  description: "Catálogo de blueprints prontos para o n8n.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <BackgroundWorldMap />
          <Topbar />
          <div className="flex-1 flex flex-col pt-16 lg:pt-20 relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
