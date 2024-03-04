import { type ReactElement } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import { MenuSvg } from "./components";


interface HamburguerMenuProps {
  isClick: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsClick: (isClick: boolean) => void;
}

export default function HamburguerMenu({
  isClick,
  setIsClick
}: HamburguerMenuProps): ReactElement {
  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <button
      className="inline-flex items-center justify-center p-2 rounded-md text-White focus:outline-none
    focus:ring-2 focus:ring-inset focus:ring-White duration-200 ease-in"
      aria-label="Open main menu"
      onClick={toggleNavbar}
    >
      {isClick ? (
        <MenuSvg />
      ) : (
        <RxHamburgerMenu className="h-10 w-10" />
      )}
    </button>
  );
}
