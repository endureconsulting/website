import { PropsWithChildren } from "react";

import { Cta } from "@/components/cta";

interface LogoCloudProps {
  title: string;
  triggerText?: string;
  handleTriggerClick?: () => void;
}

export const LogoCloud = ({
  children,
  title,
  triggerText,
  handleTriggerClick,
}: PropsWithChildren<LogoCloudProps>) => {
  if (triggerText && !handleTriggerClick) {
    throw new Error(
      "Expected handleTriggerClick to be provided when using triggerText"
    );
  }

  return (
    <Cta>
      <Cta.Title>{title}</Cta.Title>
      <div className="mt-6 grid grid-cols-1 gap-0.5 sm:grid-cols-2 md:grid-cols-2 lg:mt-8">
        {children}
      </div>
      {triggerText && (
        <Cta.Trigger onClick={handleTriggerClick}>{triggerText}</Cta.Trigger>
      )}
    </Cta>
  );
};

LogoCloud.Client = ({ children }: PropsWithChildren<{}>) => (
  <div className="col-span-1 flex justify-center py-4">{children}</div>
);

// @ts-ignore
LogoCloud.Client.displayName = "LogoCloud.Client";
