import { MouseEventHandler, PropsWithChildren } from "react";

export const Cta = ({ children }: PropsWithChildren<{}>) => (
  <div className="bg-brand-dark shadow">
    <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      {children}
    </div>
  </div>
);

Cta.Title = ({ children }: PropsWithChildren<{}>) => (
  <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
    {children}
  </h2>
);

// @ts-ignore
Cta.Title.displayName = "Cta.Title";

Cta.Paragraph = ({ children }: PropsWithChildren<{}>) => (
  <p className="leading-6 text-brand-gradient">{children}</p>
);

// @ts-ignore
Cta.Paragraph.displayName = "Cta.Paragraph";

interface CtaTriggerProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

Cta.Trigger = ({ children, onClick }: PropsWithChildren<CtaTriggerProps>) => (
  <button
    className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-brand-dark bg-white hover:bg-brand-gradient focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white"
    onClick={onClick}
  >
    {children}
  </button>
);

// @ts-ignore
Cta.Trigger.displayName = "Cta.Trigger";
