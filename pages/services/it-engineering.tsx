import { Container } from "@/components/container";
import { Layout } from "@/components/layout";
import { HeaderWithCoverImage } from "@/components/header-with-cover-image";
import { Features } from "@/components/features";
import itEngineeringServicesCover from "@/public/it-engineering-services-cover.jpg";

export default function ITEngineering() {
  return (
    <Container title="IT Engineering Services | Endure Consulting">
      <Layout>
        <HeaderWithCoverImage
          headline="IT Engineering Services"
          coverImage={{
            src: itEngineeringServicesCover,
            alt: "programming language illustration photo",
            objectPosition: "bottom",
          }}
        >
          <p className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt.
          </p>
        </HeaderWithCoverImage>
        <Features>
          <Features.Item tags={["full-stack", "front-end-ui", "3d"]}>
            Software Architecture and Engineering
          </Features.Item>
          <Features.Item>
            Mobile Application Architecture and Engineering
          </Features.Item>
          <Features.Item
            tags={[
              "performance-tuning",
              "integrity",
              "security",
              "availability",
              "recoverability",
              "maintenance",
              "reporting",
              "analytics",
              "integration-etl",
              "artificial-intelligence",
              "machine-learning",
              "ml-ops",
            ]}
          >
            Data Architecture and Engineering
          </Features.Item>
          <Features.Item>Cloud Architecture and Engineering</Features.Item>
          <Features.Item>DevOps Engineering</Features.Item>
        </Features>
      </Layout>
    </Container>
  );
}
