import { ReactNode, MouseEventHandler } from "react";

interface Props {
  children: ReactNode;
}

export const Cta = ({ children }: Props) => (
  <div className="bg-brand-dark shadow">
    <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      {children}
    </div>
  </div>
);

Cta.Title = ({ children }: Props) => (
  <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
    {children}
  </h2>
);

Cta.Paragraph = ({ children }: Props) => (
  <p className="mt-4 leading-6 text-brand-gradient sm:text-base">{children}</p>
);

interface CtaTriggerProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

Cta.Trigger = ({ children, onClick }: CtaTriggerProps) => (
  <button
    className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-brand-dark bg-white hover:bg-brand-gradient focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 sm:w-auto"
    onClick={onClick}
  >
    {children}
  </button>
);
