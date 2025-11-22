import { ArrowUpRight, Percent } from "lucide-react";
import { GridSection } from "@/components/GridSection";
import { SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function Trade() {
  return (
    <GridSection className="grid grid-cols-1 lg:grid-cols-2 bg-black text-white">
      <div className="p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-zinc-800 transition-colors hover:bg-zinc-900/20">
        <SectionLabel number="03" text="Private Swaps" />
        <div className="mb-6">
          <StatusBadge status="planned" />
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-6 text-white">
          Zero Slippage <br /> Dark Pool.
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
          Execute large orders without moving the market. Our matching engine
          pairs orders off-chain and settles on-chain with zero-knowledge
          proofs.
        </p>
        <ul className="space-y-6 text-zinc-300">
          <li className="flex items-start gap-4">
            <div className="mt-1">
              <ArrowUpRight size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white">
                Hidden Order Book
              </h4>
              <p className="text-zinc-500 text-sm">
                Orders are matched cryptographically; no one can see the depth.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="mt-1">
              <Percent size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white">Fair Execution</h4>
              <p className="text-zinc-500 text-sm">
                Uniform clearing prices for all participants in a block.
              </p>
            </div>
          </li>
        </ul>
        <Button variant="tech" className="mt-10">
          Start Trading
        </Button>
      </div>

      <div className="bg-zinc-950 p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-dither-dense bg-size-[16px_16px]"></div>
        <div className="relative z-10 bg-black border border-zinc-800 p-6 shadow-xl">
          <div className="flex justify-between mb-4 border-b border-zinc-800 pb-4">
            <span className="font-mono font-bold text-white">SOL / USDC</span>
            <span className="font-mono text-zinc-500">Order Book (Hidden)</span>
          </div>
          <div className="space-y-1 font-mono text-xs relative">
            <div className="absolute inset-0 bg-black/80 z-20 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="border border-white/20 bg-black px-4 py-2 text-white uppercase tracking-widest text-[10px] animate-pulse">
                View Key Required
              </div>
            </div>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="flex justify-between py-1 relative group hover:bg-zinc-900"
              >
                <div
                  className={`absolute inset-y-0 right-0 opacity-20 ${i < 4 ? "bg-red-900" : "bg-green-900"}`}
                  style={{ width: `${Math.random() * 100}%` }}
                ></div>
                <span className="text-zinc-500 relative z-10">
                  0x{Math.random().toString(16).substr(2, 8)}...
                </span>
                <span className="relative z-10 font-bold blur-[3px] group-hover:blur-sm transition-all select-none text-white">
                  148.{Math.floor(Math.random() * 99)}
                </span>
                <span className="relative z-10 text-zinc-600 blur-[3px] group-hover:blur-sm transition-all select-none">
                  {Math.floor(Math.random() * 1000)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-zinc-800 text-center">
            <span className="text-[10px] uppercase tracking-widest text-green-500 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Matching Engine Active
            </span>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
