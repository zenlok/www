"use client";

import { ArrowRight, Filter, Plus, Search, Shield, Unlock } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { formatStreamData, MOCK_API_RESPONSE } from "@/lib/utils/stream";
import type { FormattedStream } from "@/types/stream";

const STREAMS: FormattedStream[] =
  MOCK_API_RESPONSE.data.items.map(formatStreamData);

export default function StreamPage() {
  const router = useRouter();

  const handleStreamClick = (stream: FormattedStream) => {
    router.push(`/app/stream/${stream.id}`);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-tight mb-2">
            Dashboard
          </h1>
          <p className="text-zinc-400">
            Manage your outgoing and incoming token streams.
          </p>
        </div>
        <Button
          variant="tech"
          href="/app/stream/create"
          icon={<Plus size={16} />}
        >
          Create New Stream
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-zinc-950/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-mono text-zinc-500 uppercase">
              Active Streams
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-mono">12</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-950/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-mono text-zinc-500 uppercase">
              Total Value Locked
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-mono">$142,820.00</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-950/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-mono text-zinc-500 uppercase">
              Claimable
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-mono text-white flex items-center gap-2">
              $12,450.00
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <h2 className="text-2xl font-medium text-white">Active Streams</h2>
        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input
              placeholder="Search by address or stream ID..."
              className="h-10! pl-10"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter size={16} />
          </Button>
        </div>
      </div>

      {/* Streams Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Stream ID</TableHead>
              <TableHead>Recipient</TableHead>
              <TableHead>Token</TableHead>
              <TableHead>Unlocked / Total</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {STREAMS.map((stream) => (
              <TableRow
                key={stream.id}
                className="cursor-pointer group"
                onClick={() => handleStreamClick(stream)}
              >
                <TableCell>
                  {stream.type === "encrypted" ? (
                    <div
                      className="w-8 h-8 flex items-center justify-center bg-zinc-900 border border-zinc-800 text-green-500"
                      title="Shielded Stream"
                    >
                      <Shield size={14} />
                    </div>
                  ) : (
                    <div
                      className="w-8 h-8 flex items-center justify-center bg-white border border-white text-black"
                      title="Public Stream"
                    >
                      <Unlock size={14} />
                    </div>
                  )}
                </TableCell>
                <TableCell>#{stream.id}</TableCell>
                <TableCell className="font-mono text-zinc-400">
                  {stream.recipient.slice(0, 4)}...{stream.recipient.slice(-4)}
                </TableCell>
                <TableCell>{stream.token}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-white font-bold">
                      {stream.isEncrypted
                        ? "<encrypted>"
                        : stream.unlocked.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                    </span>
                    <span className="text-[10px] text-zinc-500">
                      of{" "}
                      {stream.isEncrypted
                        ? "<encrypted>"
                        : stream.amount.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="w-[150px]">
                  <div className="h-1.5 w-full bg-zinc-800 overflow-hidden">
                    <div
                      className={`h-full ${stream.status === "completed" ? "bg-green-500" : "bg-white"}`}
                      style={{
                        width: stream.isEncrypted
                          ? "0%"
                          : stream.status === "completed"
                            ? "100%"
                            : "35%",
                      }}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      stream.status === "streaming"
                        ? "success"
                        : stream.status === "completed"
                          ? "secondary"
                          : "warning"
                    }
                  >
                    {stream.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
