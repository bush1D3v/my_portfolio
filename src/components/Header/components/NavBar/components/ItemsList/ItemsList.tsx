import { type ReactElement } from "react";

import { ListItem } from "./components";

interface ItemsListProps {
  className: string;
}

export default function ItemsList({
  className
}: ItemsListProps): ReactElement {
  return (
    <ul className={className}>
      <ListItem href="/about" text="Sobre" />
      <ListItem href="/skills" text="Habilidades" />
      <ListItem href="/formations" text="Formações" />
      <ListItem href="/projects" text="Projetos" />
      <ListItem href="/contact" text="Contato" />
    </ul>
  );
}
