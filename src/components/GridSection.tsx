export const GridSection = ({
  children,
  className = "",
  noBorderBottom = false,
}: {
  children: React.ReactNode;
  className?: string;
  noBorderBottom?: boolean;
}) => (
  <div
    className={`border-x border-zinc-800 mx-auto max-w-[1600px] relative ${!noBorderBottom ? "border-b border-zinc-800" : ""} ${className}`}
  >
    {children}
  </div>
);
