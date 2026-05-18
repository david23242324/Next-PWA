import Link from "next/link";
import "./globals.css";
import SWRegistration from "./SWRegistration";

import {
  House,
  ScrollText,
  Plus,
  Orbit,
  Info,
} from "lucide-react";

export const metadata = {
  title: "TrollApp",
  description: "Insultos elegantes y originales",
  manifest: "/manifest.json",
  themeColor: "#09090c",

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
      <body className="bg-black text-white overflow-x-hidden">
        <SWRegistration />

        {/* Ambient Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7b2ff7]/15 blur-[160px] rounded-full" />
        </div>

        {/* Layout */}
        <div className="min-h-[100dvh] flex flex-col">

          {/* Header */}
          <header
            className="
              w-full
              max-w-5xl
              mx-auto
              px-4
              sm:px-6
              pt-4
              pb-3
              safe-top
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/25 text-[10px] tracking-[0.28em] uppercase">
                  TrollApp
                </p>

                <h1
                  className="
                    text-[1.9rem]
                    sm:text-[2.2rem]
                    leading-[0.9]
                    font-semibold
                    tracking-tight
                    mt-2
                  "
                >
                  Elegant Insults
                </h1>
              </div>

              <div
                className="
                  glass
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <div className="w-2 h-2 rounded-full bg-[#7b2ff7]" />
              </div>
            </div>
          </header>

          {/* Main */}
          <main
            className="
              flex-1
              w-full
              max-w-5xl
              mx-auto
              px-4
              sm:px-6
              pb-28
            "
          >
            {children}
          </main>

          {/* Bottom Navigation */}
          <nav
            className="
              fixed
              bottom-0
              left-0
              right-0
              z-50
              pb-[calc(env(safe-area-inset-bottom)+8px)]
            "
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <div
                className="
                  glass
                  rounded-[1.6rem]
                  px-5
                  py-3
                  flex
                  items-center
                  justify-between
                "
              >
                <Link
                  href="/"
                  className="text-white/60 hover:text-white transition"
                >
                  <House size={19} strokeWidth={2} />
                </Link>

                <Link
                  href="/insultos"
                  className="text-white/60 hover:text-white transition"
                >
                  <ScrollText size={19} strokeWidth={2} />
                </Link>

                {/* Center Button */}
                <Link
                  href="/agregar"
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-white
                    text-black
                    flex
                    items-center
                    justify-center
                    shadow-2xl
                    -translate-y-3
                  "
                >
                  <Plus size={19} strokeWidth={2.5} />
                </Link>

                <Link
                  href="/ruleta"
                  className="text-white/60 hover:text-white transition"
                >
                  <Orbit size={19} strokeWidth={2} />
                </Link>

                <Link
                  href="/info"
                  className="text-white/60 hover:text-white transition"
                >
                  <Info size={19} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </body>
    </html>
  );
}