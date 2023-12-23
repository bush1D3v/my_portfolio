import { type ReactElement } from "react";

interface LinkButtonProps {
  href: string;
  text: string;
  icon: ReactElement;
}

export default function LinkButton({
  href,
  text,
  icon
}: LinkButtonProps): ReactElement {
  return (
    <button
      className="relative flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-2xl
      font-medium rounded-lg group bg-gradient-to-br from-cyan-500 group-hover:from-cyan-500 focus:ring-4
    group-hover:to-blue-500 focus:outline-none focus:ring-cyan-200 hover:scale-105 duration-300 ease-out w-full"
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="relative px-5 py-2.5 transition-all border-2 ease-in duration-75 bg-gradient-to-br bg-blue-500
        rounded-md group-hover:bg-opacity-0 group-hover:border-cyan-500 flex gap-[10vw] items-center w-full"
      >
        {icon}
        {text}
      </a>
    </button >
  );
}
