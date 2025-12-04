import React from "react";

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  // biome-ignore lint/a11y/noLabelWithoutControl: ignore label without control
  <label
    ref={ref}
    className={`text-xs font-mono uppercase tracking-wider text-zinc-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block ${className}`}
    {...props}
  />
));
Label.displayName = "Label";
