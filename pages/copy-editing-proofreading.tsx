import Image from "next/image";

import { Container } from "@/components/container";
import { Layout } from "@/components/layout";
import { Features } from "@/components/features";
import copyEditingProofreadingServicesCover from "@/public/copy-editing-proofreading-services-cover.jpg";

export default function CopyEditingProofreadingServices() {
  return (
    <Container title="Copy Editing / Proofreading Services | Endure Consulting">
      <Layout>
        <div className="relative bg-brand mt-12 sm:mt-16">
          <div className="absolute inset-0">
            <Image
              src={copyEditingProofreadingServicesCover}
              alt="colored pencil lined up on top of white surface photo"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
            <div
              className="absolute inset-0 bg-brand mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative flex flex-col items-center mx-auto max-w-3xl py-24 px-4 text-center sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Copy Editing / Proofreading Services
            </h1>
            <div className="text-xl text-gray-100 max-w-2xl">
              <p className="mt-6">How do you want to show up?</p>
              <p className="mt-6">
                Brand and reputation are key to establishing credibility and
                trust. Regardless of the type of medium, we ensure your content
                will leave your audience engaged and impressed!
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-xl pt-16 px-4 sm:pt-20 sm:px-6 lg:px-8">
            <div className="text-3xl font-extrabold text-center tracking-tight text-gray-800 sm:text-4xl">
              How We Will Serve You…
            </div>
            <ul className="mt-3 list-disc">
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
        <Features />
        <div className="bg-brand-dark shadow">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-50 max-w-2xl">
              We would love to earn the opportunity to speak with you — and
              LISTEN TO YOU. If you are interested in getting acquainted to
              discuss your project(s), you can fill out the form below to
              schedule a free &apos;discovery&apos; meeting (via phone or video
              chat). We will respond to your inquiry within 12 hours. Thank you!
            </p>
          </div>
        </div>
      </Layout>
    </Container>
  );
}
