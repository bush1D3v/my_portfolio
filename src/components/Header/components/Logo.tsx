import { type ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/logo.png";

export default function Logo(): ReactElement {
  return (
    <div className="flex hover:opacity-50 cursor-pointer ease-in-out duration-150">
      <Link
        href={"/"}
      >
        <Image
          src={logo}
          alt="Logo"
          className="dark:brightness-100 brightness-0 w-20 cursor-pointer duration-200 ease-in"
        />
      </Link>
    </div>
  );
}
