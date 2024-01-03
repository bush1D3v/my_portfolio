import { ReactElement } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

interface ArrowUpProps {
  additionalClasses: string;
}

export default function ArrowUp({
  additionalClasses
}: ArrowUpProps): ReactElement {
  const divClassName: string = `absolute flex flex-col items-center dark:text-White text-LightGray
  ${additionalClasses}`;

  return (
    <div className={divClassName}>
      <FaArrowUpLong className="text-4xl md:text-5xl animate-bounce animate-infinite animate-ease-in duration-200" />
      <p className="font-semibold animate-pulse animate-infinite animate-ease-in flex duration-200">Clique aqui!</p>
    </div>
  );
}
