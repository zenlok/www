import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex h-12 w-full border border-zinc-800 bg-black px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all font-mono text-white hover:border-zinc-700 ${className}`}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
