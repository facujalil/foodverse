"use client";

import { useEffect, useState } from "react";
import NextImage from "next/image";
import NoImage from "./NoImage/NoImage";

interface Props {
  src: string;
  alt: string;
}

function RecipeImage({ src, alt }: Props) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
    img.onerror = () => {
      setImgSrc("");
    };
  }, [src]);

  return imgSrc ? (
    <NextImage
      src={imgSrc}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      priority
    />
  ) : imgSrc === "" ? (
    <NoImage />
  ) : null;
}

export default RecipeImage;
