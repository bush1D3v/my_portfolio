import Link from "next/link";
import { type ReactElement } from "react";

interface LinkItemProps {
  href: string;
  text: string;
}

export default function ListItem({
  href,
  text
}: LinkItemProps): ReactElement {
  return (
    <li>
      <Link
        className="hover:opacity-50 ease-in duration-200 uppercase font-bold"
        href={href}
      >
        {text}
      </Link>
    </li>
  );
}
