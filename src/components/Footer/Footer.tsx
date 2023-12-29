import { type ReactElement } from "react";
import {
  FaGithub,
  FaDiscord,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

import { LinkItem } from "./components";

export default function Footer(): ReactElement {
  return (
    <footer
      className="lg:mb-[3dvh] h-[22dvh] md:h-[9dvh] flex flex-col md:flex-row items-center justify-between
      md:justify-around m-auto lg:mx-8 xl:mx-auto bg-Black2 max-w-screen-xl lg:rounded-xl duration-200 ease-in
      p-5 animate-fade-down animate-ease-in-out"
    >
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
      <address>
        <div></div>
        <ul className="flex gap-5">
          <LinkItem href="https://github.com/bush1D3v" icon={<FaGithub />} />
          <LinkItem href="https://www.linkedin.com/in/vj021/" icon={<FaLinkedin />} />
          <LinkItem href="https://discord.com/users/443480311066656770" icon={<FaDiscord />} />
          <LinkItem href="https://www.instagram.com/victorj.021" icon={<FaInstagram />} />
          <LinkItem href="https://api.whatsapp.com/send?phone=5521995727079" icon={<FaWhatsapp />} />
          <LinkItem href="https://twitter.com/victorj_021" icon={<FaTwitter />} />
        </ul>
      </address>
    </footer>
  );
}
