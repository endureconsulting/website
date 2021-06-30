import { PropsWithChildren } from "react";

interface FooterProps {
  hasTranslucentFooter: boolean;
}

export const Footer = ({
  children,
  hasTranslucentFooter,
}: PropsWithChildren<FooterProps>) => (
  <footer
    className={
      hasTranslucentFooter
        ? "absolute bottom-0 w-full bg-brand-dark mix-blend-multiply"
        : "bg-brand-dark"
    }
  >
    <div className="max-w-7xl mx-auto py-12 sm:py-16">
      <p className="text-center text-sm text-white">{children}</p>
    </div>
  </footer>
);
