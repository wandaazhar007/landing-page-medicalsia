// Full spec: docs/10-logo.md — "M" monogram with a notification-dot accent.
type LogoIconProps = {
  variant?: "light" | "dark";
  size?: number;
};

export default function LogoIcon({ variant = "light", size = 36 }: LogoIconProps) {
  const badgeColor = variant === "light" ? "#1E40AF" : "#2563EB";
  const dotColor = variant === "light" ? "#93C5FD" : "#fff";

  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill={badgeColor} />
      <path
        d="M9 26V11l4.5 8L18 11v0M18 11l4.5 8L27 11v15"
        stroke="#fff"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="27" cy="9" r="2.2" fill={dotColor} />
    </svg>
  );
}
