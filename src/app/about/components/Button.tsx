import Link from "next/link";
import { type ReactElement } from "react";

interface ButtonProps {
  link: string;
  text: string;
  icon: ReactElement;
  border: string;
  hover: string;
}

export default function Button(
  {
    link,
    text,
    icon,
    border,
    hover
  }: ButtonProps
): ReactElement {
  const className = `text-White font-semibold uppercase flex items-center justify-center duration-200 ease-in px-20 py-8
  cursor-pointer border-${border} border-2 hover:border-${hover} rounded-3xl`;

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {text} &nbsp; {icon}
    </Link>
  );
}
