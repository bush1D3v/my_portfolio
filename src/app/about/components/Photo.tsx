import { type ReactElement } from "react";
import Image from "next/image";

export default function Photo(): ReactElement {
  return (
    <div className="flex h-full lg:w-full items-center justify-center">
      <Image
        src="https://avatars.githubusercontent.com/u/133554156?v=4"
        className="rounded-3xl rounded-br-[15%] md:rounded-bl-[7%] md:rounded-t-[17%] md:rounded-br-[30%] w-[80%]"
        alt="Foto de perfil"
        priority={true}
        quality={100}
        width={400}
        height={400}
        decoding="async"
      />
    </div>
  );
}
