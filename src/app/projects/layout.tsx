import type { Metadata } from "next";
import { type ReactElement } from "react";

export const metadata: Metadata = {
  title: "Projetos | Victor navarro",
  description: "Projetos de Victor Navarro (bush1D3v), Engenheiro de Software"
};

export default function ProjectsLayout({
  children
}: {
  children: React.ReactNode;
}): ReactElement {
  return <>{children}</>;
}
