import { type ReactElement } from "react";
import Image from "next/image";


export default function Profile(): ReactElement {
  return (
    <div className="flex flex-col items-center justify-center max-w-fit">
      <figure className="flex flex-col justify-center items-center">
        <Image
          className="w-[13dvh] rounded-full"
          src="https://avatars.githubusercontent.com/u/133554156?v=4"
          width={200}
          height={200}
          alt="Foto de perfil"
        />
        <figcaption className="text-xl font-bold">@bush1D3v</figcaption>
      </figure>
      <q className="font-bold">A minha magia é não desistir, jamais!</q>
    </div>
  );
}
