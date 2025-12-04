"use client";

import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "tech"
    | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  href,
  ...props
}) => {
  const baseStyles =
    "font-mono uppercase tracking-wider transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-3 relative overflow-hidden group active:scale-[0.98]";

  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200 border border-white",
    secondary:
      "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800",
    outline:
      "border border-zinc-700 bg-transparent text-zinc-300 hover:border-white hover:text-white hover:bg-white/5",
    ghost: "hover:bg-zinc-900 text-zinc-400 hover:text-white",
    tech: "bg-black border border-zinc-800 text-white hover:border-white hover:bg-zinc-900",
    destructive:
      "bg-red-900/20 text-red-500 border border-red-900/50 hover:bg-red-900/40 hover:border-red-500",
  };

  const sizes = {
    sm: "h-8 px-3 text-[10px]",
    md: "h-11 px-6 text-xs",
    lg: "h-14 px-8 text-sm",
    icon: "h-10 w-10 p-0",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  const commonContent = (
    <>
      {/* Tech Hover Effect Decoration */}
      {variant === "tech" && (
        <>
          {/* Corner brackets */}
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Scanning line effect */}
          <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
        </>
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            {icon}
          </span>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        style={{ borderRadius: 0 }}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {commonContent}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      style={{ borderRadius: 0 }}
      {...props}
    >
      {commonContent}
    </button>
  );
};
