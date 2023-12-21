import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../styles/globals.scss";
import { Footer, Header } from "../components";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "Caroline Mariano",
  description: "Linktree de Caroline Mariano, criado por Victor Navarro (bush1D3v)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
      <script async src="//www.instagram.com/embed.js"></script>
    </html>
  );
}
