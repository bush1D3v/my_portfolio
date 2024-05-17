"use client";

import {
  type ReactElement,
  useState,
  useEffect
} from "react";
import Image, { type StaticImageData } from "next/image";

import { Skeleton } from "./components";

interface ImageSkeletonLoaderProps {
  src: StaticImageData | string;
  alt: string;
  height: number;
  width: number;
  loading: "lazy" | "eager";
  sessionStorageItem: string;
  className: string;
}

export default function ImageSkeletonLoader({
  src,
  alt,
  height,
  width,
  loading,
  sessionStorageItem,
  className
}: ImageSkeletonLoaderProps): ReactElement {
  const [ isSkeletonNotLoading, setIsSkeletonNotLoading ] = useState(false);
  const [ isImageLoading, setIsImageLoading ] = useState(false);

  const handleImageLoad = (): void => {
    setIsImageLoading(true);
  };

  useEffect(() => {
    const loading = sessionStorage.getItem(sessionStorageItem);

    if (loading !== null) {
      setIsSkeletonNotLoading(true);
    } else {
      const timeout = setTimeout(() => {
        setIsSkeletonNotLoading(true);
        sessionStorage.setItem(sessionStorageItem, "true");
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [ sessionStorageItem ]);

  return (
    <>
      {isSkeletonNotLoading ? (
        <>
          <Image src={src} alt={alt} loading={loading} height={height} width={width}
            onLoad={handleImageLoad} className={className} quality={100} priority={true} decoding="async" />
          {isImageLoading ? null : <Skeleton />}
        </>
      ) : (
        <Skeleton />
      )}
    </>
  );
}
