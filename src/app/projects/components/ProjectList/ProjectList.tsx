import { type ReactElement } from "react";

import {
  tsbank,
  devorum,
  linktree,
  robustHabitAcademia
} from "@/assets";

import { ProjectArea } from "./components";

export default function ProjectList(): ReactElement {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-16 p-6 py-20 md:px-10">
      <ProjectArea
        title="Tsbank"
        subtitle="Aplicação Bancária"
        image={tsbank}
        description={`
              O TSBank é uma aplicação bancária, possuindo todas as transações existentes de um banco, como saque,
              depósito, pix, cartões de crédito e débito, gerenciamento de transações, etc.
            `}
        technologies={[
          "TypeScript",
          "ReactJS",
          "TailwindCSS",
          "PostgreSQL",
          "NodeJS",
          "ExpressJS",
          "Jest"
        ]}
        repoLink={"https://github.com/bush1D3v/tsbank_front"}
        projectLink={"https://tsbank.vercel.app"}
      />
      <ProjectArea
        title="Devorum"
        subtitle="Fórum Tech"
        image={devorum}
        description={`
              Uma plataforma de perguntas e respostas para atender às necessidades de quem precisa. A plataforma
              permite que façam perguntas, obtenham ajuda e interajam em um ambiente de aprendizado colaborativo.
            `}
        technologies={[
          "TypeScript",
          "ReactJS",
          "NextJS",
          "TailwindCSS",
          "PostgreSQL",
          "NodeJS",
          "ExpressJS",
          "Jest"
        ]}
        repoLink={"https://github.com/bush1D3v/devorum-frontend"}
        projectLink={"https://devorum.vercel.app"}
      />
      <ProjectArea
        title="Linktree"
        subtitle="Árvore de Links"
        image={linktree}
        description={`
              O Linktree é uma aplicação de árvore de links, onde tem o objetivo de reunir diversos links de uma
              pessoa, em um único lugar.
            `}
        technologies={[
          "TypeScript",
          "ReactJS",
          "NextJS",
          "TailwindCSS",
        ]}
        repoLink={"https://github.com/bush1D3v/linktree"}
        projectLink={"https://bushi-links.vercel.app"}
      />
      <ProjectArea
        title="R. H. Academia"
        subtitle="Site de Academia"
        image={robustHabitAcademia}
        description={`
              Página Completa de Academia, com Envio de Formulário e tratamento de erros e dados utilizando Regex.
            `}
        technologies={[
          "HTML5",
          "CSS3",
          "JavaScript",
        ]}
        repoLink={"https://github.com/bush1D3v/robust-habit-academia"}
        projectLink={"https://bush1d3v.github.io/robust-habit-academia"}
      />
    </ul>
  );
}
