import Link from "next/link";
import React, { type ReactElement } from "react";

interface LinkItemProps {
  href: string;
  icon: ReactElement;
  ariaLabel: string;
}

export default function LinkItem({
  href,
  icon,
  ariaLabel
}: LinkItemProps): ReactElement {
  return (
    <li
      className="flex items-center w-16 h-16 border-2 border-WhiteA10 hover:border-White rounded-full
      ease-in-out duration-300 cursor-pointer "
    >
      <Link
        className="w-16 h-16 flex items-center justify-center"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {React.cloneElement(icon, { className: "text-3xl text-White duration-200 ease-in" })}
      </Link>
    </li>
  );
}
