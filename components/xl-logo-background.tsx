import { PropsWithChildren } from "react";

export const XlLogoBackground = ({ children }: PropsWithChildren<{}>) => (
  <div className="bg-logo bg-cover bg-left-top bg-no-repeat bg-fixed">
    {children}
  </div>
);
