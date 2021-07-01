import Image from "next/image";
import { PropsWithChildren } from "react";

interface HeaderWithCoverImageProps {
  headline: string;
  coverImage: {
    src: StaticImageData;
    alt: string;
    objectPosition?: string;
  };
}

export const HeaderWithCoverImage = ({
  children,
  headline,
  coverImage,
}: PropsWithChildren<HeaderWithCoverImageProps>) => (
  <div className="relative bg-brand mt-12 sm:mt-16">
    <div className="absolute inset-0">
      <Image
        src={coverImage.src}
        alt={coverImage.alt}
        layout="fill"
        objectFit="cover"
        objectPosition={coverImage.objectPosition}
      />
      <div
        className="absolute inset-0 bg-brand mix-blend-multiply"
        aria-hidden="true"
      />
    </div>
    <div className="relative flex flex-col items-center justify-center max-w-2xl h-425px mx-auto text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {headline}
      </h1>
      <div className="text-lg sm:text-xl text-gray-100 max-w-2xl">
        {children}
      </div>
    </div>
  </div>
);
