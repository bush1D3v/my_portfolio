import { type ReactElement } from "react";
import { AiFillMessage } from "react-icons/ai";

import { LinkButton } from "@/components";

import { LabelInput } from "./components";

export default function Form(): ReactElement {
  return (
    <form
      action="https://formspree.io/f/xzbnbrdj"
      method="POST"
      className="flex flex-col gap-6 items-start w-fit"
    >
      <LabelInput
        type={"text"}
        name={"nome"}
        placeholder={"Seu Nome"}
      />
      <LabelInput
        type={"email"}
        name={"email"}
        placeholder={"Seu Email"}
      />
      <label className="w-full">
        <textarea
          name="mensagem"
          placeholder="Sua Mensagem"
          className="duration-200 ease-in border-2 border-RomanSilver rounded-2xl px-8 py-4
          bg-Gray2 font-semibold resize-none w-full placeholder:text-White"
          cols={30}
          rows={3}
          required
        />
      </label>
      <LinkButton
        link={null}
        target={"_self"}
        type={"submit"}
        text={"ENVIAR MENSAGEM"}
        icon={<AiFillMessage />}
        additionalClass={"border-White hover:border-Gray"}
      />
    </form>
  );
}
