import { EyeOff, Zap } from "lucide-react";
import { TvlChart } from "@/components/ChartComponents";
import { GridSection } from "@/components/GridSection";
import { SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function Lending() {
  return (
    <GridSection className="grid grid-cols-1 lg:grid-cols-2 bg-black text-white">
      <div className="bg-zinc-900 p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-800 order-2 lg:order-1">
        <div className="relative w-full aspect-square max-w-md mx-auto border border-zinc-800 bg-dot-grid-sm p-8 flex items-center justify-center hover:border-zinc-600 transition-colors duration-500">
          <div className="relative z-10 text-center w-full">
            <div className="text-xs font-mono text-zinc-500 uppercase mb-2">
              Total Value Locked
            </div>
            <div className="text-4xl lg:text-5xl font-bold font-mono mb-8 text-white tracking-tight">
              $142,829,102
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-black border border-zinc-800 p-4">
                <div className="text-[10px] text-zinc-500 uppercase mb-1">
                  Supply APY
                </div>
                <div className="text-xl text-white font-mono">8.2%</div>
              </div>
              <div className="bg-black border border-zinc-800 p-4">
                <div className="text-[10px] text-zinc-500 uppercase mb-1">
                  Borrow APY
                </div>
                <div className="text-xl text-zinc-400 font-mono">3.1%</div>
              </div>
            </div>
            <div className="mt-8 opacity-80 hover:opacity-100 transition-opacity">
              <TvlChart />
            </div>
          </div>
        </div>
      </div>

      <div className="p-12 lg:p-20 order-1 lg:order-2 transition-colors hover:bg-zinc-900/20">
        <SectionLabel number="02" text="Shielded Lending" />
        <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-6 text-white">
          Borrow <br />
          Without Exposure.
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
          Access liquidity against your crypto assets without revealing your
          positions to predatory liquidators. Zenlok uses Multi-Party
          Computation (MPC) to secure collateral.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-transparent border-zinc-800 hover:border-white transition-colors group">
            <CardHeader>
              <Zap className="w-6 h-6 mb-2 text-white group-hover:text-yellow-400 transition-colors" />
              <CardTitle className="text-white">Flash Loan Resistant</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-zinc-500">
              Oracles utilize time-weighted averages to prevent manipulation.
            </CardContent>
          </Card>
          <Card className="bg-transparent border-zinc-800 hover:border-white transition-colors group">
            <CardHeader>
              <EyeOff className="w-6 h-6 mb-2 text-white group-hover:text-purple-400 transition-colors" />
              <CardTitle className="text-white">Private Liquidations</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-zinc-500">
              Liquidations occur in a dark pool to prevent slippage cascades.
            </CardContent>
          </Card>
        </div>
        <Button variant="tech" className="mt-10">
          Enter Lending Market
        </Button>
      </div>
    </GridSection>
  );
}
