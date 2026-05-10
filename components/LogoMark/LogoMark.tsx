import Image from "next/image";

type Props = {
  size: number;
  color?: string;
};

export default function LogoMark({ size }: Props) {
  return (
    <Image
      src="/images/icon.png"
      alt="Luminex"
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
    />
  );
}
