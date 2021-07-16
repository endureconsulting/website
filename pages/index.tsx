import { Container } from "@/components/container";
import { Layout } from "@/components/layout";
import { XlLogoBackground } from "@/components/xl-logo-background";
import { Header } from "@/components/header";
import { VideoCta } from "@/components/video-cta";

export default function Home() {
  return (
    <Container>
      <Layout hasContactUs>
        <XlLogoBackground>
          <Header
            headline="Endure Consulting"
            subhead="Integrity. Truth. Partnership."
          />
          <div className="mx-auto pt-16 sm:pt-24">
            <VideoCta />
          </div>
        </XlLogoBackground>
      </Layout>
    </Container>
  );
}
