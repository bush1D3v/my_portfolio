import type { Metadata } from "next";
import { type ReactElement } from "react";

export const metadata: Metadata = {
  title: "Contato | Victor navarro",
  description: "Contate Victor Navarro (bush1D3v), Engenheiro de Software"
};

export default function ContactLayout({
  children
}: {
  children: React.ReactNode;
}): ReactElement {
  return <>{children}</>;
}
