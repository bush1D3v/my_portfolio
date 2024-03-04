import { type ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

import { logo } from "@/assets";
import { HOME } from "@/utils/routerPaths";

export default function Logo(): ReactElement {
  return (
    <div className="flex hover:opacity-50 cursor-pointer ease-in-out duration-150">
      <Link
        href={HOME}
        rel="noopener noreferrer"
      >
        <Image
          src={logo}
          alt="Logo"
          loading="eager"
          className="dark:brightness-100 brightness-0 w-20 cursor-pointer duration-200 ease-in"
        />
      </Link>
    </div>
  );
}
