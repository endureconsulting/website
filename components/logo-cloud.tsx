import { PropsWithChildren } from "react";

import { Cta } from "@/components/cta";

interface LogoCloudProps {
  title: string;
  cols: number;
}

export const LogoCloud = ({
  children,
  title,
  cols,
}: PropsWithChildren<LogoCloudProps>) => (
  <Cta>
    <Cta.Title>{title}</Cta.Title>
    <div
      className={`mt-6 grid grid-cols-${Math.max(
        1,
        cols - 2
      )} gap-0.5 sm:grid-cols-${Math.max(2, cols - 1)} md:grid-cols-${Math.max(
        2,
        cols
      )} lg:mt-8`}
    >
      {children}
    </div>
  </Cta>
);

interface LogoCloudClientProps {
  colSpan?: number;
}

LogoCloud.Client = ({
  children,
  colSpan = 1,
}: PropsWithChildren<LogoCloudClientProps>) => (
  <div className="col-span-1 flex justify-center py-4">{children}</div>
);

// @ts-ignore
LogoCloud.Client.displayName = "LogoCloud.Client";
