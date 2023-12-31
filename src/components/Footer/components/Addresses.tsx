import { type ReactElement } from "react";

export default function Addresses(): ReactElement {
  return (
    <>
      <address className="flex md:flex-col w-full lg:w-fit flex-start gap-4 md:gap-2">
        <p className="text-White duration-200">Email</p>
        <a
          href="mailto:victor.jose.lopes.navarro@gmail.com"
          target="_blank"
          className="hover:opacity-50"
        >
          victor.jose.lopes.navarro@gmail.com
        </a>
      </address>
      <address className="flex md:flex-col w-full md:text-center lg:w-fit flex-start gap-4 md:gap-2">
        <p className="text-White duration-200">Localização</p>
        <p>Rio de Janeiro</p>
      </address>
    </>
  );
}
