"use client";

import { useState, type ReactElement } from "react";

import {
  Logo,
  ButtonTheme,
  ItemsList,
  HamburguerMenu
} from "./components";

export default function NavBar(): ReactElement {
  const [ isClick, setIsClick ] = useState(false);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };
  return (
    <>
      <nav className="w-[90%] mx-auto justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[9dvh] md:items-center md:justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo />
            </div>
          </div>
          <div className="hidden md:flex">
            <ItemsList className="ml-4 flex items-center gap-10 text-White" />
          </div>
          <div className="hidden md:flex">
            <ButtonTheme />
          </div>
          <div className="md:hidden flex items-center">
            <ButtonTheme />
            <HamburguerMenu
              isClick={isClick}
              setIsClick={toggleNavbar}
            />
          </div>
        </div>
      </nav>
      {
        isClick && (
          <div className="flex md:hidden">
            <ItemsList
              className="flex flex-col w-full items-end px-4 pt-2 pb-3 space-y-1 sm:px-3
              animate-fade-left relative text-White"
            />
          </div>
        )
      }
    </>
  );
}
