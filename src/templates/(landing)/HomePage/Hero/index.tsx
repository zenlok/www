import { Activity, ArrowRight, Lock } from "lucide-react";
import { GridSection } from "@/components/GridSection";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <GridSection className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 relative overflow-hidden bg-black group">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-grid-lines mask-[linear-gradient(to_bottom,transparent,black)]" />
      </div>

      {/* Left Content */}
      <div className="lg:col-span-8 p-8 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-800 relative z-10">
        <div className="mb-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 px-3 py-1 mb-6 hover:bg-zinc-900 transition-colors cursor-help">
            <span className="w-1.5 h-1.5 bg-orange-500 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              In Development
            </span>
          </div>
          <h1 className="text-7xl lg:text-[8rem] font-bold leading-[0.85] tracking-tighter uppercase mb-8 text-white">
            Privacy <br />
            <span className="text-outline cursor-default inline-block">
              Default.
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-xl leading-relaxed font-light border-l border-zinc-800 pl-6">
            The first privacy-preserving protocol for SPL token streaming and
            zero-knowledge lending. High throughput, sub-second finality, zero
            exposure.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          <Button
            size="lg"
            variant="tech"
            className="h-16 px-10 text-base"
            icon={<ArrowRight size={16} />}
          >
            Launch App
          </Button>
          <Button size="lg" variant="outline" className="h-16 px-10 text-base">
            Read Whitepaper
          </Button>
        </div>
      </div>

      {/* Right Content - Technical Dashboard */}
      <div className="lg:col-span-4 bg-zinc-950 flex flex-col border-t lg:border-t-0">
        <div className="flex-1 border-b border-zinc-800 p-8 flex flex-col justify-between group/card hover:bg-zinc-900/50 transition-colors relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-0 group-hover/card:opacity-10 transition-opacity" />
          <div className="flex justify-between items-start relative z-10">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Net APY
            </div>
            <Activity className="text-zinc-700 group-hover/card:text-white transition-colors" />
          </div>
          <div className="relative z-10">
            <div className="text-5xl font-mono text-white font-light mb-2 tracking-tighter">
              8.42%
            </div>
            <div className="h-1 w-full bg-zinc-900 overflow-hidden">
              <div className="h-full w-[60%] bg-white animate-[shimmer_2s_infinite]" />
            </div>
          </div>
        </div>

        <div className="flex-1 border-b border-zinc-800 p-8 flex flex-col justify-between group/card hover:bg-zinc-900/50 transition-colors relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-0 group-hover/card:opacity-10 transition-opacity" />
          <div className="flex justify-between items-start relative z-10">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Private TVL
            </div>
            <Lock className="text-zinc-700 group-hover/card:text-white transition-colors" />
          </div>
          <div className="relative z-10">
            <div className="text-5xl font-mono text-white font-light mb-2 tracking-tighter">
              $42.9M
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 transition-all duration-500 ${i < 6 ? "bg-zinc-500" : "bg-zinc-800"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 flex flex-col justify-between bg-stripes opacity-50 hover:opacity-100 transition-opacity cursor-crosshair relative">
          <div className="text-center mt-auto mb-auto">
            <div className="text-xs font-mono text-zinc-400 uppercase mb-2">
              Current Epoch
            </div>
            <div className="text-4xl font-mono text-white font-bold tracking-wider">
              520
            </div>
            <div className="text-[10px] font-mono text-zinc-500 mt-2">
              EST. REMAINING: 12H 20M
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
