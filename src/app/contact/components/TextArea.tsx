import { type ReactElement } from "react";
import { IoIosMail } from "react-icons/io";

export default function TextArea(): ReactElement {
  return (
    <div
      className="flex flex-col justify-center text-center lg:text-start items-center lg:items-start
      gap-10 max-w-2xl"
    >
      <IoIosMail className="text-9xl text-White -mb-6 duration-75 ease-in" />
      <h2 className="duration-75 ease-in">Entre em contato comigo</h2>
      <p>
        Em caso de dúvidas, sinta-se à vontade para me contatar através deste formulário,
        e assim que possível, retornarei seu contato.
      </p>
    </div>
  );
}
