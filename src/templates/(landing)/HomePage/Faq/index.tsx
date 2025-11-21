import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { GridSection } from "@/components/GridSection";
import { SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/ui/Button";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      a: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      q: "Curabitur pretium tincidunt lacus nulla gravida orci a odio?",
      a: "Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.",
    },
    {
      q: "Donec porta diam eu massa quisque diam lorem interdum vitae?",
      a: "Dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    },
    {
      q: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh?",
      a: "Ut pharetra sit amet aliquam id diam. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus.",
    },
    {
      q: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor?",
      a: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    },
    {
      q: "Nulla sed odio sit amet nibh vulputate cursus a sit amet mauris?",
      a: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    },
  ];

  return (
    <GridSection className="grid grid-cols-1 lg:grid-cols-2 bg-black border-b border-zinc-800">
      <div className="p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-zinc-800 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-stripes opacity-20 pointer-events-none" />
        <SectionLabel number="06" text="FAQ" />
        <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tighter mb-8 text-white relative z-10">
          Protocol <br /> Knowledge.
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed mb-12 relative z-10">
          Everything you need to know about privacy, compliance, and
          architecture on Zenlok.
        </p>
        <div className="p-6 border border-zinc-800 bg-black relative z-10">
          <div className="flex items-center gap-3 mb-2 text-white font-bold">
            <div className="w-2 h-2 bg-green-500 animate-pulse" />
            Live Support
          </div>
          <p className="text-zinc-500 text-sm mb-4">
            Need more technical details? Join our developer discord.
          </p>
          <Button size="sm" variant="outline" className="w-full">
            Join Discord
          </Button>
        </div>
      </div>

      <div className="bg-black">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`border-b border-zinc-800 last:border-b-0 transition-colors ${openFaq === i ? "bg-zinc-900/30" : ""}`}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between p-8 text-left group hover:bg-zinc-900/50 transition-colors"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <span
                className={`text-xl font-bold transition-colors pr-8 ${openFaq === i ? "text-white" : "text-zinc-300 group-hover:text-white"}`}
              >
                {faq.q}
              </span>
              <div
                className={`w-8 h-8 flex items-center justify-center border transition-colors shrink-0 ${openFaq === i ? "border-white bg-white text-black" : "border-zinc-700 text-zinc-400 group-hover:border-white group-hover:text-white"}`}
              >
                {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="p-8 pt-0 text-zinc-400 leading-relaxed max-w-2xl">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </GridSection>
  );
}
