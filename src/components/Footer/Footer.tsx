import { type ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <footer className="h-[5dvh] flex gap-4 items-center justify-center relative">
      <p className="font-light absolute left-4">© 2023</p>
      <p>Made with💖by&nbsp;
        <a
          href="https://github.com/bush1D3v"
          className="underline hover:text-saturatedBlue duration-300 ease-in-out"
          target="_blank"
          rel="noreferrer"
        >
          bush1D3v
        </a>
      </p>
    </footer>
  );
}
