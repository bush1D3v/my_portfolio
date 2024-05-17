import { type StaticImageData } from "next/image";
import Link from "next/link";
import { type ReactElement } from "react";

import { ImageSkeletonLoader, LanguageLists } from "./components";

interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
  data: string;
  resume: ReactElement;
  link: string;
  summaryKeys: [ ReactElement, string ][];
}

export default function Card({
  image,
  title,
  description,
  data,
  resume,
  link,
  summaryKeys
}: CardProps): ReactElement {
  return (
    <article className="flex flex-col gap-8 p-4 min-[835px]:p-0">
      <div className="flex min-[835px]:flex-row gap-4">
        <Link
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="hover:opacity-50 cursor-pointer duration-200 ease-in"
        >
          <ImageSkeletonLoader
            src={image}
            alt={`${title} Logo`}
            height={80}
            width={80}
            loading="eager"
            sessionStorageItem={"card"}
            className="rounded-full"
          />
        </Link>
        <div>
          <h3 className="duration-100 ease-in-out">{title}</h3>
          <div className="flex flex-col md:flex-row">
            <p className="text-White">{description}</p>
            <p className="text-White hidden md:flex">&nbsp;|&nbsp;</p>
            <p className="text-White">{data}</p>
          </div>
        </div>
      </div>
      {resume}
      <LanguageLists summaryKeys={summaryKeys} />
    </article>
  );
}
