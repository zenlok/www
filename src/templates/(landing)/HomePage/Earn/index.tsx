import { Coins, LockKeyhole, Repeat } from "lucide-react";
import { VolumeBarChart } from "@/components/ChartComponents";
import { GridSection } from "@/components/GridSection";
import { SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function Earn() {
  return (
    <GridSection className="grid grid-cols-1 lg:grid-cols-2 bg-black border-b border-zinc-800">
      <div className="order-2 lg:order-1 bg-zinc-900/50 p-12 lg:p-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-sm opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent to-black/50 pointer-events-none" />
        <div className="relative z-10 grid grid-cols-2 gap-4">
          <Card className="bg-black border-zinc-800 hover:border-zinc-600 transition-colors">
            <CardHeader className="pb-2">
              <Coins className="text-white w-6 h-6" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-mono text-white font-bold mb-1">
                12.4%
              </div>
              <div className="text-xs text-zinc-500 uppercase">USDC Yield</div>
            </CardContent>
          </Card>
          <Card className="bg-black border-zinc-800 hover:border-zinc-600 transition-colors">
            <CardHeader className="pb-2">
              <Repeat className="text-white w-6 h-6" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-mono text-white font-bold mb-1">
                Auto
              </div>
              <div className="text-xs text-zinc-500 uppercase">Compounding</div>
            </CardContent>
          </Card>
          <Card className="bg-black border-zinc-800 col-span-2 hover:border-zinc-600 transition-colors">
            <CardHeader className="pb-2">
              <LockKeyhole className="text-white w-6 h-6" />
            </CardHeader>
            <CardContent className="flex justify-between items-end">
              <div>
                <div className="text-3xl font-mono text-white font-bold mb-1">
                  $8.2M
                </div>
                <div className="text-xs text-zinc-500 uppercase">
                  Total Shielded Liquidity
                </div>
              </div>
              <div className="h-12 w-24">
                <VolumeBarChart />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="order-1 lg:order-2 p-12 lg:p-24 border-b lg:border-b-0 lg:border-l border-zinc-800 transition-colors hover:bg-zinc-900/20">
        <SectionLabel number="04" text="Shielded Earn" />
        <div className="mb-6">
          <StatusBadge status="planned" />
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-6 text-white">
          Private <br /> Yield.
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Provide liquidity to Zenlok's dark pools and earn yield without
          linking your main wallet to the liquidity provision.
        </p>
        <Button variant="tech" className="mt-10">
          Start Earning
        </Button>
      </div>
    </GridSection>
  );
}
