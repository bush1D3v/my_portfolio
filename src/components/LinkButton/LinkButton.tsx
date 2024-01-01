import Link from "next/link";
import { type ReactElement } from "react";

interface LinkButtonProps {
  link: string | null;
  type: "submit" | "button" | "reset" | undefined;
  text: string;
  icon: ReactElement | null;
  additionalClass: string;
}

export default function LinkButton({
  link,
  type,
  text,
  icon,
  additionalClass
}: LinkButtonProps): ReactElement {
  const className = `text-White font-semibold flex items-center justify-center duration-75 ease-in px-20 py-8
  border-2 ${additionalClass} rounded-3xl`;

  return (
    <>
      {link === null ? (
        <button
          type={type}
          className={className}
        >
          {text} &nbsp; {icon}
        </button>
      ) : (
        <Link
          href={link}
          type={type}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {text} &nbsp; {icon}
        </Link>
      )}
    </>
  );
}
