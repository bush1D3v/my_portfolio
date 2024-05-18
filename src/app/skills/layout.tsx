import type { Metadata } from "next";
import { type ReactElement } from "react";

export const metadata: Metadata = {
  title: "Habilidades | Victor Navarro",
  description: "Habilidades de Victor Navarro (bush1D3v), Engenheiro de Software"
};

export default function SkillsLayout({
  children
}: {
  children: React.ReactNode;
}): ReactElement {
  return <>{children}</>;
}
