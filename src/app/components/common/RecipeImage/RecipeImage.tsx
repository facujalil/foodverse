import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

function RecipeImage({ src, alt }: Props) {
  return (
    <Image
      src={src}
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
  );
}

export default RecipeImage;
