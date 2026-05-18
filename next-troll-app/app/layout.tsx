import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "TrollApp",
  description: "Insultos elegantes y originales",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-900 text-white">
        <nav className="flex items-center justify-between bg-purple-700 px-6 py-4 shadow-md">
          <h1 className="text-xl font-bold">🎩 TrollApp</h1>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-pink-300 transition-colors font-semibold">
                Insultos Elegantes
              </Link>
            </li>
            <li>
              <Link href="/originales" className="hover:text-pink-300 transition-colors font-semibold">
                Originales
              </Link>
            </li>
          </ul>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
