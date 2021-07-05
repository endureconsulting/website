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
          <p className="mt-4 sm:mt-6">Proven. Trusted. Value.</p>
        </HeaderWithCoverImage>
        <Features maxCols={2}>
          <Features.Item
            bullets={["Full Stack", "Middle-Tier, Back-End, API", "Front-End/UI", "3D"]}
          >
            Software Architecture and Engineering
          </Features.Item>
          <Features.Item
            bullets={[
              "Performance Tuning (guaranteed to at least double performance)",
              "Data Integrity, Security, Availability, Recoverability & Maintenance",
              "Reporting, Analytics & Integration (ETL)",
              "Artificial Intelligence (AI), Machine Learning (ML) & MLOps",
            ]}
          >
            Database Architecture and Engineering
          </Features.Item>
          <Features.Item bullets={["Cross-Platform", "Native"]}>
            Mobile Application Architecture and Engineering
          </Features.Item>
          <Features.Item
            bullets={[
              "CI/CD & Continuous Monitoring",
              "Version Control",
              "Infrastructure as Code",
              "Configuration Management",
            ]}
          >
            DevOps
          </Features.Item>
          <Features.Item>
            Cloud Architecture, Security and Administration
          </Features.Item>
        </Features>
      </Layout>
    </Container>
  );
}
