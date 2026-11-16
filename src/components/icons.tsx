import type { SVGProps, ComponentType } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Base>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </Base>
  );
}

export function Download(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
    </Base>
  );
}

export function Mail(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Base>
  );
}

export function MapPin(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Base>
  );
}

export function Phone(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
    </Base>
  );
}

export function Menu(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Base>
  );
}

export function Close(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Base>
  );
}

export function Server(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" strokeWidth={2.6} />
    </Base>
  );
}

export function Cloud(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M17.5 19a4.5 4.5 0 0 0 .4-9 6 6 0 0 0-11.6 1.6A3.7 3.7 0 0 0 7 19h10.5Z" />
    </Base>
  );
}

export function Database(props: IconProps) {
  return (
    <Base {...props}>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
      <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </Base>
  );
}

export function Layout(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </Base>
  );
}

export function GraduationCap(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m3 9 9-4 9 4-9 4-9-4Z" />
      <path d="M7 11v5c0 1.7 2.2 3 5 3s5-1.3 5-3v-5" />
      <path d="M21 9v5" />
    </Base>
  );
}

export function Briefcase(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </Base>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m12 3 1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
    </Base>
  );
}

export function Check(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m5 12 4.5 4.5L19 7" />
    </Base>
  );
}

export function Layers(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </Base>
  );
}

export function Shield(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Base>
  );
}

export function Code(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 5l-4 14" />
    </Base>
  );
}

export function Github(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
      {...props}
    >
      <path d="M12 .5C5.7.5.5 5.8.5 12.2c0 5.2 3.3 9.6 7.9 11.1.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.6-3.9-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6a11.7 11.7 0 0 0 7.9-11.1C23.5 5.8 18.3.5 12 .5Z" />
    </svg>
  );
}

export function Linkedin(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
      {...props}
    >
      <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.2V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.7 0 4.4 2.4 4.4 5.6v6.1ZM5.2 7.3a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7 20.4H3.3V9H7v11.4Z" />
    </svg>
  );
}

export type IconName =
  | "server"
  | "cloud"
  | "sparkles"
  | "database"
  | "layout"
  | "layers"
  | "shield"
  | "code";

const iconMap: Record<IconName, ComponentType<IconProps>> = {
  server: Server,
  cloud: Cloud,
  sparkles: Sparkles,
  database: Database,
  layout: Layout,
  layers: Layers,
  shield: Shield,
  code: Code,
};

export function Icon({ name, ...props }: IconProps & { name: IconName }) {
  const Cmp = iconMap[name];
  return <Cmp {...props} />;
}
