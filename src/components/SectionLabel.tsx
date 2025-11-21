export const SectionLabel = ({
  number,
  text,
  dark = false,
}: {
  number: string;
  text: string;
  dark?: boolean;
}) => (
  <div
    className={`flex items-center gap-3 mb-8 border-l-2 ${dark ? "border-black text-black" : "border-white text-white"} pl-4`}
  >
    <span className={`font-mono text-xs font-bold`}>{number}</span>
    <span
      className={`font-mono text-xs uppercase tracking-[0.2em] ${dark ? "opacity-100" : "opacity-60"}`}
    >
      {text}
    </span>
  </div>
);
