import Link from "next/link";
import React, { type ReactElement } from "react";

export interface LinkItemProps {
  href: string;
  icon: ReactElement;
}

export default function LinkItem(
  { href, icon }: LinkItemProps
): ReactElement {
  return (
    <li
      className="w-16 h-16 p-4 border-2 border-WhiteA10 hover:border-White rounded-full ease-in-out duration-300
      cursor-pointer"
    >
      <Link
        className="w-full h-full flex items-center justify-center"
        href={href}
      >
        {React.cloneElement(icon, { className: "text-3xl text-White" })}
      </Link>
    </li>
  );
}
