import { Fragment, JSXElementConstructor, PropsWithChildren } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

import { ChevronDownSvg } from "@/components/svg/chevron-down-svg";
import { PropsWithClassName } from "@/types/props-with-class-name";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface MenuProps {
  name: string;
}

export const Menu = ({ children, name }: PropsWithChildren<MenuProps>) => (
  <Popover className="relative">
    {({ open }) => (
      <>
        <Popover.Button
          className={classNames(
            open ? "text-gray-900" : "text-gray-500",
            "group inline-flex items-center font-medium text-sm xs:text-base text-gray-500 hover:text-gray-900 focus:outline-none"
          )}
        >
          <span className="py-1 border-b-2 border-transparent group-hover:border-brand-dark group-focus:border-brand-dark">
            {name}
          </span>
          <ChevronDownSvg
            className={classNames(
              open ? "text-gray-600" : "text-gray-400",
              "ml-2 h-4 w-4 group-hover:text-gray-500"
            )}
          />
        </Popover.Button>
        <Transition
          show={open}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-5 ml-2 w-screen max-w-sm sm:left-0 sm:mt-6 sm:ml-0 sm:-translate-x-14"
          >
            <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white p-5">{children}</div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
);

interface MenuLinkProps {
  href: string;
  IconComponent: JSXElementConstructor<PropsWithClassName>;
}

Menu.Link = ({
  children,
  href,
  IconComponent,
}: PropsWithChildren<MenuLinkProps>) => (
  <Link href={href}>
    <a className="-m-3 p-3 flex items-start rounded hover:bg-brand-gradient transition ease-in-out duration-150">
      <IconComponent className="flex-shrink-0 h-5 w-5 text-brand" />
      <p className="ml-4 text-sm font-medium text-gray-900">{children}</p>
    </a>
  </Link>
);

// @ts-ignore
Menu.Link.displayName = "Menu.Link";
