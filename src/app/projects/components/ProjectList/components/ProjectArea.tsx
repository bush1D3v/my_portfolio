import { type ReactElement } from "react";
import { type StaticImageData } from "next/image";
import { SiVercel, SiGithub } from "react-icons/si";

import {
  ArrowUp,
  ImageWithHiddenDescription,
  LinkButton
} from "@/components";

interface ProjectAreaProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
  description: string;
  technologies: string[];
  repoLink: string;
  projectLink: string;
}

export default function ProjectArea({
  title,
  subtitle,
  image,
  description,
  technologies,
  repoLink,
  projectLink
}: ProjectAreaProps): ReactElement {
  return (
    <li className="flex flex-col items-center gap-8 md:w-[500px] relative">
      <h1 className="-mb-6 ease-in duration-75">{title}</h1>
      <h2 className="ease-in duration-75">{subtitle}</h2>
      <ImageWithHiddenDescription
        image={image}
        alternative={"Imagem de " + title}
        description={description}
        technologies={technologies}
      />
      <ArrowUp additionalClasses="bottom-44 md:bottom-40 right-16" />
      <div className="flex flex-col gap-4 ml-0 sm:ml-20 mt-auto mb-auto mr-auto">
        <LinkButton
          target={"_blank"}
          link={repoLink}
          type={"button"}
          text={"Repositório"}
          icon={<SiGithub />}
          additionalClass={"border-White hover:border-Gray"}
        />
        <LinkButton
          target={"_blank"}
          link={projectLink}
          type={"button"}
          text={"Projeto"}
          icon={<SiVercel />}
          additionalClass={"border-White hover:border-Gray"}
        />
      </div>
    </li>
  );
}
