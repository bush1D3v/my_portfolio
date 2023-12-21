import {
  FaInstagram,
  FaWhatsapp,
  FaCamera,
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaTwitch,
  FaDiscord,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import {
  LinkButton,
  Profile,
} from "../components";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center pb-14 gap-10 m-auto max-w-screen-lg min-h-[90dvh] relative"
    >
      <Profile />
      <ul className="flex gap-4 flex-col">
        <li>
          <LinkButton
            href="https://www.linkedin.com/in/vj021/"
            text="Linkedin"
            icon={<FaLinkedin />}
          />
        </li>
        <li>
          <LinkButton
            href="https://github.com/bush1D3v"
            text="GitHub"
            icon={<FaGithub />}
          />
        </li>
        <li>
          <LinkButton
            href="https://discord.com/users/443480311066656770"
            text="Discord"
            icon={<FaDiscord />}
          />
        </li>
        <li>
          <LinkButton
            href="https://www.twitch.tv/dev_navarro"
            text="Twitch"
            icon={<FaTwitch />}
          />
        </li>
        <li>
          <LinkButton
            href="https://www.youtube.com/channel/UC9fwjcVCxHUiuj0Ve3Hs9pA"
            text="YouTube"
            icon={<FaYoutube />}
          />
        </li>
        <li>
          <LinkButton
            href="https://api.whatsapp.com/send/?phone=5521995727079"
            text="WhatsApp"
            icon={<FaWhatsapp />}
          />
        </li>
        <li>
          <LinkButton
            href="https://www.instagram.com/victorj.021/"
            text="Instagram"
            icon={<FaInstagram />}
          />
        </li>
        <li>
          <LinkButton
            href="https://twitter.com/victorj_021"
            text="Twitter"
            icon={<FaTwitter />}
          />
        </li>
        <li>
          <LinkButton
            href="https://www.tiktok.com/@victorj.021"
            text="TikTok"
            icon={<FaTiktok />}
          />
        </li>
        <li>
          <LinkButton
            href="https://www.kwai.com/@victorj.021"
            text="Kwai"
            icon={<FaCamera />}
          />
        </li>
      </ul>
    </main>
  );
}
