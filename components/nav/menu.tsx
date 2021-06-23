import { Fragment, ReactNode } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  children: ReactNode;
  name: string;
}

export const Menu = ({ children, name }: Props) => (
  <Popover className="relative">
    {({ open }) => (
      <>
        <Popover.Button
          // Original className
          // className={classNames(
          //   open ? "text-gray-900" : "text-gray-500",
          //   "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          // )}
          className={classNames(
            open ? "text-gray-900" : "text-gray-500",
            "group inline-flex items-center font-medium text-sm py-1 border-b-2 border-transparent xs:text-base text-gray-500 hover:text-gray-900 hover:border-brand-dark focus:outline-none focus:border-brand-dark"
          )}
        >
          <span>{name}</span>
          {/* <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            /> */}
          {/* <img
              src="./chevron-down-regular.svg"
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            /> */}
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
            className="absolute z-10 transform -translate-x-1 mt-6 px-2 w-screen max-w-sm sm:px-0"
          >
            <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-5">
                {children}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
);

interface MenuLinkProps {
  children: ReactNode;
  href: string;
  icon: string;
}

Menu.Link = ({ children, href, icon }: MenuLinkProps) => (
  <Link href={href}>
    <a className="-m-3 p-3 flex items-start rounded hover:bg-brand-gradient transition ease-in-out duration-150">
      {/* TODO: bg-gray-50 */}
      <img
        className="flex-shrink-0 h-5 w-5 text-brand" // TODO: ensure this color is used
        src={icon}
        aria-hidden="true"
      />
      <p className="ml-4 text-sm font-medium text-gray-900">{children}</p>
    </a>
  </Link>
);
