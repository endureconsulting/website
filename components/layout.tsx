import { PropsWithChildren } from "react";
import Image from "next/image";

import { Nav } from "@/components/nav";
import { ContactUs } from "@/components/contact-us";
import { Footer } from "@/components/footer";
import { LaptopCodeSvg } from "@/components/svg/laptop-code-svg";
import { MemoSvg } from "@/components/svg/memo-svg";
import { ScreenUsersSvg } from "@/components/svg/screen-users-svg";
import logo from "@/public/logo.svg";

export const Layout = ({ children }: PropsWithChildren<{}>) => (
  <>
    <main className="bg-gradient-to-b from-gray-50 to-brand-gradient">
      <div className="relative overflow-hidden">
        <div className="absolute opacity-5 left-2/4 ml-20 xs:ml-24 md:ml-28 inset-y-14 sm:inset-y-4">
          <Image
            src={logo}
            alt="large faded background Endure Consulting logo"
            layout="fixed"
            width={831}
            height={831}
          />
        </div>
        <div className="relative">
          <Nav>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Menu name="Services">
              <Nav.Menu.Link
                href="/services/copy-editing-proofreading"
                IconComponent={MemoSvg}
              >
                Copy Editing / Proofreading Services
              </Nav.Menu.Link>
              <Nav.Menu.Link
                href="/services/it-engineering"
                IconComponent={LaptopCodeSvg}
              >
                IT Engineering Services
              </Nav.Menu.Link>
              <Nav.Menu.Link
                href="/services/learning-education"
                IconComponent={ScreenUsersSvg}
              >
                Learning/Education Services
              </Nav.Menu.Link>
            </Nav.Menu>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          {children}
        </div>
        <div className="relative" id="contact">
          <ContactUs />
        </div>
      </div>
    </main>
    <Footer>&copy; {new Date().getFullYear()} | Endure Consulting LLC</Footer>
  </>
);
