export const Separator: React.FC<{
  className?: string;
  orientation?: "horizontal" | "vertical";
}> = ({ className = "", orientation = "horizontal" }) => (
  <div
    className={`shrink-0 bg-zinc-800 ${orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"} ${className}`}
  />
);
