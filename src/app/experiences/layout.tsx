import type { Metadata } from "next";
import { type ReactElement } from "react";

export const metadata: Metadata = {
  title: "Experiências | Victor Navarro",
  description: "Experiências de Victor Navarro (bush1D3v), Engenheiro de Software"
};

export default function ExperiencesLayout({
  children
}: {
  children: React.ReactNode;
}): ReactElement {
  return <>{children}</>;
}
