import { type ReactElement } from "react";

import {
  ABOUT,
  CONTACT,
  FORMATIONS,
  PROJECTS,
  SKILLS
} from "@/utils/routerPaths";

import { ListItem } from "./components";

interface ItemsListProps {
  className: string;
}

export default function ItemsList({
  className
}: ItemsListProps): ReactElement {
  return (
    <ul className={className}>
      <ListItem href={ABOUT} text="Sobre" />
      <ListItem href={SKILLS} text="Habilidades" />
      <ListItem href={FORMATIONS} text="Formações" />
      <ListItem href={PROJECTS} text="Projetos" />
      <ListItem href={CONTACT} text="Contato" />
    </ul>
  );
}
