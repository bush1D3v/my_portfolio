"use client";

import { FiUpload } from "react-icons/fi";
import { type ReactElement } from "react";
import { BiMailSend } from "react-icons/bi";

import Loading from "@/app/loading";
import { LinkButton } from "@/components";
import { loaderSessionStorage } from "@/functions";

import { Photo, TextPresentation } from "./components";

export default function AboutDivision(): ReactElement {
  const isLoading: boolean = loaderSessionStorage("aboutLoaded");

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Photo />
          <div className="flex flex-col w-full p-4 md:p-10">
            <TextPresentation />
            <div className="md:pl-8 flex flex-col md:flex-row gap-8 mt-10 duration-200 ease-in">
              <LinkButton
                type="button"
                target={"_blank"}
                text="VER CURRÍCULO"
                link="https://drive.google.com/file/d/17OP9Hz4Hhuh22e_rplmL5tdSYxpMNAEm/view?usp=sharing"
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
        </>
      )}
    </>
  );
}
