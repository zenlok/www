"use client";

import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Copy,
  Download,
  ExternalLink,
  Lock,
  MoreHorizontal,
} from "lucide-react";
import { useParams } from "next/navigation";
import { StreamingChart } from "@/components/ChartComponents";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { formatStreamData, MOCK_API_RESPONSE } from "@/lib/utils/stream";

const STREAMS = MOCK_API_RESPONSE.data.items.map(formatStreamData);

export default function StreamDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const selectedStream = STREAMS.find((s) => s.id === id);

  if (!selectedStream) {
    return (
      <div className="flex items-center justify-center h-[50vh] text-zinc-500">
        Stream not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in zoom-in-95 duration-500">
      <div className="mb-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold uppercase tracking-tight text-white">
                Stream #{selectedStream.id}
              </h1>
              <Badge
                variant={
                  selectedStream.type === "encrypted" ? "success" : "outline"
                }
              >
                {selectedStream.type === "encrypted" ? "Shielded" : "Public"}
              </Badge>
              <Badge variant="secondary">{selectedStream.status}</Badge>
            </div>
            <div className="flex items-center gap-4 text-sm font-mono text-zinc-500">
              <span className="flex items-center gap-1">
                <Calendar size={12} /> Started: {selectedStream.start}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} /> Ends: {selectedStream.end}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ExternalLink size={16} />
            </Button>
            <Button variant="outline" size="icon">
              <MoreHorizontal size={16} />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Chart & Actions */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Vesting Progress</span>
                <span className="text-sm font-normal font-mono text-zinc-400">
                  {selectedStream.token}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedStream.isEncrypted ? (
                <div className="h-[300px] w-full bg-zinc-900/20 border border-zinc-800/50 p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-4 text-zinc-500">
                    <Lock size={24} />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Stream Encrypted
                  </h3>
                  <p className="text-sm text-zinc-500 max-w-xs">
                    This stream is encrypted. You need the decryption key to
                    view the details.
                  </p>
                </div>
              ) : (
                <div className="h-[300px] w-full bg-zinc-900/20 border border-zinc-800/50 p-4 relative">
                  <StreamingChart />
                </div>
              )}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-zinc-950 border border-zinc-800">
                  <div className="text-[10px] text-zinc-500 uppercase mb-1">
                    Total Allocated
                  </div>
                  <div className="text-xl font-mono text-white">
                    {selectedStream.isEncrypted
                      ? "<encrypted>"
                      : selectedStream.amount.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                  </div>
                </div>
                <div className="p-4 bg-zinc-950 border border-zinc-800">
                  <div className="text-[10px] text-zinc-500 uppercase mb-1">
                    Unlocked
                  </div>
                  <div className="text-xl font-mono text-white">
                    {selectedStream.isEncrypted
                      ? "<encrypted>"
                      : selectedStream.unlocked.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                  </div>
                </div>
                <div className="p-4 bg-zinc-950 border border-zinc-800">
                  <div className="text-[10px] text-zinc-500 uppercase mb-1">
                    Withdrawn
                  </div>
                  <div className="text-xl font-mono text-zinc-400">
                    {selectedStream.isEncrypted
                      ? "<encrypted>"
                      : selectedStream.withdrawn.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-zinc-950 border-zinc-800">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white mb-1">
                    Sender
                  </div>
                  <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
                    0x91...8A11{" "}
                    <Copy
                      size={10}
                      className="cursor-pointer hover:text-white"
                    />
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500">
                  <ArrowRight size={14} />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-950 border-zinc-800">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white mb-1">
                    Recipient
                  </div>
                  <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
                    {selectedStream.recipient.slice(0, 4)}...
                    {selectedStream.recipient.slice(-4)}{" "}
                    <Copy
                      size={10}
                      className="cursor-pointer hover:text-white"
                    />
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-green-500">
                  <CheckCircle size={14} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Column: Withdraw Panel */}
        <div className="space-y-6">
          <Card className="border-zinc-700 bg-zinc-900/30">
            <CardHeader>
              <CardTitle>Withdraw Funds</CardTitle>
              <CardDescription>
                Claim unlocked tokens to your wallet.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">Available to Claim</span>
                <span className="font-mono text-white">
                  {selectedStream.isEncrypted
                    ? "<encrypted>"
                    : `${selectedStream.unlocked.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })} ${selectedStream.token}`}
                </span>
              </div>
              <Separator />
              <Button variant="tech" className="w-full h-12 text-sm">
                <Download size={16} className="mr-2" />
                Withdraw All
              </Button>
              <p className="text-[10px] text-center text-zinc-500 mt-2">
                Next unlock in 14 days, 2 hours.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm uppercase text-zinc-500">
                Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-zinc-500">Contract</span>
                <span className="text-blue-400 hover:underline cursor-pointer">
                  View on Solscan
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Created</span>
                <span className="text-zinc-300">Jan 1, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Tx Hash</span>
                <span className="text-zinc-300">0x88...1122</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
