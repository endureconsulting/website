import { PropsWithChildren } from "react";

export const Badge = ({ children }: PropsWithChildren<{}>) => (
  <span className="inline-flex items-center mr-1 px-2 py-0.5 rounded text-xs font-medium bg-brand text-brand-gradient">
    {children}
  </span>
);
