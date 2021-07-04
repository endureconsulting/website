import { PropsWithChildren } from "react";

import { CheckSvg } from "@/components/svg/check-svg";

interface FeaturesProps {
  maxCols?: number;
}

export const Features = ({
  children,
  maxCols = 3,
}: PropsWithChildren<FeaturesProps>) => (
  <div
    className={`${
      maxCols > 1 ? "max-w-5xl" : "max-w-md"
    } mx-auto pt-8 pb-16 px-4 sm:px-6 lg:pt-16 lg:pb-24 lg:px-8`}
  >
    <div
      className={`mt-4 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-${Math.min(
        maxCols,
        2
      )} sm:gap-x-6 sm:gap-y-12 lg:grid-cols-${maxCols} lg:gap-x-8`}
    >
      {children}
    </div>
  </div>
);

interface FeaturesItemProps {
  bullets?: string[];
}

Features.Item = ({
  children,
  bullets,
}: PropsWithChildren<FeaturesItemProps>) => (
  <div className="relative">
    <CheckSvg className="absolute h-6 w-6 text-green-500" />
    <p className="ml-9 leading-6 font-medium text-gray-900">{children}</p>
    {bullets && (
      <ul className="mt-2 ml-14 list-circle leading-relaxed text-sm">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    )}
  </div>
);

// @ts-ignore
Features.Item.displayName = "Features.Item";
