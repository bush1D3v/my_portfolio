import { Suspense, type ReactElement } from "react";
import {
  SiTypescript,
  SiPhp,
  SiJavascript,
  SiAngular,
  SiSymfony,
  SiCodeceptjs,
  SiCss3,
  SiDocker,
  SiPostgresql
} from "react-icons/si";

import { nasajon, souJunior } from "@/assets";

import Loading from "../loading";
import { Card } from "./components";


export default function Experiences(): ReactElement {
  return (
    <Suspense fallback={<Loading />}>
      <main
        className="flex flex-col items-center justify-center md:min-h-[82dvh] lg:min-h-[76dvh]
        animate-fade-down animate-ease-in-out max-w-screen-lg m-auto py-8"
      >
        <ul className="flex flex-col items-center justify-center gap-20">
          <li key={"nasajon"}>
            <Card
              image={nasajon}
              title="Nasajon"
              description="Desenvolvedor Full-Stack"
              data="2023 - Presente"
              resume={<p>Atuando como desenvolvedor Full Stack em uma das maiores empresas de
                software do Brasil, impacto mais de 10 milhões de pessoas com minhas
                habilidades técnicas e soluções de software inovadoras. <br />
                Trabalhando no projeto Nasajon ERP, desenvolvo testes automatizados para
                garantir a qualidade do software, atualização da documentação e criação de
                funcionalidades inovadoras e aprovadas pelo mercado. <br />
                Trabalhando também no projeto GP (Gestão de projetos), desenvolvo e
                atualizo interfaces gráficas, além de criar e atualizar testes automatizados
                para garantir a qualidade das entregas.</p>}
              link="https://nasajon.com.br/"
              summaryKeys={[
                [ <SiPhp key="php nasajon" />, "PHP" ],
                [ <SiSymfony key="symfony nasajon" />, "Symfony" ],
                [ <SiCodeceptjs key="codeception nasajon" />, "Codeception" ],
                [ <SiDocker key="docker nasajon" />, "Docker" ],
                [ <SiPostgresql key="postgresql nasajon" />, "PostgreSQL" ],
                [ <SiAngular key="angular nasajon" />, "Angular" ]
              ]}
            />
          </li>
          <li key={"soujunior"}>
            <Card
              image={souJunior}
              title="SouJunior Labs"
              description="Desenvolvedor Front-end"
              data="2023 - 2024"
              resume={<p>Produzi projetos voluntários de Desenvolvimento de Software em equipe utilizando
                metodologias ágeis, jira, miro e outras tecnologias para acompanhamento dos projetos. <br />
                Trabalhei no projeto DesenvolvimentoXP, um site para iniciantes de programação terem
                seu primeiro contato com projetos em equipe, onde refatoro interfaces gráficas e crio
                e atualizo testes automatizados, garantindo a qualidade das entregas.</p>}
              link="https://labs.soujunior.tech/"
              summaryKeys={[
                [ <SiAngular key="angular soujunior" />, "Angular" ],
                [ <SiTypescript key="typescript soujunior" />, "Typescript" ],
                [ <SiJavascript key="javascript soujunior" />, "Javascript" ],
                [ <SiCss3 key="css soujunior" />, "CSS" ]
              ]}
            />
          </li>
        </ul>
      </main>
    </Suspense>
  );
}
