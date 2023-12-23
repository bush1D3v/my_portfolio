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
      className="lg:mb-[3dvh] p-5 flex items-center justify-center max-w-screen-xl h-[9dvh] m-auto bg-Black2 rounded-xl"
    >
      <address>
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
