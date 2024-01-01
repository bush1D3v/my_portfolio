import Link from "next/link";
import { type ReactElement } from "react";

interface LinkButtonProps {
  link: string | null;
  type: "submit" | "button" | "reset" | undefined;
  text: string;
  icon: ReactElement | null;
  additionalClass: string;
  target: "_blank" | "_self" | "_parent" | "_top";
}

export default function LinkButton({
  link,
  type,
  text,
  icon,
  additionalClass,
  target
}: LinkButtonProps): ReactElement {
  const className = `text-White font-semibold flex items-center justify-center duration-75 ease-in px-20 py-8
  border-2 ${additionalClass} rounded-3xl`;

  return (
    <>
      {link === null ? (
        <button
          type={type}
          className={className}
          rel="noopener noreferrer"
        >
          {text} &nbsp; {icon}
        </button>
      ) : (
        <Link
          href={link}
          type={type}
          target={target}
          rel="noopener noreferrer"
          className={className}
        >
          {text} &nbsp; {icon}
        </Link>
      )}
    </>
  );
}
