import { PropsWithChildren } from "react";

interface HeaderProps {
  headline: string;
  subhead: string;
}

export const Header = ({
  children,
  headline,
  subhead,
}: PropsWithChildren<HeaderProps>) => (
  <div className="mt-16 pt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
    <div className="text-center">
      <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 xs:text-6xl md:text-7xl">
        {headline}
      </h1>
      <h2 className="mt-1 text-2xl tracking-tighter font-light text-gray-900 xs:text-3xl md:text-4xl">
        {subhead}
      </h2>
      {children && (
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {children}
        </p>
      )}
    </div>
  </div>
);
