import { PropsWithChildren } from "react";
import Image from "next/image";

import { Nav } from "@/components/nav";
import { ContactUs } from "@/components/contact-us";
import { Footer } from "@/components/footer";
import { LaptopCodeSvg } from "@/components/svg/laptop-code-svg";
import { MemoSvg } from "@/components/svg/memo-svg";
import { ScreenUsersSvg } from "@/components/svg/screen-users-svg";
import logo from "@/public/logo.svg";

interface LayoutProps {
  hasContactUs?: boolean;
  hasTranslucentFooter?: boolean;
}

export const Layout = ({
  children,
  hasContactUs = false,
  hasTranslucentFooter = false,
}: PropsWithChildren<LayoutProps>) => (
  <>
    <main className="bg-gradient-to-b from-gray-50 to-brand-gradient">
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute opacity-5 left-1/2 transform -translate-x-1/2">
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
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Menu name="Services">
              <Nav.Menu.Link
                href="/services/it-engineering"
                IconComponent={LaptopCodeSvg}
              >
                IT Engineering Services
              </Nav.Menu.Link>
              <Nav.Menu.Link
                href="/services/copy-editing-proofreading"
                IconComponent={MemoSvg}
              >
                Copy Editing/Proofreading Services
              </Nav.Menu.Link>
              <Nav.Menu.Link
                href="/services/learning-education"
                IconComponent={ScreenUsersSvg}
              >
                Learning/Education Services
              </Nav.Menu.Link>
            </Nav.Menu>
            <Nav.Link href={hasContactUs ? "#contact" : "/#contact"}>
              Contact
            </Nav.Link>
          </Nav>
          {children}
        </div>
        {hasContactUs && (
          <div className="relative" id="contact">
            <ContactUs />
          </div>
        )}
        <Footer hasTranslucentFooter={hasTranslucentFooter}>
          &copy; {new Date().getFullYear()} | Endure Consulting LLC
        </Footer>
      </div>
    </main>
  </>
);
