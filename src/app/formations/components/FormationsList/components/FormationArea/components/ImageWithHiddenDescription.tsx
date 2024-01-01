import { type ReactElement } from "react";
import Image, { type StaticImageData } from "next/image";


interface ImageWithHiddenDescriptionProps {
  image: StaticImageData;
  alternative: string;
  description: string;
}

export default function ImageWithHiddenDescription({
  image,
  alternative,
  description
}: ImageWithHiddenDescriptionProps): ReactElement {
  return (
    <div className="group relative flex flex-col w-fit h-full duration-200 ease-in cursor-pointer">
      <Image
        src={image}
        className="rounded-3xl"
        alt={alternative}
        priority={true}
        quality={100}
        width={400}
        height={400}
        decoding="async"
      />
      <div
        className="absolute hidden group-hover:flex justify-center items-center bg-BlackA10 rounded-3xl h-full
        duration-200 ease-in p-10 text-justify animate-fade animate-ease-in-out animate-duration-500"
      >
        <p className="text-2xl md:text-3xl font-medium text-White animate-fade-right animate-ease-in-out">
          {description}
        </p>
      </div>
    </div>
  );
}
