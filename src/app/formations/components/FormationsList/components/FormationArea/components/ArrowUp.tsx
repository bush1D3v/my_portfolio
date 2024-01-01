import { ReactElement } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function ArrowUp(): ReactElement {
  return (
    <div className="absolute flex flex-col items-center -right-4 mt-6">
      <FaArrowUpLong className="text-4xl md:text-5xl animate-bounce animate-infinite animate-ease-in-out" />
      <p className="font-semibold animate-pulse animate-infinite animate-ease-in-out">Clique aqui!</p>
    </div>
  );
}
