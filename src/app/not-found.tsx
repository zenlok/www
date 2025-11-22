import { FileQuestion } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full" />
          <FileQuestion className="w-24 h-24 text-zinc-800 relative z-10" />
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-white mix-blend-overlay opacity-50 select-none">
            404
          </h1>
        </div>

        <div className="space-y-2 relative z-10">
          <h2 className="text-2xl font-mono uppercase tracking-widest">
            Page Not Found
          </h2>
          <p className="text-zinc-400 text-sm">
            The coordinates you are looking for do not exist in this sector.
          </p>
        </div>

        <div className="flex justify-center relative z-10">
          <Link href="/">
            <Button variant="tech">Return to Base</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
