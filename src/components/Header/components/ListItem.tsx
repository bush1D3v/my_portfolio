import Link from "next/link";
import { type ReactElement } from "react";

interface LinkItemProps {
  href: string;
  text: string;
}

export default function ListItem(
  { href, text }: LinkItemProps
): ReactElement {
  return (
    <li>
      <Link
        className="hover:opacity-50 ease-in-out duration-150 uppercase"
        href={href}
      >
        {text}
      </Link>
    </li>
  );
}
