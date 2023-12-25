import { type ReactElement } from "react";

export default function NotFound(): ReactElement {
  return (
    <main className="h-[69dvh] md:h-[82dvh] lg:h-[76dvh] flex flex-col items-center justify-center gap-8 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium duration-200 ease-in">Eita! 🫢</h1>
      <p className="font-bold text-2xl md:text-3xl lg:text-4xl px-6 md:px-10 lg:px-14 duration-200 ease-in">
        Parece que você tentou acessar uma página que não existe, não é mesmo? 🤔<br />
        Mas não se preocupe! Você pode retornar à nossa aplicação! 😉
      </p>
      <a
        type="button"
        href="/"
        className="rounded-3xl bg-Gray border-White border-2 text-xl md:text-2xl lg:text-3xl py-4 md:py-5 lg:py-6 px-8
        md:px-10 lg:px-12 font-bold hover:text-accent transition-all text-White hover:scale-110 hover:shadow-2xl
        shadow-white duration-200 ease-in"
      >
        Retorne a página inicial
      </a>
    </main>
  );
}
