import Link from "next/link";
import "./globals.css";
import SWRegistration from "./SWRegistration";
import { House, ScrollText, Settings } from "lucide-react";

export const metadata = {
  title: "TrollApp",
  description: "Insultos elegantes y originales",
  manifest: "/manifest.json",
  themeColor: "#7b6f4b",
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-gray-100 text-black overflow-x-hidden">
        <SWRegistration />

        {/* Layout */}
        <div className="min-h-[100dvh] flex flex-col">

          {/* Header */}
          <header className="bg-[#7b6f4b] text-white text-center py-5 text-2xl font-bold tracking-tight animate-fadeIn shadow-md">
            TrollApp
          </header>

          {/* Main */}
          <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6">
            {children}
          </main>

          {/* Bottom Navigation */}
          <nav className="bg-white border-t flex justify-around py-3 shadow-inner">
            <Link
              href="/"
              className="w-12 h-12 rounded-full bg-[#7b6f4b] text-white flex items-center justify-center transition-transform hover:scale-110 hover:bg-[#6a5f3f]"
            >
              <House size={22} strokeWidth={2.2} />
            </Link>
            <Link
              href="/insultos"
              className="w-12 h-12 rounded-full bg-[#7b6f4b] text-white flex items-center justify-center transition-transform hover:scale-110 hover:bg-[#6a5f3f]"
            >
              <ScrollText size={22} strokeWidth={2.2} />
            </Link>
            <Link
              href="/config"
              className="w-12 h-12 rounded-full bg-[#7b6f4b] text-white flex items-center justify-center transition-transform hover:scale-110 hover:bg-[#6a5f3f]"
            >
              <Settings size={22} strokeWidth={2.2} />
            </Link>
          </nav>
        </div>
      </body>
    </html>
  );
}
