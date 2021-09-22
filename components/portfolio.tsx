import { JSXElementConstructor, PropsWithChildren } from "react";
import { PropsWithClassName } from "@/types/props-with-class-name";

export const Portfolio = ({ children }: PropsWithChildren<{}>) => (
  <div className="text-left rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px rounded-2col-grid">
    {children}
  </div>
);

interface PortfolioProjectProps {
  title: string;
  href?: string;
  IconComponent: JSXElementConstructor<PropsWithClassName>;
}

Portfolio.Project = ({
  title,
  href,
  IconComponent,
  children,
}: PropsWithChildren<PortfolioProjectProps>) => (
  <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-brand-dark">
    <div className="text-left">
      <span className="rounded-lg inline-flex p-3 ring-4 ring-white bg-brand-gradient text-brand">
        <IconComponent className="h-6 w-6" aria-hidden="true" />
      </span>
    </div>
    <div className="flex flex-col mt-5">
      <h3 className="text-lg font-medium">
        {href ? (
          <a href={href} className="focus:outline-none" target="_blank">
            <span className="absolute inset-0" aria-hidden="true" />
            {title}
          </a>
        ) : (
          <a href="javascript:void(0);" className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {title}
          </a>
        )}
      </h3>
      <p className="mt-1 text-sm text-gray-500">{children}</p>
      {!href && (
        <>
          <span className="mt-3 text-sm italic font-medium text-brand">
            Work example coming soon…
          </span>
        </>
      )}
    </div>
  </div>
);

// @ts-expect-error
Portfolio.Project.displayName = "Portfolio.Project";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
