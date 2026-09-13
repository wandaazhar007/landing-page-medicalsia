import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

type Variant = "primary" | "ghost";
type Size = "md" | "sm";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  children: ReactNode;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
};

type NativeButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

function classNames(variant: Variant, size: Size, block: boolean | undefined, extra?: string) {
  return [
    styles.btn,
    variant === "primary" ? styles.primary : styles.ghost,
    size === "sm" ? styles.sm : "",
    block ? styles.block : "",
    extra ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function LinkButton({ href, variant = "primary", size = "md", block, children, className }: LinkButtonProps) {
  return (
    <Link href={href} className={classNames(variant, size, block, className)}>
      {children}
    </Link>
  );
}

export default function Button({
  variant = "primary",
  size = "md",
  block,
  children,
  className,
  ...rest
}: NativeButtonProps) {
  return (
    <button className={classNames(variant, size, block, className)} {...rest}>
      {children}
    </button>
  );
}
