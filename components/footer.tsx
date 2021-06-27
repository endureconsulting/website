import { PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren<{}>) => (
  <footer className="bg-brand-dark">
    <div className="max-w-7xl mx-auto py-12 sm:py-16">
      <p className="text-center text-sm text-white">{children}</p>
    </div>
  </footer>
);
