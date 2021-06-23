import { ReactNode } from "react";

import { Nav } from "@/components/nav";
import { ContactUs } from "@/components/contact-us";
import { Footer } from "@/components/footer";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => (
  <>
    <main className="bg-gradient-to-b from-gray-50 to-brand-gradient">
      <div className="relative overflow-hidden">
        <img
          className="absolute opacity-5 left-2/4 ml-20 xs:ml-24 md:ml-28 inset-y-14 sm:inset-y-4"
          width="831px"
          height="831px"
          src="./logo.svg"
          alt=""
        />
        <div className="relative">
          <Nav>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Menu name="Services">
              <Nav.Menu.Link
                href="/copy-editing-proofreading"
                icon="./memo-regular.svg"
              >
                Copy Editing / Proofreading Services
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
