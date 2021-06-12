import { Container } from "@/components/container";
import { Nav } from "@/components/nav";
import { Header } from "@/components/header";
import { ContactUs } from "@/components/contact-us";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <Container>
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
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Header
              headline="Endure Consulting"
              subhead="Integrity. Truth. Partnership."
            ></Header>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col" aria-hidden="true">
              <div className="flex-1" />
              <div className="flex-1 w-full bg-brand-dark" />
            </div>
            <div
              id="contact"
              className="max-w-3xl mx-auto px-4 pt-16 sm:px-6 sm:pt-24"
            >
              <ContactUs />
            </div>
          </div>
        </div>
      </main>
      <Footer>&copy; {new Date().getFullYear()} | Endure Consulting LLC</Footer>
    </Container>
  );
}
