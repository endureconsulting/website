import { PropsWithChildren } from "react";

import { CheckSvg } from "@/components/svg/check-svg";

export const Features = ({ children }: PropsWithChildren<{}>) => (
  <div className="max-w-5xl mx-auto pb-16 px-4 sm:px-6 lg:pt-16 lg:pb-24 lg:px-8">
    <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
      {children}
    </div>
  </div>
);

Features.Item = ({ children }: PropsWithChildren<{}>) => (
  <div className="relative">
    <CheckSvg className="absolute h-6 w-6 text-green-500" />
    <p className="ml-9 leading-6 font-medium text-gray-900">{children}</p>
  </div>
);

// @ts-ignore
Features.Item.displayName = "Features.Item";
