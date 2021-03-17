import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Footer = ({ children }: Props) => (
  <footer className="bg-brand-dark">
    <div className="max-w-7xl mx-auto py-12 sm:py-16">
      <p className="text-center text-sm text-white">{children}</p>
    </div>
  </footer>
);
