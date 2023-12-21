import Image from "next/image";
import { type ReactElement } from "react";

import logo from "../../assets/images/logo.png";

export default function Logo(): ReactElement {
  return (
    <Image
      className="absolute right-6 top-3.5 w-[25vw] h-[20vw] md:w-[20vw] md:h-[15vw] lg:w-[12vw] lg:h-[16vh]"
      src={logo}
      alt="Logo"
    />
  );
}
