import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../styles/globals.scss";
import { Suspense, type ReactElement } from "react";

import Loading from "./loading";
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
  title: "Victor Navarro | Software Engineer",
  description: "Portfólio Profissional de Victor Navarro (bush1D3v), Engenheiro de Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={lato.className} suppressHydrationWarning={true}>
        <ThemeProvider>
          <Header></Header>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
