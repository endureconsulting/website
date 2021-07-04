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
        />
        <Features maxCols={2}>
          <Features.Item bullets={["Full Stack", "Front End/UI", "3D"]}>
            Software Architecture and Engineering
          </Features.Item>
          <Features.Item
            bullets={[
              "Performance Tuning (guaranteed to at least double performance)",
              "Data Integrity, Security, Availability, Recoverability, Maintenance",
              "Reporting, Analytics, Integration (ETL)",
              "Artificial Intelligence (AI), Machine Learning (ML), MLOps",
            ]}
          >
            Database Architecture and Engineering
          </Features.Item>
          <Features.Item bullets={["Cross-Platform", "Native"]}>
            Mobile Application Architecture and Engineering
          </Features.Item>
          <Features.Item>Cloud Architecture and Engineering</Features.Item>
          <Features.Item>DevOps Engineering</Features.Item>
        </Features>
      </Layout>
    </Container>
  );
}
