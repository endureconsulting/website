import { Container } from "@/components/container";
import { Layout } from "@/components/layout";
import { XlLogoBackground } from "@/components/xl-logo-background";
import { Header } from "@/components/header";
import { VideoCta } from "@/components/video-cta";
import { ContactUs } from "@/components/contact-us";

export default function Home() {
  return (
    <Container>
      <Layout>
        <XlLogoBackground>
          <Header
            headline="Endure Consulting"
            subhead="Integrity. Truth. Partnership."
          />
          <div className="mx-auto pt-16 sm:pt-24">
            <VideoCta />
          </div>
          <ContactUs />
        </XlLogoBackground>
      </Layout>
    </Container>
  );
}
