import { type ReactElement } from "react";
import {
  SiJest,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiPhp,
  SiNestjs,
  SiActix,
  SiRedis,
  SiVuedotjs
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaRust } from "react-icons/fa6";

import { SkillCard } from "./components";

export default function SkillCardList(): ReactElement {
  return (
    <ul className="flex justify-center gap-8 flex-wrap p-10">
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
        icon={<FaRust />}
        title={"Rust"}
        details={[
          "Ownership",
          "Lifetimes",
          "Borrowing",
          "Enums",
          "Mutability",
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
        icon={<SiVuedotjs />}
        title={"Vue.js"}
        details={[
          "Props",
          "Hooks",
          "Eventos",
          "V-model",
          "Estados",
          "Componentes",
          "Ciclo de vida",
        ]}
      />
      <SkillCard
        icon={<TbBrandReactNative />}
        title={"React Native"}
        details={[
          "Integração de APIs",
          "Módulos Nativos",
          "Fundamentals",
          "Navigation",
          "Contextos",
          "Estados",
        ]}
      />
      <SkillCard
        icon={<SiRedis />}
        title={"Redis"}
        details={[
          "Dimensionamento",
          "Escalabilidade",
          "Memória",
          "Sessões",
          "Cache"
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
        icon={<SiNextdotjs />}
        title={"Next.js"}
        details={[
          "SSR",
          "SSG",
          "API",
          "SEO",
          "Routing",
        ]}
      />
      <SkillCard
        icon={<SiNestjs />}
        title={"Nest"}
        details={[
          "Decorators",
          "Clean Arch",
          "Modules",
          "SOLID",
          "POO",
        ]}
      />
      <SkillCard
        icon={<SiActix />}
        title={"Actix"}
        details={[
          "Swagger Docs",
          "Modules",
          "RESTful",
          "Testing",
          "MVC",
          "POO",
        ]}
      />
      <SkillCard
        icon={<SiNodedotjs />}
        title={"Node.js"}
        details={[
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
    </ul>
  );
}
