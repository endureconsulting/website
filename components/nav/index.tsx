import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.svg";
import { Menu } from "./menu";

interface Props {
  children: ReactNode;
}

export const Nav = ({ children }: Props) => (
  <div className="fixed top-0 w-full py-3 bg-white shadow z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <nav
        className="relative flex items-center justify-end xs:justify-center sm:h-10"
        aria-label="Global"
      >
        <div className="flex items-center flex-1 absolute inset-y-0 left-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <a>
                <span className="sr-only">Endure Consulting</span>
                <div className="w-8 h-8 sm:w-10 sm:h-10">
                  <Image alt="" src={logo} layout="fill" objectFit="contain" />
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex space-x-5 sm:space-x-10">{children}</div>
      </nav>
    </div>
  </div>
);

interface NavLinkProps {
  children: ReactNode;
  href: string;
}

Nav.Link = ({ children, href }: NavLinkProps) => (
  <a
    href={href}
    className="font-medium text-sm py-1 border-b-2 border-transparent xs:text-base text-gray-500 hover:text-gray-900 hover:border-brand-dark focus:outline-none focus:border-brand-dark"
  >
    {children}
  </a>
);

// @ts-ignore
Nav.Link.displayName = "Nav.Link";

Nav.Menu = Menu;

// @ts-ignore
Nav.Menu.displayName = "Nav.Menu";
