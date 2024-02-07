import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from './components/header'
import Footer from './components/footer'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Islam Connect",
  description: "Tugas KRPL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
