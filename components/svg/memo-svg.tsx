import { PropsWithClassName } from "@/types/props-with-class-name";

export const MemoSvg = ({ className }: PropsWithClassName) => (
  <svg
    className={className}
    viewBox="0 0 384 512"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    focusable="false"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M264 224h-144C106.8 224 96 234.8 96 248S106.8 272 120 272h144C277.3 272 288 261.3 288 248S277.3 224 264 224zM168 320h-48C106.8 320 96 330.8 96 344s10.75 24 24 24h48c13.25 0 24-10.75 24-24S181.3 320 168 320zM264 128h-144C106.8 128 96 138.8 96 152S106.8 176 120 176h144C277.3 176 288 165.3 288 152S277.3 128 264 128zM320 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V64C384 28.65 355.3 0 320 0zM336 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V64c0-8.822 7.178-16 16-16h256c8.822 0 16 7.178 16 16V448z"
    />
  </svg>
);
