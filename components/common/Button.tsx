import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-primary/40",

        // Sizes
        {
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },

        // Variants
        {
          // Primary
          "bg-gradient-to-r from-violet-600 to-sky-500 text-white shadow-lg hover:scale-105 hover:shadow-[0_0_35px_rgba(124,58,237,0.45)] active:scale-95":
            variant === "primary",

          // Secondary
          "bg-surface text-white border border-white/10 hover:bg-surface-light hover:border-violet-500/40":
            variant === "secondary",

          // Outline
          "border border-white/20 bg-transparent text-white hover:border-violet-500 hover:bg-white/5":
            variant === "outline",

          // Ghost
          "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20":
            variant === "ghost",
        },

        // Disabled
        {
          "opacity-60 cursor-not-allowed hover:scale-100 hover:shadow-none":
            disabled || loading,
        },

        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          Loading...
        </>
      ) : (
        <>
          {leftIcon && (
            <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
              {leftIcon}
            </span>
          )}

          <span>{children}</span>

          {rightIcon && (
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              {rightIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
}