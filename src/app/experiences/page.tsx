import { Suspense, type ReactElement } from "react";
import {
  SiTypescript,
  SiPhp,
  SiAngular,
  SiCss3,
  SiDocker,
  SiPostgresql,
  SiSwagger,
  SiMariadb,
  SiVuedotjs,
  SiNodedotjs,
} from "react-icons/si";
import { FaLess } from "react-icons/fa";
import Image from "next/image";

import { nasajon, souJunior, kevi, phpunit, slimphp } from "@/assets";

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
          <li key={"kevi"}>
            <Card
              image={kevi}
              title="Kevi"
              description="Desenvolvedor Full-Stack"
              data="2024 - Presente"
              resume={<p>Desenvolvendo de ponto a ponta as integrações, automações e novas features na Kevi,
                impacto todos os seus clientes , principalmente, seus cases de maior sucesso.<br />
                Desenvolvendo com foco em melhorias de fluxo de usuário e automações, assim como
                implementar novas integrações e disparadores aos clientes, desenvolvo testes e documentações,
                otimizo o processamento de resposta ao usuário com minhas experiências em PHP e Vue.js.
                <br />
                Trabalhando de forma autônoma, também tenho constante contato com clientes, negociações,
                e importante calls
                para discutirmos escalabilidade do negócio, melhoria de performance e possíveis novas
                melhorias no produto.
              </p>}
              link="https://kevi.com.br/"
              summaryKeys={[
                [ <SiPhp key="php kevi" />, "PHP" ],
                [ <SiVuedotjs key="vuejs kevi" />, "Vue.js" ],
                [ <Image src={slimphp} alt="slimphp icon" key="slim_php kevi"
                  className="filter invert-0 brightness-0 dark:invert duration-300 ease-in" />, "Slim PHP" ],
                [ <SiDocker key="docker kevi" />, "Docker" ],
                [ <SiMariadb key="mariadb kevi" />, "MariaDB" ],
                [ <Image src={phpunit} alt="phpunit icon" key="phpunit kevi"
                  className="filter invert-0 brightness-0 dark:invert duration-300 ease-in" />, "PHPUnit" ],
                [ <SiSwagger key="swagger kevi" />, "Swagger" ],
                [ <FaLess key="less kevi" />, "Less" ],
              ]}
            />
          </li>
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
                [ <SiAngular key="angular nasajon" />, "Angular" ],
                [ <Image src={phpunit} alt="phpunit icon" key="phpunit kevi"
                  className="filter invert-0 brightness-0 dark:invert duration-300 ease-in" />, "PHPUnit" ],
                [ <SiSwagger key="swagger nasajon" />, "Swagger" ],
                [ <SiDocker key="docker nasajon" />, "Docker" ],
                [ <SiPostgresql key="postgresql nasajon" />, "PostgreSQL" ],
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
                [ <SiNodedotjs key="nodejs soujunior" />, "Node.JS" ],
                [ <SiCss3 key="css soujunior" />, "CSS3" ],
                [ <SiTypescript key="typescript soujunior" />, "Typescript" ],
              ]}
            />
          </li>
        </ul>
      </main>
    </Suspense>
  );
}
