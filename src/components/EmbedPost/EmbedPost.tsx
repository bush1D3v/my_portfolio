import { type ReactElement } from "react";
import Image from "next/image";

import postPhoto from "../../assets/images/post.png";

export default function EmbedPost(): ReactElement {
  return (
    <a
      className="flex w-[30vw] h-[30vw] border-2 border-white rounded-md hover:scale-110 ease-out duration-300
      absolute left-6 bottom-3.5 md:w-[25vw] md:h-[25vw] lg:w-[10vw] lg:h-[10vw]"
      href="https://www.instagram.com/p/CyhUGhtL7jm/?utm_source=ig_web_copy_link"
      target="_blank"
      rel="noreferrer"
    >
      <Image className="rounded-md w-full h-full" src={postPhoto} alt="publicação" />
    </a>
  );
}
