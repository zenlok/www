import { Cpu as Chip, Network, Shield } from "lucide-react";
import { GridSection } from "@/components/GridSection";

export default function TechStack() {
  return (
    <GridSection className="py-32 px-6 relative overflow-hidden bg-black border-t border-zinc-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block border border-zinc-800 px-4 py-2 mb-8 bg-zinc-900/30 backdrop-blur-sm">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
            Powered by Solana & Arcium
          </span>
        </div>
        <h2 className="text-5xl lg:text-8xl font-bold tracking-tighter uppercase mb-12 text-white">
          Confidential <br />
          <span className="text-outline">Computing.</span>
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-px bg-zinc-800 border border-zinc-800 relative z-10">
        {[
          {
            title: "MXEs",
            desc: "Multi-Party Execution Environments ensure data remains encrypted during processing, enabling true private smart contracts on Solana.",
            icon: Chip,
          },
          {
            title: "Parallel Computing",
            desc: "Arcium's parallel processing architecture allows Zenlok to scale linearly with user demand without congestion or high fees.",
            icon: Network,
          },
          {
            title: "Verifiable Privacy",
            desc: "Cryptographic proofs guarantee that computations were performed correctly without ever revealing the underlying input data.",
            icon: Shield,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-black p-10 hover:bg-zinc-950 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            {/* Corner Accents */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-zinc-700 group-hover:border-white transition-colors duration-300"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-zinc-700 group-hover:border-white transition-colors duration-300"></div>

            <div className="absolute inset-0 bg-dot-grid opacity-0 group-hover:opacity-5 transition-opacity"></div>

            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
              <item.icon size={48} strokeWidth={1} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white font-mono">
              {item.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm relative z-10">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </GridSection>
  );
}
