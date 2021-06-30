import { Container } from "@/components/container";
import { Layout } from "@/components/layout";
import { HeaderWithCoverImage } from "@/components/header-with-cover-image";
import { Features } from "@/components/features";
import { Cta } from "@/components/cta";
import copyEditingProofreadingServicesCover from "@/public/copy-editing-proofreading-services-cover.jpg";

export default function CopyEditingProofreadingServices() {
  return (
    <Container title="Copy Editing / Proofreading Services | Endure Consulting">
      <Layout hasContactUs>
        <HeaderWithCoverImage
          headline="Copy Editing / Proofreading Services"
          coverImage={{
            src: copyEditingProofreadingServicesCover,
            alt: "keyboard image",
            objectPosition: "top",
          }}
        >
          <p className="mt-6">How do you want to show up?</p>
          <p className="mt-6">
            Brand and reputation are key to establishing credibility and trust.
            Regardless of the type of medium, we ensure your content will leave
            your audience engaged and impressed!
          </p>
        </HeaderWithCoverImage>
        <div className="flex justify-center">
          <div className="max-w-xl pt-16 px-4 sm:pt-20 sm:px-6 lg:px-8">
            <div className="text-3xl font-extrabold text-center tracking-tight text-gray-800 sm:text-4xl">
              How We Will Serve You…
            </div>
            <ul className="mt-3 ml-5 sm:ml-0 list-circle">
              <li>
                Ensure all material has correct grammar, punctuation, and
                spelling.
              </li>
              <li>Ensure consistencies in formatting and styling.</li>
              <li>
                Write and rewrite content where needed to achieve more clear and
                concise phrasing/messaging.
              </li>
              <li>
                Write and rewrite content where needed to ensure message tone is
                consistent throughout and in alignment with intended target
                audience.
              </li>
              <li>
                Arrange and rearrange content to ensure better ‘flow’ and more
                visual appeal for intended target audience.
              </li>
            </ul>
          </div>
        </div>
        <Features>
          <Features.Item>
            Advanced Education (graduate student dissertations, instructor
            lesson plans)
          </Features.Item>
          <Features.Item>
            eLearning (K-12 & HigherEd curriculum, adult/professional learning)
          </Features.Item>
          <Features.Item>Cover Letter and Resume Writing</Features.Item>
          <Features.Item>Social Media & Blog Posts</Features.Item>
          <Features.Item>Internet-Published Articles</Features.Item>
          <Features.Item>eNewsletters & Press Releases</Features.Item>
          <Features.Item>Technology (technical writing/editing)</Features.Item>
          <Features.Item>
            Business (executive/C-level presentations & communication pieces)
          </Features.Item>
          <Features.Item>Books (non-fiction)</Features.Item>
        </Features>
        <Cta>
          <Cta.Paragraph>
            We would love to earn the opportunity to speak with you — and LISTEN
            TO YOU. If you are interested in getting acquainted to discuss your
            project(s), you can fill out the form below to schedule a free
            &apos;discovery&apos; meeting (via phone or video chat). We will
            respond to your inquiry within 12 hours. Thank you!
          </Cta.Paragraph>
        </Cta>
      </Layout>
    </Container>
  );
}
