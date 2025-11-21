import { Code2, Terminal } from "lucide-react";
import { GridSection } from "@/components/GridSection";
import { SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/ui/Button";

export default function Developer() {
  return (
    <GridSection className="grid grid-cols-1 lg:grid-cols-2 bg-black text-white">
      <div className="p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-center">
        <SectionLabel number="05" text="Developers" />
        <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-6 text-white">
          Built for Builders
        </h2>
        <p className="text-zinc-400 mb-8">
          Integrate privacy into your dApp with just a few lines of code. Our
          SDK handles the complex proof generation and key management.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 transition-colors cursor-pointer group">
            <Terminal className="text-white group-hover:text-green-400 transition-colors" />
            <code className="text-sm font-mono text-zinc-300 group-hover:text-white transition-colors">
              npm install @zenlok/sdk
            </code>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="flex-1">
              Read Docs
            </Button>
            <Button variant="outline" className="flex-1">
              View Github
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[#050505] p-8 font-mono text-xs md:text-sm overflow-x-auto flex items-center relative">
        <div className="absolute top-0 right-0 p-2 opacity-50">
          <Code2 size={48} className="text-zinc-800" />
        </div>
        <div className="w-full relative z-10">
          <div className="text-zinc-500 mb-4">
            &#47;&#47; Initialize private transfer
          </div>
          <div className="space-y-2">
            <div className="text-purple-400">
              const <span className="text-blue-300">client</span> ={" "}
              <span className="text-yellow-300">new</span> ZenlokSDK(
              <span className="text-green-300">config</span>);
            </div>
            <br />
            <div className="text-zinc-500">
              &#47;&#47; Create zero-knowledge proof
            </div>
            <div className="text-purple-400">
              const <span className="text-blue-300">proof</span> ={" "}
              <span className="text-yellow-300">await</span> client.prove(
              {"{"}
            </div>
            <div className="pl-4 text-blue-300">
              token: <span className="text-green-300">'USDC'</span>,
            </div>
            <div className="pl-4 text-blue-300">
              amount: <span className="text-orange-300">1000</span>,
            </div>
            <div className="pl-4 text-blue-300">
              recipient: <span className="text-green-300">'0x...'</span>
            </div>
            <div className="text-purple-400">{"}"});</div>
            <br />
            <div className="text-zinc-500">
              &#47;&#47; Broadcast via relayer
            </div>
            <div className="text-purple-400">
              const <span className="text-blue-300">tx</span> ={" "}
              <span className="text-yellow-300">await</span>{" "}
              client.relay(proof);
            </div>
            <div className="text-purple-400">
              console.<span className="text-yellow-300">log</span>(
              <span className="text-green-300">'Tx Hash:'</span>, tx.hash);
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
