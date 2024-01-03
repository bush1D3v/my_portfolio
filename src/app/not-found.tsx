import { type ReactElement } from "react";
import { FaHome } from "react-icons/fa";

import { LinkButton } from "@/components";

export default function NotFound(): ReactElement {
  return (
    <main className="h-[69dvh] md:h-[82dvh] lg:h-[76dvh] flex flex-col items-center justify-center gap-8 text-center">
      <h1 className="duration-200 ease-in">Eita! 🫢</h1>
      <p className="font-semibold text-2xl md:text-3xl lg:text-4xl px-6 md:px-14 duration-200 ease-in text-White">
        Parece que você tentou acessar uma página que não existe, não é mesmo? 🤔<br />
        Mas não se preocupe! Você pode retornar à nossa aplicação! 😉
      </p>
      <LinkButton
        link={"/"}
        type={"button"}
        target={"_self"}
        text={"Retorne a página inicial"}
        icon={<FaHome />}
        additionalClass={`
          border-White hover:border-Gray text-xl md:text-2xl lg:text-3xl hover:text-accent transition-all
        `}
      />
    </main>
  );
}
