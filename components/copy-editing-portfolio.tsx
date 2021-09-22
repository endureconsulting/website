import { useState } from "react";
import Image from "next/image";

import { LogoCloud } from "@/components/logo-cloud";
import { SecurityStudioLogo } from "@/components/svg/security-studio-logo";
import { ProsperStackLogo } from "@/components/svg/prosper-stack-logo";
import phoneLiveStreamingLogo from "@/public/client-logos/phone-live-streaming.png";
import absoluteDevelopmentLogo from "@/public/client-logos/absolute-development.png";
import justinPetersMinistriesLogo from "@/public/client-logos/justin-peters-ministries.png";
import wisdomHouseBooksLogo from "@/public/client-logos/wisdom-house-books.png";
import { Modal } from "@/components/modal";
import { Portfolio } from "@/components/portfolio";
import { CloudSvg } from "@/components/svg/cloud-svg";
import { BookOpenCoverSvg } from "@/components/svg/book-open-cover-svg";
import { FileCertificateSvg } from "@/components/svg/file-certificate-svg";

export const CopyEditingPortfolio = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <LogoCloud
        title="Who We Are Serving…"
        triggerText="See Work Examples"
        handleTriggerClick={() => {
          setOpen(true);
        }}
      >
        <LogoCloud.Client>
          <SecurityStudioLogo className="h-8 text-brand-gradient" />
        </LogoCloud.Client>
        <LogoCloud.Client>
          <ProsperStackLogo className="h-8 text-brand-gradient" />
        </LogoCloud.Client>
        <LogoCloud.Client>
          <Image
            src={phoneLiveStreamingLogo}
            alt="PhoneLiveStreaming"
            width={254.65}
            height={40}
          />
        </LogoCloud.Client>
        <LogoCloud.Client>
          <Image
            src={absoluteDevelopmentLogo}
            alt="Absolute Development"
            width={123.81}
            height={40}
          />
        </LogoCloud.Client>
        <LogoCloud.Client>
          <Image
            src={justinPetersMinistriesLogo}
            alt="Justin Peters Ministries"
            width={161.19}
            height={40}
          />
        </LogoCloud.Client>
        <LogoCloud.Client>
          <Image
            src={wisdomHouseBooksLogo}
            alt="Wisdom House Books"
            width={242.57}
            height={30}
          />
        </LogoCloud.Client>
      </LogoCloud>
      <Modal open={open} setOpen={setOpen}>
        <Portfolio>
          <Portfolio.Project
            title="ProsperStack – Linkedin Content"
            href="/work-examples/ProsperStack_ContentPosts.pdf"
            IconComponent={CloudSvg}
          >
            Copy edited/proofread ProsperStack’s Linkedin content posts. For the
            months of July and August 2021, took ownership of content calendar.
          </Portfolio.Project>
          <Portfolio.Project
            title="Justin Peters Ministries – Mini-Book"
            IconComponent={BookOpenCoverSvg}
          >
            Sole copy editor/proofreader for mini-book entitled “Santa Pause,”
            authored by Justin Peters.
          </Portfolio.Project>
          <Portfolio.Project
            title="PhoneLiveStreaming – Website Content"
            href="https://phonelivestreaming.com"
            IconComponent={CloudSvg}
          >
            Sole copy editor/proofreader for phonelivestreaming.com website
            copy. Changes were deployed July 29, 2021.
          </Portfolio.Project>
          <Portfolio.Project
            title="Absolute Development – Website Content"
            href="https://www.absolutedevelopment.com"
            IconComponent={CloudSvg}
          >
            Sole copy editor/proofreader for absolutedevelopment.com website
            copy. Changes were deployed July 30, 2021.
          </Portfolio.Project>
          <Portfolio.Project
            title="University of MN – Dissertation Project"
            href="https://psyarxiv.com/dj5en"
            IconComponent={FileCertificateSvg}
          >
            Copy edited/proofread a University of Minnesota Graduate School
            dissertation that was published in Collabra: Psychology, a journal
            dedicated to improving psychological science
            (https://online.ucpress.edu/collabra).
          </Portfolio.Project>
          <Portfolio.Project
            title="Wisdom House Books – Books/Manuscripts"
            IconComponent={BookOpenCoverSvg}
          >
            Copy editing/proofreading several books and manuscripts across
            different genres.
          </Portfolio.Project>
        </Portfolio>
      </Modal>
    </>
  );
};
