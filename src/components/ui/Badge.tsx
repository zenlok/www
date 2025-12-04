export interface BadgeProps {
  variant?: "default" | "outline" | "secondary" | "success" | "warning";
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  className = "",
  children,
}) => {
  const variants = {
    default: "bg-white text-black hover:bg-zinc-200",
    outline: "text-zinc-400 border border-zinc-700",
    secondary: "bg-zinc-800 text-zinc-300 hover:bg-zinc-700",
    success: "bg-green-900/30 text-green-400 border border-green-900",
    warning: "bg-yellow-900/30 text-yellow-400 border border-yellow-900",
  };
  return (
    <div
      className={`inline-flex items-center px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
};
