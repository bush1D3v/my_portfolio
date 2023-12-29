import Link from "next/link";
import { type ReactElement } from "react";

interface ButtonProps {
  link: string;
  text: string;
  icon: ReactElement;
}

export default function Button(
  { link, text, icon }: ButtonProps
): ReactElement {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-White font-semibold uppercase flex items-center justify-center duration-200 ease-in"
    >
      {text} &nbsp; {icon}
    </Link>
  );
}
