import { Container } from "@/components/container";
import { Layout } from "@/components/layout";
import { HeaderWithCoverImage } from "@/components/header-with-cover-image";
import { Features } from "@/components/features";
import learningEducationServicesCover from "@/public/learning-education-services-cover.jpg";

export default function LearningEducation() {
  return (
    <Container title="Learning / Education Services | Endure Consulting">
      <Layout>
        <HeaderWithCoverImage
          headline="Learning / Education Services"
          coverImage={{
            src: learningEducationServicesCover,
            alt: "concrete bridge near mountains during daytime photo",
            objectPosition: "bottom",
          }}
        >
          <p className="mt-4 sm:mt-6">
            Modern learning experiences for your employees and/or customers.
          </p>
        </HeaderWithCoverImage>
        <Features maxCols={1}>
          <Features.Item
            bullets={[
              "Current-State/Future-State Analysis",
              "Strategy Development",
              "Curriculum/Course Design",
              "Content Development and Execution (new development and/or enhancement of existing content)",
              "Implementation and Support (LMS Implementation/Integration/Migration; LMS Administration)",
            ]}
          >
            eLearning and Instructional Design
          </Features.Item>
        </Features>
      </Layout>
    </Container>
  );
}
