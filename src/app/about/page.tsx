import { Suspense, type ReactElement } from "react";
import { FiUpload } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";

import { LinkButton } from "@/components";

import { Photo, TextPresentation } from "./components";
import Loading from "../loading";

export default async function About(): Promise<ReactElement> {
  return (
    <Suspense fallback={<Loading />}>
      <main
        className="flex flex-col lg:flex-row items-center justify-center min-h-[69dvh] md:min-h-[82dvh] gap-10
        lg:min-h-[76dvh] animate-fade-down animate-ease-in-out max-w-screen-xl m-auto p-10 md:gap-20 py-20 lg:py-0"
      >
        <Photo />
        <div className="flex flex-col w-full p-4 md:p-10">
          <TextPresentation />
          <div className="flex flex-col md:flex-row gap-8 mt-10 duration-200 ease-in">
            <LinkButton
              type="button"
              target={"_blank"}
              text="VER CURRÍCULO"
              link="https://drive.google.com/file/d/1JvSzncGZYl3EiyNlNiSp_4hvayIn8Cid/view?usp=sharing"
              icon={<FiUpload />}
              additionalClass="border-White hover:border-Gray"
            />
            <LinkButton
              type="button"
              target={"_blank"}
              text="ENVIAR E-MAIL"
              link="mailto:victor.jose.lopes.navarro@gmail.com"
              icon={<BiMailSend />}
              additionalClass="border-Gray hover:border-White"
            />
          </div>
        </div>
      </main>
    </Suspense>
  );
}
