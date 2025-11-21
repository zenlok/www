import { Activity } from "lucide-react";
import { StreamingChart } from "@/components/ChartComponents";
import { GridSection } from "@/components/GridSection";
import { SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/ui/Button";

export default function TokenOps() {
  return (
    <GridSection className="grid grid-cols-1 lg:grid-cols-2 bg-black text-white">
      <div className="p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-zinc-800 transition-colors hover:bg-zinc-900/20">
        <SectionLabel number="01" text="Payroll & Vesting" />
        <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-6 text-white">
          Private <br />
          Token Streams.
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
          Automate salaries and token vesting schedules without broadcasting
          your company's cap table to the world. Recipients can withdraw funds
          discreetly using stealth addresses.
        </p>

        <ul className="space-y-4 font-mono text-sm">
          <li className="flex items-center gap-4 text-zinc-300">
            <div className="w-4 h-4 border border-zinc-600 flex items-center justify-center text-[10px]">
              +
            </div>
            Programmable unlocking schedules
          </li>
          <li className="flex items-center gap-4 text-zinc-300">
            <div className="w-4 h-4 border border-zinc-600 flex items-center justify-center text-[10px]">
              +
            </div>
            Zero-Knowledge payment proofs
          </li>
          <li className="flex items-center gap-4 text-zinc-300">
            <div className="w-4 h-4 border border-zinc-600 flex items-center justify-center text-[10px]">
              +
            </div>
            Multi-sig treasury integration
          </li>
        </ul>

        <Button variant="tech" className="mt-10">
          Explore Streaming
        </Button>
      </div>

      <div className="bg-zinc-900 p-12 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <Activity className="w-32 h-32 text-zinc-800" />
        </div>
        <div className="border border-zinc-700 bg-zinc-950 p-6 relative z-10 shadow-2xl hover:-translate-y-1 transition-transform duration-500">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-mono uppercase text-sm text-zinc-400">
              Vesting Contract #8291
            </h3>
            <div className="px-2 py-1 bg-white text-black text-xs font-bold font-mono">
              ACTIVE
            </div>
          </div>
          <div className="opacity-90">
            <StreamingChart />
          </div>
          <div className="grid grid-cols-3 gap-px bg-zinc-800 mt-8 border border-zinc-800">
            <div className="bg-black p-4 text-center">
              <div className="text-[10px] text-zinc-500 uppercase">Cliff</div>
              <div className="text-white font-mono">6 Mo</div>
            </div>
            <div className="bg-black p-4 text-center">
              <div className="text-[10px] text-zinc-500 uppercase">
                Duration
              </div>
              <div className="text-white font-mono">24 Mo</div>
            </div>
            <div className="bg-black p-4 text-center">
              <div className="text-[10px] text-zinc-500 uppercase">Freq</div>
              <div className="text-white font-mono">Sec</div>
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
