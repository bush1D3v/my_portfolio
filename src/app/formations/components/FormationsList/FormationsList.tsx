import { type ReactElement } from "react";

import {
  cubosAcademy,
  devQuest,
  dio,
  cursoEmVideo,
  cruzeiroDoSul,
  descomplica
} from "@/assets";

import { FormationArea } from "./components";

export default function FormationsList(): ReactElement {
  return (
    <ul className="flex gap-10 flex-wrap justify-around p-10 lg:px-20">
      <li>
        <FormationArea
          title="Cruzeiro do Sul"
          description={
            `Cursando Bacharelado em Engenharia de Software, aprimoro meu domínio em linguagens de programação,
            adoto metodologias ágeis e utilizo ferramentas avançadas de desenvolvimento. Tenho experiência
            em análise de requisitos, arquitetura de sistemas, testes de software e gestão de projetos,
            preparando-me para desafios na criação e aprimoramento de aplicações.`
          }
          summaryKeys={[
            "POO",
            "Inteligência Artificial",
            "Sistemas Operacionais",
            "Modelagem de Sistemas",
            "Computação em Nuvem",
            "Modelagem de Dados",
            "Banco de Dados",
            "Arquiteturas e padrões de software",
            "Algoritmos e Estruturas de Dados",
            "Testes e Qualidade de Software"
          ]}
          buttonText="EM ANDAMENTO..."
          buttonHref={null}
          image={cruzeiroDoSul}
        />
      </li>
      <li>
        <FormationArea
          title="Cubos Academy"
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
          buttonText="VER CERTIFICADOS ➔"
          buttonHref="https://drive.google.com/file/d/17pAc42v6-7gC_0OXT0wbYY7VrSJkUanD/view?usp=sharing"
          image={cubosAcademy}
        />
      </li>
      <li>
        <FormationArea
          title="Dev Quest"
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
          buttonText="VER CERTIFICADOS ➔"
          buttonHref="https://drive.google.com/file/d/1oMZ0-IiZEKZkDo7Q6hQ-XaqnOg-U9flK/view?usp=sharing"
          image={devQuest}
        />
      </li>
      <li>
        <FormationArea
          title="DIO"
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
          buttonText="VER CERTIFICADOS ➔"
          buttonHref="https://drive.google.com/file/d/148owD9V2PAPU7YNWxjTlbNgr0eE9-Rpn/view?usp=sharing"
          image={dio}
        />
      </li>
      <li>
        <FormationArea
          title="Curso em Vídeo"
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
          buttonText="VER CERTIFICADOS ➔"
          buttonHref="https://drive.google.com/file/d/1UNrji4V1htTka5YgdPTYk9Q0Smi0UFJ9/view?usp=sharing"
          image={cursoEmVideo}
        />
      </li>
      <li>
        <FormationArea
          title="Descomplica"
          description={
            `Curso abrangente que visa aprimorar habilidades profissionais em quatro áreas-chave:
            Organização, Banco de dados, Coaching e Redes de computadores.
            Fundamentos de Banco de Dados
            Organização e Produtividade
            Coaching e Planejamento de Carreiras
            Fundamentos de Redes de Computadores`
          }
          summaryKeys={[
            "SQL",
            "NO SQL",
            "Git / GitHub",
            "Redes e Computadores",
            "Marketing",
            "Soft Skills",
            "Desenvolvimento de Software"
          ]}
          buttonText="VER CERTIFICADOS ➔"
          buttonHref="https://drive.google.com/file/d/1IVFBCVg4urota-8TccXn1d9BZVwmRDuX/view?usp=sharing"
          image={descomplica}
        />
      </li>
    </ul>
  );
}
