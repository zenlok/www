export const Switch = ({
  checked,
  onCheckedChange,
  className = "",
  size = "md",
}: {
  checked: boolean;
  onCheckedChange: (c: boolean) => void;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
}) => {
  const sizes = {
    xs: {
      switch: "h-3 w-6",
      thumb: "h-2 w-2",
      translate: "translate-x-3",
    },
    sm: {
      switch: "h-4 w-7",
      thumb: "h-3 w-3",
      translate: "translate-x-3",
    },
    md: {
      switch: "h-6 w-11",
      thumb: "h-5 w-5",
      translate: "translate-x-5",
    },
    lg: {
      switch: "h-8 w-14",
      thumb: "h-7 w-7",
      translate: "translate-x-6",
    },
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={`peer inline-flex shrink-0 cursor-pointer items-center border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
        sizes[size].switch
      } ${checked ? "bg-white" : "bg-zinc-800"} ${className}`}
    >
      <span
        className={`pointer-events-none block bg-black shadow-lg ring-0 transition-transform ${
          sizes[size].thumb
        } ${checked ? sizes[size].translate : "translate-x-0"}`}
      />
    </button>
  );
};
