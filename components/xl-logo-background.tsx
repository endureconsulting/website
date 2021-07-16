import Image from "next/image";

import logo from "@/public/logo.svg";
import { PropsWithClassName } from "@/types/props-with-class-name";

export const XlLogoBackground = ({ className }: PropsWithClassName) => (
  <div
    className={`absolute opacity-5 left-1/2 transform -translate-x-1/2${
      className ? ` ${className}` : ""
    }`}
  >
    <Image
      src={logo}
      alt="large faded background Endure Consulting logo"
      layout="fixed"
      width={831}
      height={831}
    />
  </div>
);
