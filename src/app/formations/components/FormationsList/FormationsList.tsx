"use client";

import { type ReactElement } from "react";

import {
  cubosAcademy,
  devQuest,
  dio,
  cursoEmVideo
} from "@/assets";
import { loaderSessionStorage } from "@/functions";
import Loading from "@/app/loading";

import { FormationArea } from "./components";

export default function FormationsList(): ReactElement {
  const isLoading: boolean = loaderSessionStorage("formationsLoaded");
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="flex gap-10 flex-wrap justify-center">
          <li>
            <FormationArea
              image={cubosAcademy}
              title={"Cubos Academy"}
              description={
                `Após passar no processo seletivo do programa bolsa ifood 1000 com mais de 50mil participantes, iniciei
            meus estudos como bolsista na Cubos, pelo curso de Desenvolvimento de Software com foco em Back-end.
            Abordando as hardskills com bastante conteúdo e exercícios, e as softskills contendo diversas monitorias
            e conteúdos técnicos, desenvolvo habilidades diferenciais de um desenvolvedor de forma prática.`
              }
              summaryKeys={[
                "JavaScript",
                "NodeJS",
                "PostgreSQL",
                "API RESTful",
                "Jest",
                "Swagger",
                "Git / GitHub",
                "NPM",
                "Mídias Sociais",
                "Marketing Pessoal",
                "Metodologias Ágeis"
              ]}
              buttonText={"VER CERTIFICADOS ➔"}
              buttonHref="https://drive.google.com/file/d/17pAc42v6-7gC_0OXT0wbYY7VrSJkUanD/view?usp=sharing"
            />
          </li>
          <li>
            <FormationArea
              title={"Dev Quest"}
              description={
                `Curso de Desenvolvimento Web FullStack, que através das inúmeras monitorias, mentorias, desafios
            corrigidos por desenvolvedores experientes, conteúdos diretos e organizados, e análise de redes e
            currículo, desenvolvem as habilidades de um desenvolvedor através da prática constante e incentivo à
            metodologias eficazes de estudo.`
              }
              summaryKeys={[
                "HTML5",
                "CSS3",
                "Git / GitHub",
                "JavaScript",
                "Jest",
                "React",
                "API REST",
                "Redux",
                "TypeScript",
                "PostgreSQL",
                "NodeJS",
                "Express",
                "Marketing Pessoal",
                "Mídias Sociais"
              ]}
              buttonText={"EM ANDAMENTO..."}
              buttonHref={null}
              image={devQuest}
            />
          </li>
          <li>
            <FormationArea
              title={"DIO"}
              description={
                `Após ser selecionado para uma das 75mil bolsas do Bootcamp Santander, iniciei meus estudos no Curso de
            Desenvolvimento Web Fullstack - Java + Angular. Abordando desde os temas mais simples, como anotações dos
            estudos no seu Notion e lógica de programação, o Bootcamp consegue passar os conteúdos de forma simples e
            direta, trazendo uma metodologia de ensino mais ágil.`
              }
              summaryKeys={[
                "HTML5",
                "CSS3",
                "JavaScript",
                "Git / GitHub",
                "TypeScript",
                "Angular",
                "Java / Spring",
                "PostgreSQL",
                "MongoDB",
                "API REST"
              ]}
              buttonText={"VER CERTIFICADOS ➔"}
              buttonHref={"https://drive.google.com/file/d/148owD9V2PAPU7YNWxjTlbNgr0eE9-Rpn/view?usp=sharing"}
              image={dio}
            />
          </li>
          <li>
            <FormationArea
              title={"Curso em Vídeo"}
              description={
                `Sendo a plataforma em que realizei meus primeiros cursos, o professor Guanabara me acompanhou nos meus
            primeiros passos, sendo eles meus 3 primeiros meses de estudos, onde foquei em criar uma sólida lógica de
            programação. Criando conteúdos ricos, direcionados ao iniciante e com metodologia de ensino eficaz, foi
            aqui que iniciei a minha carreira e desenvolvi minhas primeiras habilidades.`
              }
              summaryKeys={[
                "HTML5",
                "CSS3",
                "JavaScript",
                "Python",
                "Git / GitHub",
                "Portugol Studio"
              ]}
              buttonText={"VER CERTIFICADOS ➔"}
              buttonHref={"https://drive.google.com/file/d/1UNrji4V1htTka5YgdPTYk9Q0Smi0UFJ9/view?usp=sharing"}
              image={cursoEmVideo}
            />
          </li>
        </ul>
      )}
    </>
  );
}
