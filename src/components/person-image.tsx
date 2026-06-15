"use client";

import Image from "next/image";
import { useState } from "react";

type PersonImageProps = {
  name: string;
  alt: string;
};

export default function PersonImage({ name, alt }: PersonImageProps) {
  const [src, setSrc] = useState(`/persons/${name}.png`);

  return (
    <Image
      src={src}
      alt={alt}
      width={120}
      height={120}
      onError={() => setSrc("/persons/fallback.png")}
      className="size-[120px] rounded-base border-2 border-border object-cover shadow-shadow"
    />
  );
}
