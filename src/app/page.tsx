import { type ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <main className="flex flex-col items-center justify-center h-[82dvh] lg:h-[76dvh]">
      <h1 className="flex">
        Olá Mundo!
        <span className="animate-wiggle-more animate-infinite animate-ease-in-out">👋</span>
      </h1>
      <h2>Seja bem-vindo(a) ao meu portfólio!</h2>
    </main>
  );
}
