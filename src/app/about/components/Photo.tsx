import { type ReactElement } from "react";

import ImageSkeletonLoader from "@/components/ImageSkeletonLoader/ImageSkeletonLoader";

export default function Photo(): ReactElement {
  return (
    <div className="flex h-full lg:w-full items-center justify-center">
      <ImageSkeletonLoader
        src="https://avatars.githubusercontent.com/u/133554156?v=4"
        alt="Foto de perfil"
        height={400}
        width={400}
        loading="eager"
        sessionStorageItem="imageProfile"
        className="rounded-3xl rounded-br-[15%] md:rounded-bl-[7%] md:rounded-t-[17%] md:rounded-br-[30%] w-[80%]"
      />
    </div>
  );
}
