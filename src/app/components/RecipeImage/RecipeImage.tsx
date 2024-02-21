"use client";

import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  style: Style;
}

interface Style {
  width: string;
  height: string;
  maxHeight?: string;
}

function RecipeImage({ src, alt, style }: Props) {
  const loader = ({ src, width }: { src: string; width: number }) => {
    return `${src}?w=${width}`;
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      loader={loader}
      priority
      style={style}
    />
  );
}

export default RecipeImage;
