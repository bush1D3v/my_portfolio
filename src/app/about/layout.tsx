import type { Metadata } from "next";
import { type ReactElement } from "react";

export const metadata: Metadata = {
  title: "Sobre | Victor Navarro",
  description: "Sobre o Victor Navarro (bush1D3v), Engenheiro de Software"
};

export default function AboutLayout({
  children
}: {
  children: React.ReactNode;
}): ReactElement {
  return <>{children}</>;
}
