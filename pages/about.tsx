import { Container } from "@/components/container";
import { Layout } from "@/components/layout";
import { HeaderWithCoverImage } from "@/components/header-with-cover-image";
import aboutCover from "@/public/about-cover.jpg";

export default function About() {
  return (
    <Container title="About | Endure Consulting">
      <Layout hasTranslucentFooter>
        <HeaderWithCoverImage
          headline="Mission/Purpose"
          coverImage={{
            src: aboutCover,
            alt: "mountain pass during sunrise photo",
          }}
        >
          <p className="mt-6">
            Coming soon... Check back later OR reach out to us!
          </p>
        </HeaderWithCoverImage>
      </Layout>
    </Container>
  );
}
