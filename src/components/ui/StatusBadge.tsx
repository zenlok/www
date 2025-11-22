export type StatusType =
  | "planned"
  | "in-development"
  | "testnet"
  | "mainnet"
  | "live"
  | "beta";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusConfig: Record<
  StatusType,
  { label: string; color: string; dotColor: string }
> = {
  planned: {
    label: "Planned",
    color: "text-zinc-500 border-zinc-800 bg-zinc-900/50",
    dotColor: "bg-zinc-500",
  },
  "in-development": {
    label: "In Dev",
    color: "text-blue-400 border-blue-900/30 bg-blue-900/10",
    dotColor: "bg-blue-400",
  },
  testnet: {
    label: "Testnet",
    color: "text-yellow-400 border-yellow-900/30 bg-yellow-900/10",
    dotColor: "bg-yellow-400",
  },
  mainnet: {
    label: "Mainnet",
    color: "text-green-400 border-green-900/30 bg-green-900/10",
    dotColor: "bg-green-400",
  },
  live: {
    label: "Live",
    color: "text-green-400 border-green-900/30 bg-green-900/10",
    dotColor: "bg-green-400",
  },
  beta: {
    label: "Beta",
    color: "text-purple-400 border-purple-900/30 bg-purple-900/10",
    dotColor: "bg-purple-400",
  },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  className = "",
}) => {
  const config = statusConfig[status];

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 border text-[10px] font-mono uppercase tracking-wider ${config.color} ${className}`}
    >
      <div className={`w-1 h-1 ${config.dotColor} animate-pulse`} />
      {config.label}
    </div>
  );
};
