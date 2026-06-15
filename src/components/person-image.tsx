type PersonImageProps = {
  name: string;
  alt: string;
  useFallback: boolean;
};

export default function PersonImage({ name, alt, useFallback }: PersonImageProps) {
  const src = useFallback ? "/persons/fallback.png" : `/persons/${name}.png`;

  return (
    <img
      src={src}
      alt={alt}
      className="size-[120px] rounded-base border-2 border-border object-cover shadow-shadow"
    />
  );
}
