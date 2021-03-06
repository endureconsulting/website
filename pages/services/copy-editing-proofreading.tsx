import { Container } from "@/components/container";
import { Layout } from "@/components/layout";
import { HeaderWithCoverImage } from "@/components/header-with-cover-image";
import { XlLogoBackground } from "@/components/xl-logo-background";
import { Features } from "@/components/features";
import { CopyEditingPortfolio } from "@/components/copy-editing-portfolio";
import { ContactUs } from "@/components/contact-us";
import copyEditingProofreadingServicesCover from "@/public/copy-editing-proofreading-services-cover.jpg";

export default function CopyEditingProofreadingServices() {
  return (
    <Container title="Copy Editing / Proofreading Services | Endure Consulting">
      <Layout>
        <HeaderWithCoverImage
          headline="Copy Editing / Proofreading Services"
          coverImage={{
            src: copyEditingProofreadingServicesCover,
            alt: "keyboard image",
            objectPosition: "top",
          }}
        >
          <p className="mt-4 sm:mt-6">
            Brand and reputation are key to establishing credibility and trust.
            Regardless of the type of medium, we ensure your content will leave
            your audience engaged and impressed!
          </p>
        </HeaderWithCoverImage>
        <XlLogoBackground>
          <div className="grid justify-center">
            <div className="max-w-xl pt-16 px-4 sm:pt-20 sm:px-6 lg:px-8">
              <div className="text-2xl font-extrabold text-center tracking-tight text-gray-800 sm:text-3xl">
                How We Will Serve You…
              </div>
              <ul className="mt-3 ml-5 sm:ml-0 list-circle">
                <li>
                  Ensure all material is free of typos and has correct spelling,
                  grammar and punctuation.
                </li>
                <li>Ensure consistencies in formatting and styling.</li>
                <li>
                  Write and rewrite content where needed to achieve more clear
                  and concise phrasing/messaging.
                </li>
                <li>
                  Write and rewrite content where needed to ensure message tone
                  is consistent throughout and in alignment with intended target
                  audience.
                </li>
                <li>
                  Arrange and rearrange content to ensure better flow and more
                  visual appeal for intended target audience.
                </li>
              </ul>
            </div>
          </div>
          <Features>
            <Features.Item
              bullets={[
                "Websites",
                "Social Media/Blog Posts",
                "Promotional Emails",
                "eNewsletters",
                "Marketing/Advertisements",
                "Internet-Published Articles",
                "Press Releases",
              ]}
            >
              Online Media
            </Features.Item>
            <Features.Item
              bullets={[
                "Sales & Marketing Collateral",
                "Executive/C-Level Presentations & Communication Pieces",
                "IT Technical Writing",
                "Cover Letter & Résumé Writing",
                "Job Descriptions/Postings",
              ]}
            >
              Business & Human Resources
            </Features.Item>
            <Features.Item bullets={["Non-Fiction", "Fiction"]}>
              Books/Manuscripts
            </Features.Item>
            <Features.Item
              bullets={["Dissertations", "Instructor Lesson Plans"]}
            >
              Advanced Education
            </Features.Item>
            <Features.Item
              bullets={["K-12 & HigherEd", "Adult/Professional Learning"]}
            >
              eLearning Curriculum
            </Features.Item>
          </Features>
          <CopyEditingPortfolio />
          <ContactUs />
        </XlLogoBackground>
      </Layout>
    </Container>
  );
}
