"use client";

import {
  useState,
  useEffect,
  type ReactElement
} from "react";
import Image from "next/image";
import { FiUpload } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";

import Loading from "../loading";
import { Button } from "./components";


export default function About(): ReactElement {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const loading = sessionStorage.getItem("aboutLoaded");

    if (loading !== null) {
      setIsLoading(false);
    } else {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("aboutLoaded", "true");
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main
          className="flex flex-col lg:flex-row items-center justify-center lg:h-[76dvh]
          animate-fade-down animate-ease-in-out max-w-screen-xl m-auto gap-10 md:gap-20 py-20 lg:py-0"
        >
          <div className="flex h-full lg:w-full items-center justify-center">
            <Image
              src="https://avatars.githubusercontent.com/u/133554156?v=4"
              className="rounded-3xl rounded-br-[15%] md:rounded-bl-[7%] md:rounded-t-[17%] md:rounded-br-[30%] w-[70%]
              md:w-[80%]"
              alt="teste"
              priority={true}
              quality={100}
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col w-full p-4 md:p-10">
            <h1 className="whitespace-nowrap duration-200 ease-in">VICTOR NAVARRO</h1>
            <p className="text-White mb-10 duration-200 ease-in font-semibold">DESENVOLVEDOR DE SOFTWARE</p>
            <p className="leading-loose text-justify duration-200 ease-in">
              Sou um desenvolvedor de software curioso e autodidata, sempre disposto a aprender novas formas de melhorar
              meus métodos e aplicações de conhecimento. Através dos meus estudos venho aperfeiçoando meu lado técnico,
              comportamental e psicológico, buscando além do aprimoramento dos meus códigos, aprimorar a minha pessoa
              como um todo, indo rumo à excelência. Meus dois maiores sonhos são relacionados a minha carreira, onde o
              primeiro consiste em morar no exterior, e o segundo, é de me tornar alguém influente e importante na área
              da tecnologia.
            </p>
            <ul className="md:pl-8 flex flex-col md:flex-row gap-8 mt-10 duration-200 ease-in">
              <li
                className="cursor-pointer border-White border-2 rounded-3xl px-20 py-8 hover:border-Gray
                duration-200 ease-in"
              >
                <Button
                  text="VER RESUMO"
                  link="https://drive.google.com/file/d/17OP9Hz4Hhuh22e_rplmL5tdSYxpMNAEm/view?usp=sharing"
                  icon={<FiUpload />}
                />
              </li>
              <li
                className="cursor-pointer border-Gray border-2 rounded-3xl px-20 py-8 hover:border-White
                duration-200 ease-in"
              >
                <Button
                  text="ENVIAR MENSAGEM"
                  link="mailto:victor.jose.lopes.navarro@gmail.com"
                  icon={<BiMailSend />}
                />
              </li>
            </ul>
          </div>
        </main>
      )}
    </>
  );
}
