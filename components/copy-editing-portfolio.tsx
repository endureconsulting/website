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
        <Portfolio />
      </Modal>
    </>
  );
};
