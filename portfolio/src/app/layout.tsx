import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header'

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Платформа для демонстрации ваших работ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className + ' bg-black text-white'}>
        <Header />
        <main className="min-h-screen bg-black">
          {children}
        </main>
      </body>
    </html>
  );
}
