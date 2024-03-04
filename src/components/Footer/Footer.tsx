import { type ReactElement } from "react";
import {
  FaGithub,
  FaDiscord,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

import { Addresses, LinkItem } from "./components";

export default function Footer(): ReactElement {
  return (
    <footer
      className="lg:mb-[3dvh] h-[22dvh] md:h-[9dvh] flex flex-col md:flex-row items-center justify-between
      md:justify-around m-auto lg:mx-8 xl:mx-auto bg-Black2 max-w-screen-xl lg:rounded-xl duration-200 ease-in
      p-5 animate-fade-down animate-ease-in-out"
    >
      <Addresses />
      <address>
        <ul className="flex gap-5">
          <LinkItem
            href="https://github.com/bush1D3v"
            icon={<FaGithub />}
            ariaLabel="Github Link"
          />
          <LinkItem
            href="https://www.linkedin.com/in/vj021/"
            icon={<FaLinkedin />}
            ariaLabel="Linkedin Link"
          />
          <LinkItem
            href="https://discord.com/users/443480311066656770" icon={<FaDiscord />}
            ariaLabel="Discord Link"
          />
          <LinkItem
            href="https://www.instagram.com/victorj.021"
            icon={<FaInstagram />}
            ariaLabel="Instagram Link"
          />
          <LinkItem
            href="https://api.whatsapp.com/send?phone=5521995727079"
            icon={<FaWhatsapp />}
            ariaLabel="WhatsApp Link"
          />
          <LinkItem
            href="https://twitter.com/victorj_021"
            icon={<FaTwitter />}
            ariaLabel="Twitter Link"
          />
        </ul>
      </address>
    </footer>
  );
}
