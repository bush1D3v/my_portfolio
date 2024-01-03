import { type ReactElement } from "react";
import Image, { type StaticImageData } from "next/image";

import { TechnologiesList } from "./components";

interface ImageWithHiddenDescriptionProps {
  image: StaticImageData;
  alternative: string;
  description: string;
  technologies: string[] | null;
}

export default function ImageWithHiddenDescription({
  image,
  alternative,
  description,
  technologies
}: ImageWithHiddenDescriptionProps): ReactElement {
  return (
    <div className="group relative flex flex-col w-fit h-full duration-200 ease-in cursor-pointer">
      <Image
        src={image}
        alt={alternative}
        priority={true}
        quality={100}
        width={400}
        height={400}
        decoding="async"
        className="rounded-3xl sm:w-[400px] sm:h-[400px]"
      />
      <div
        className="absolute hidden group-hover:flex justify-center items-center bg-BlackA10 rounded-3xl h-full
        duration-200 ease-in p-10 text-justify animate-fade animate-ease-in-out animate-duration-500 flex-col"
      >
        <p className="text-2xl md:text-3xl font-medium text-White animate-fade-right animate-ease-in-out">
          {description}
        </p>
        <TechnologiesList technologies={technologies} />
      </div>
    </div>
  );
}
