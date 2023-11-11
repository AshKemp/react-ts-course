import { PropsWithChildren } from "react";

interface IHeaderProps {
  image: {
    src: string;
    alt: string;
  };
}

type HeaderProps = PropsWithChildren<IHeaderProps>;
export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
}
