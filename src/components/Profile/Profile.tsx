import { type ReactElement } from "react";
import Image from "next/image";

import profilePhoto from "../../assets/images/profile.png";

export default function Profile(): ReactElement {
  return (
    <div className="flex flex-col items-center justify-center max-w-fit">
      <figure className="flex flex-col justify-center items-center">
        <Image
          className="w-[13dvh] rounded-full"
          src={profilePhoto}
          alt="Foto de perfil"
        />
        <figcaption className="text-xl font-bold">@Caroline.carvalho_psi</figcaption>
      </figure>
      <q className="font-bold">frase</q>
    </div>
  );
}
