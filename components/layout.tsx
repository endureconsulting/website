import { PropsWithChildren } from "react";

import { Nav } from "@/components/nav";
import { ContactUs } from "@/components/contact-us";
import { Footer } from "@/components/footer";
import { LaptopCodeSvg } from "@/components/svg/laptop-code-svg";
import { MemoSvg } from "@/components/svg/memo-svg";
import { ScreenUsersSvg } from "@/components/svg/screen-users-svg";

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
