import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../styles/globals.scss";
import { type ReactElement } from "react";

import {
  Footer,
  Header,
  ThemeProvider
} from "../components";

const lato = Lato({
  subsets: [ "latin" ],
  weight: [ "100", "300", "400", "700", "900" ],
});

export const metadata: Metadata = {
  title: "Victor Navarro - Software Developer",
  description: "Portfólio profissional de Victor Navarro (bush1D3v), Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <ThemeProvider>
          <Header></Header>
          {children}
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
