import { type ReactElement } from "react";
import {
  SiJest,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiPostgresql,
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiCss3
} from "react-icons/si";

import { SkillCard } from "./components";

export default function SkillCardList(): ReactElement {
  return (
    <ul className="flex justify-center gap-8 flex-wrap">
      <SkillCard
        icon={<SiNextdotjs />}
        title={"Next"}
        details={[
          "SSR",
          "SSG",
          "API",
          "SEO",
          "Routing",
        ]}
      />
      <SkillCard
        icon={<SiReact />}
        title={"React"}
        details={[
          "Props",
          "Hooks",
          "Estados",
          "Componentes",
          "Ciclo de vida",
        ]}
      />
      <SkillCard
        icon={<SiTypescript />}
        title={"TypeScript"}
        details={[
          "POO",
          "Módulos",
          "Generics",
          "Decorators",
          "Dados Estáticos",
          "Tratamento de Exceções",
        ]}
      />
      <SkillCard
        icon={<SiNodedotjs />}
        title={"Node"}
        details={[
          "Express",
          "API RESTful",
          "Protocolo HTTP",
          "Envio de E-mails",
          "Autenticação e Criptografia",
          "Conexão com Banco de Dados",
        ]}
      />
      <SkillCard
        icon={<SiJest />}
        title={"Jest"}
        details={[
          "Testes",
          "Asserções",
          "Setup e Teardown",
          "Testes de Unidade",
          "Testes Assíncronos",
          "Testes de Integração",
        ]}
      />
      <SkillCard
        icon={<SiTailwindcss />}
        title={"Tailwind"}
        details={[
          "Animations",
          "Mobile First",
          "Estrutura CSS Utilitária",
          "Componentes Reutilizáveis",
          "Classes de Estilo Pré-definidas"
        ]}
      />
      <SkillCard
        icon={<SiSass />}
        title={"SASS"}
        details={[
          "Mixins",
          "Partials",
          "Funções SASS",
          "Variáveis SASS",
          "Herança de Seletores",
          "Aninhamento de Regras"
        ]}
      />
      <SkillCard
        icon={<SiPostgresql />}
        title={"PostgreSQL"}
        details={[
          "Consultas SQL",
          "Tabelas e Esquemas",
          "Funções de Agregação",
          "Agrupamento de Dados",
          "Chaves Primárias e Estrangeiras",
        ]}
      />
      <SkillCard
        icon={<SiPhp />}
        title={"PHP"}
        details={[
          "POO",
          "Módulos",
          "Symfony",
          "Codeception",
          "Sessões e Cookies",
          "Tratamento de Exceções",
          "Manipulação de Arquivos e Diretórios",
        ]}
      />
      <SkillCard
        icon={<SiJavascript />}
        title={"JavaScript"}
        details={[
          "DOM",
          "POO",
          "Promises",
          "Fetch API",
          "Tratamento de Exceções"
        ]}
      />
      <SkillCard
        icon={<SiHtml5 />}
        title={"HTML5"}
        details={[
          "Eventos",
          "Semântica",
          "Atributos",
          "Elementos",
          "Formulários",
          "Acessibilidade"
        ]}
      />
      <SkillCard
        icon={<SiCss3 />}
        title={"CSS3"}
        details={[
          "Cascata",
          "Herança",
          "Animações",
          "Box Model",
          "Flexbox/Grid",
          "Especificidade",
          "Media Queries"
        ]}
      />
    </ul>
  );
}
