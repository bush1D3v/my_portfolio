"use client";

import { useState, type ReactElement } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  ListItem,
  Logo,
  ButtonTheme,
  MenuSvg
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
            <ul className="ml-4 flex items-center gap-10 text-White">
              <ListItem href="/about" text="Sobre" />
              <ListItem href="/skills" text="Habilidades" />
              <ListItem href="/formations" text="Formações" />
              <ListItem href="/projects" text="Projetos" />
              <ListItem href="/contact" text="Contato" />
            </ul>
          </div>
          <div className="hidden md:flex">
            <ButtonTheme />
          </div>
          <div className="md:hidden flex items-center">
            <ButtonTheme />
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-White focus:outline-none
              focus:ring-2 focus:ring-inset focus:ring-White duration-200 ease-in"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <MenuSvg />
              ) : (
                <RxHamburgerMenu className="h-10 w-10" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {
        isClick && (
          <div className="flex md:hidden">
            <ul
              className="flex flex-col w-full items-end px-4 pt-2 pb-3 space-y-1 sm:px-3
            animate-fade-left relative text-White"
            >
              <ListItem href="/about" text="Sobre" />
              <ListItem href="/skills" text="Habilidades" />
              <ListItem href="/formations" text="Formações" />
              <ListItem href="/projects" text="Projetos" />
              <ListItem href="/contact" text="Contato" />
            </ul>
          </div>
        )
      }
    </>
  );
}
