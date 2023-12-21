import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import {
  LinkButton,
  Profile,
  EmbedPost,
  Logo
} from "../components";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center pb-14 gap-10 m-auto max-w-screen-lg min-h-[90dvh] relative"
    >
      <Logo />
      <Profile />
      <ul className="flex gap-4 flex-col">
        <li>
          <LinkButton
            href="https://www.instagram.com/psi.carolmariano/"
            text="Instagram"
            icon={<FaInstagram />}
          />
        </li>
        <li>
          <LinkButton
            href="https://api.whatsapp.com/send/?phone=553584784001"
            text="WhatsApp"
            icon={<FaWhatsapp />}
          />
        </li>
      </ul>
      <EmbedPost />
    </div>
  );
}
