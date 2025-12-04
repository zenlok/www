import type { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className = "",
}) => (
  <div
    className={`bg-black border border-zinc-800 ${className}`}
    style={{ borderRadius: 0 }}
  >
    {children}
  </div>
);

export const CardHeader: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className = "" }) => (
  <div
    className={`p-6 flex flex-col space-y-1.5 border-b border-zinc-800/50 ${className}`}
  >
    {children}
  </div>
);

export const CardTitle: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className = "",
}) => (
  <h3
    className={`font-sans font-semibold leading-none tracking-tight text-lg text-white ${className}`}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className = "" }) => (
  <p className={`text-sm text-zinc-500 mt-2 ${className}`}>{children}</p>
);

export const CardContent: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

export const CardFooter: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className = "" }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>
);
