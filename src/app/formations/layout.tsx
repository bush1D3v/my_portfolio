import type { Metadata } from "next";
import { type ReactElement } from "react";

export const metadata: Metadata = {
  title: "Formações | Victor navarro",
  description: "Formações de Victor Navarro (bush1D3v), Engenheiro de Software"
};

export default function FormationsLayout({
  children
}: {
  children: React.ReactNode;
}): ReactElement {
  return <>{children}</>;
}
