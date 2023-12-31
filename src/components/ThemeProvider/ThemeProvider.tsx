"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ReactElement } from "react";

export default function ThemeProvider({
  children
}: React.PropsWithChildren): ReactElement {
  return (
    <NextThemeProvider>
      {children}
    </NextThemeProvider>
  );
}
