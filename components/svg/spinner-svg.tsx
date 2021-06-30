import { PropsWithClassName } from "@/types/props-with-class-name";

export const SpinnerSvg = ({ className }: PropsWithClassName) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    focusable="false"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M512 256c0 36.59-7.83 71.34-21.77 102.8c-5.834 13.17-21.64 18.65-34.15 11.5c-10.5-5.996-15.06-18.94-10.12-29.98C457.5 314.6 464 286 464 256c0-107.7-82.26-196.5-187.2-206.1C264.8 47.84 256 37.34 256 25.36c0-14.52 12.8-25.45 27.23-23.92C411.6 15.08 512 124 512 256z"
    />
  </svg>
);