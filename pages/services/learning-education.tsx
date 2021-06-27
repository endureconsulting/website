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
          <p className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt.
          </p>
        </HeaderWithCoverImage>
        <Features>
          <Features.Item>eLearning and Instructional Design</Features.Item>
          <Features.Item>Current-State/Future-State Analysis</Features.Item>
          <Features.Item>Strategy Development</Features.Item>
          <Features.Item>Curriculum/Course Design</Features.Item>
          <Features.Item>
            Content Development and Execution (new development and/or
            enhancement of existing content)
          </Features.Item>
          <Features.Item>
            Implementation and Support (LMS
            Implementation/Integration/Migration; LMS Administration)
          </Features.Item>
        </Features>
      </Layout>
    </Container>
  );
}
