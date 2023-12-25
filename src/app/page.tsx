import { type ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <main
      className="flex flex-col items-center justify-center h-[69dvh] md:h-[82dvh] lg:h-[76dvh]
      animate-fade-down animate-ease-in-out"
    >
      <h1 className="flex ease-in duration-75">
        Olá Mundo!
        <span className="animate-wiggle-more animate-infinite animate-ease-in-out">👋</span>
      </h1>
      <h2 className="ease-in duration-75 text-center">Seja bem-vindo(a) ao meu portfólio!</h2>
    </main>
  );
}
