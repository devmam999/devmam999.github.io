import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function icon(props: IconProps) {
  const { className, ...rest } = props;
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    ...rest,
    className: `h-4 w-4 ${className ?? ""}`,
  };
}

export function CodeBracketsIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M8 6 3 12l5 6M16 6l5 6-5 6" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M12 4v12M7 11l5 5 5-5M5 20h14" />
    </svg>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg {...icon(props)} fill="currentColor" stroke="none">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.17-3.37-1.17-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.9-1.3 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.71 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...icon(props)} fill="currentColor" stroke="none">
      <path d="M6.5 9H4V20h2.5V9zM5.25 4A1.75 1.75 0 1 0 5.25 7.5 1.75 1.75 0 0 0 5.25 4zM20 20h-2.5v-5.6c0-1.8-.64-2.5-1.76-2.5-1.29 0-1.84.97-1.84 2.5V20H11.4s.04-9.9 0-11h2.5v1.7c.5-.9 1.64-1.92 3.36-1.92C19.4 8.78 20 10.7 20 13.6V20z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M4 19V5M4 19h16" />
      <path d="M8 15v-4M12 15V8M16 15v-7" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M4 16V6a2 2 0 0 1 2-2h10" />
    </svg>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3z" />
      <path d="M12 12 20 7.5M12 12v9M12 12 4 7.5" />
    </svg>
  );
}

export function DatabaseIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

export function ToolsIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M14.5 6.5 18 3l3 3-3.5 3.5M10 14l-7 7M15 9l-4 4" />
      <path d="M8 4 4 8l4.5 1.5L14 4.5 12.5 3 8 4z" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M12 3v4M12 17v4M4.9 6.5l2.8 2.8M16.3 14.7l2.8 2.8M3 12h4M17 12h4M4.9 17.5l2.8-2.8M16.3 9.3l2.8-2.8" />
      <circle cx="12" cy="12" r="2.4" />
    </svg>
  );
}

export function CapIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M3 10 12 5l9 5-9 5-9-5z" />
      <path d="M7 12v4.5c2 1.5 8 1.5 10 0V12" />
    </svg>
  );
}

export function StarFourIcon(props: IconProps) {
  return (
    <svg {...icon(props)} className={`h-5 w-5 ${props.className ?? ""}`}>
      <path d="M12 3c.4 3.4 2.6 5.6 6 6-3.4.4-5.6 2.6-6 6-.4-3.4-2.6-5.6-6-6 3.4-.4 5.6-2.6 6-6z" fill="currentColor" stroke="none" />
    </svg>
  );
}
