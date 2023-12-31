import { type ReactElement } from "react";

interface ModalProps {
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (isOpen: boolean) => void;
  keys: string[];
}

export default function Modal({
  isOpen,
  setOpen,
  keys,
}: ModalProps): ReactElement {
  if (isOpen) {
    return (
      <div
        className="absolute z-50 md:fixed md:top-0 md:bottom-0 md:left-0 md:right-0 md:bg-WhiteA10 duration-200 ease-in"
      >
        <ul
          className="fixed md:top-2/4 right-0 left-[2dvw] md:left-2/4 md:translate-x-[-50%] md:translate-y-[-50%]
          text-start bg-Black2 p-12 rounded-3xl w-[96dvw] md:w-[470px] flex flex-col gap-4 text-White list-disc
          list-inside duration-200 ease-in"
        >
          {keys.map((value, index) => (
            <li
              key={index}
              className="text-3xl md:text-4xl"
            >
              {value}
            </li>
          ))}
          <button
            type="button"
            className="mt-2 px-7 py-2 dark:bg-Gray bg-Gray2 font-bold rounded-3xl border-2 border-transparent
            hover:border-White text-xl duration-200 ease-in"
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            FECHAR
          </button>
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
}
