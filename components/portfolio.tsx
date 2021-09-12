import { CloudSvg } from "@/components/svg/cloud-svg";
import { BookOpenCoverSvg } from "@/components/svg/book-open-cover-svg";
import { FileCertificateSvg } from "./svg/file-certificate-svg";

const actions = [
  {
    title: "ProsperStack – Linkedin Content",
    description:
      "Copy editing/proofreading ProsperStack’s Linkedin content posts. Effective July 2021, have taken ownership of content calendar.",
    href: "#",
    icon: CloudSvg,
  },
  {
    title: "Justin Peters Ministries – Mini-Book",
    description:
      "Sole copy editor/proofreader for mini-book entitled “Santa Pause,” authored by Justin Peters. Book published and distributed.",
    href: "#",
    icon: BookOpenCoverSvg,
  },
  {
    title: "PhoneLiveStreaming – Website Content",
    description:
      "Sole copy editor/proofreader for phonelivestreaming.com website copy. Changes were deployed July 29, 2021.",
    href: "#",
    icon: CloudSvg,
  },
  {
    title: "Absolute Development – Website Content",
    description:
      "Sole copy editor/proofreader for absolutedevelopment.com website copy. Changes were deployed July 30, 2021.",
    href: "#",
    icon: CloudSvg,
  },
  {
    title: "University of MN – Dissertation Project",
    description:
      "Proofread a University of Minnesota Graduate School dissertation that was published in Collabra: Psychology, a journal dedicated to improving psychological science (https://online.ucpress.edu/collabra).",
    href: "#",
    icon: FileCertificateSvg,
  },
  {
    title: "Wisdom House Books – Books/Manuscripts",
    description:
      "Copy editing/proofreading several books and manuscripts, spanning across different genres.",
    href: "#",
    icon: BookOpenCoverSvg,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Portfolio = () => (
  <div className="text-left rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
    {actions.map((action, index) => (
      <div
        key={action.title}
        className={classNames(
          index === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
          index === 1 ? "sm:rounded-tr-lg" : "",
          index === actions.length - 2 ? "sm:rounded-bl-lg" : "",
          index === actions.length - 1
            ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
            : "",
          "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-brand-dark"
        )}
      >
        <div className="text-left">
          <span className="rounded-lg inline-flex p-3 ring-4 ring-white bg-brand-gradient text-brand">
            <action.icon className="h-6 w-6" aria-hidden="true" />
          </span>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-medium">
            <a href={action.href} className="focus:outline-none">
              {/* Extend touch target to entire panel */}
              <span className="absolute inset-0" aria-hidden="true" />
              {action.title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{action.description}</p>
        </div>
      </div>
    ))}
  </div>
);
