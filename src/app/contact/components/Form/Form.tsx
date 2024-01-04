"use client";

import { useState, type ReactElement } from "react";
import { AiFillMessage } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema, type ContactProps } from "./schemas";
import { contactSubmit } from "./functions";

export default function Form(): ReactElement {
  const [ isLoading, setIsLoading ] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactProps): Promise<void> {
    setIsLoading(!isLoading);

    const result = await contactSubmit(data);

    if (!result) {
      setIsLoading(true);
    } else {
      window.location.reload();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 items-start w-fit"
    >
      {errors.nome && <p className="text-2xl md:text-3xl text-Error font-semibold">{errors.nome.message}</p>}
      <label className="w-full">
        <input
          type={"text"}
          placeholder={"Seu Nome"}
          className="duration-200 ease-in border-2 border-RomanSilver rounded-2xl px-8 py-4
          bg-Gray2 font-semibold w-full placeholder:text-White text-White"
          autoComplete="true"
          {...register("nome")}
        />
      </label>
      {errors.email && <p className="text-2xl md:text-3xl text-Error font-semibold">{errors.email.message}</p>}
      <label className="w-full">
        <input
          type={"email"}
          placeholder={"Seu Email"}
          className="duration-200 ease-in border-2 border-RomanSilver rounded-2xl px-8 py-4
          bg-Gray2 font-semibold w-full placeholder:text-White text-White"
          autoComplete="true"
          {...register("email")}
        />
      </label>
      {errors.mensagem && <p className="text-2xl md:text-3xl text-Error font-semibold">{errors.mensagem.message}</p>}
      <label className="w-full">
        <textarea
          placeholder="Sua Mensagem"
          className="duration-200 ease-in border-2 border-RomanSilver rounded-2xl px-8 py-4
          bg-Gray2 font-semibold resize-none w-full placeholder:text-White text-White"
          cols={30}
          rows={3}
          {...register("mensagem")}
        />
      </label>
      <button
        type={"submit"}
        className="text-White font-semibold flex items-center justify-center duration-75 ease-in px-20 py-8 w-[285px]
        border-2 border-White hover:border-Gray rounded-3xl cursor-pointer placeholder:duration-200 placeholder:ease-in"
        rel="noopener noreferrer"
        disabled={!!isLoading}
      >
        {isLoading ? <>ENVIANDO... &nbsp; <BiMailSend /></> : <>ENVIAR MENSAGEM &nbsp; <AiFillMessage /></>}
      </button>
    </form>
  );
}
