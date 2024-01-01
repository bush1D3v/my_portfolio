import { type ReactElement } from "react";
import { type StaticImageData } from "next/image";

import {
  LinkButton
} from "@/components";

import {
  ArrowUp,
  FormationTechnologiesSummary,
  ImageWithHiddenDescription
} from "./components";


interface FormationAreaProps {
  image: StaticImageData;
  title: string;
  description: string;
  summaryKeys: string[];
  buttonText: string;
  buttonHref: string | null;
}

export default function FormationArea({
  image,
  title,
  description,
  summaryKeys,
  buttonText,
  buttonHref
}: FormationAreaProps): ReactElement {
  return (
    <article className="flex flex-col gap-16 duration-200 ease-in items-center">
      <div className="text-center relative">
        <h3 className="duration-75 ease-in mb-6">{title}</h3>
        <ImageWithHiddenDescription
          image={image}
          alternative={"Imagem da plataforma" + title}
          description={description}
        />
        <ArrowUp />
      </div>
      <div className="flex flex-col items-center">
        <FormationTechnologiesSummary summaryKeys={summaryKeys} />
        <LinkButton
          target={"_blank"}
          link={buttonHref}
          type={"button"}
          text={buttonText}
          icon={null}
          additionalClass={"border-White hover:border-Gray"}
        />
      </div>
    </article>
  );
}
