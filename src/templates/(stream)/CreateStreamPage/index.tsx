"use client";

import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import type { Provider } from "@reown/appkit-adapter-solana";
import { ArrowLeft, Lock, Shield, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import { ConnectWallet } from "@/components/ConnectWallet";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select } from "@/components/ui/Select";
import { Separator } from "@/components/ui/Separator";
import { Switch } from "@/components/ui/Switch";
import { useAnchorProvider } from "@/hooks/useAnchorProvider";
import { useEnc } from "@/hooks/useEnc";
import { useStreamProgram } from "@/lib/protocol/programs";

const TIME_UNITS = [
  { id: "per-second", title: "Per Second", seconds: 1 },
  { id: "per-minute", title: "Per Minute", seconds: 60 },
  { id: "hourly", title: "Hourly", seconds: 3600 },
  { id: "daily", title: "Daily", seconds: 86400 },
  { id: "weekly", title: "Weekly", seconds: 604800 },
  { id: "bi-weekly", title: "Bi-weekly", seconds: 1209600 },
  { id: "monthly", title: "Monthly", seconds: 2592000 },
  { id: "quarterly", title: "Quarterly", seconds: 7776000 },
  { id: "yearly", title: "Yearly", seconds: 31536000 },
];

const CLIFF_TYPES = [
  { id: "percentage", title: "%" },
  { id: "amount", title: "Tokens" },
];

export default function CreateStreamPage() {
  const { isConnected, address } = useAppKitAccount();
  const anchorProvider = useAnchorProvider();
  const { walletProvider } = useAppKitProvider<Provider>("solana");
  const streamProgram = useStreamProgram();
  const { deriveX25519Key } = useEnc();
  const [selectedToken, setSelectedToken] = useState("USDC");
  const [customTokenAddress, setCustomTokenAddress] = useState("");
  const [isImmutable, setIsImmutable] = useState(false);
  const [feePaymentMethod, setFeePaymentMethod] = useState<
    "default" | "sol" | "token"
  >("default");
  const [streamType, setStreamType] = useState<"vesting" | "timelock">(
    "vesting",
  );

  // Vesting State
  const [startNow, setStartNow] = useState(true);
  const [vestingUnit, setVestingUnit] = useState(TIME_UNITS[6].seconds); // Default Monthly
  const [isCustomDuration, setIsCustomDuration] = useState(false);
  const [unlockFrequency, setUnlockFrequency] = useState(TIME_UNITS[0].seconds); // Default Per Second

  // Cliff State
  const [cliffEnabled, setCliffEnabled] = useState(false);
  const [cliffAmount, setCliffAmount] = useState("");
  const [cliffType, setCliffType] = useState("percentage");

  // Privacy State
  const [isObfuscated] = useState(false);
  const [isEncrypted, setIsEncrypted] = useState(true);

  // New State
  const [amount, setAmount] = useState("");
  const [streamName, setStreamName] = useState("");
  const [recipient, setRecipient] = useState(address);
  const [durationValue, setDurationValue] = useState("");
  const [unlockDate, setUnlockDate] = useState("");
  const [startDate, setStartDate] = useState("");

  const [tokenDetails, setTokenDetails] = useState<{
    symbol: string;
    decimals: number;
  } | null>(null);
  const [isFetchingToken, setIsFetchingToken] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (address) {
      setRecipient(address);
    }
  }, [address]);

  // Mock Token Fetching
  useEffect(() => {
    if (selectedToken === "Custom" && customTokenAddress.length > 20) {
      setIsFetchingToken(true);
      setTokenDetails(null);
      // Mock API call
      const timer = setTimeout(() => {
        setTokenDetails({ symbol: "MOCK", decimals: 6 });
        setIsFetchingToken(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setTokenDetails(null);
      setIsFetchingToken(false);
    }
  }, [selectedToken, customTokenAddress]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (selectedToken === "Custom" && !customTokenAddress) {
      newErrors.token = "Token address is required";
    }
    if (!amount || Number(amount) <= 0) {
      newErrors.amount = "Valid amount is required";
    }
    if (!recipient) {
      newErrors.recipient = "Recipient address is required";
    }

    if (streamType === "vesting") {
      if (!startNow) {
        if (!startDate) {
          newErrors.startDate = "Start date is required";
        } else if (new Date(startDate).getTime() <= Date.now()) {
          newErrors.startDate = "Start date must be in the future";
        }
      }

      if (!isCustomDuration && (!durationValue || Number(durationValue) <= 0)) {
        newErrors.duration = "Duration is required";
      }

      // Calculate total duration in seconds
      let totalDuration = 0;
      if (isCustomDuration) {
        // For custom end date, we'd calculate diff from start.
        // For now, let's assume simple validation for the inputs we have.
        if (!durationValue) {
          newErrors.duration = "End date is required";
        } else if (
          new Date(durationValue).getTime() <=
          (startNow ? Date.now() : new Date(startDate).getTime())
        ) {
          newErrors.duration = "End date must be after start date";
        }
      } else {
        totalDuration = Number(durationValue) * vestingUnit;

        // Validate unlock frequency
        if (unlockFrequency <= 0) {
          newErrors.frequency = "Unlock frequency is required";
        } else if (unlockFrequency > totalDuration) {
          newErrors.frequency =
            "Unlock frequency cannot be larger than duration";
        }
      }

      if (cliffEnabled) {
        if (!cliffAmount || Number(cliffAmount) <= 0) {
          newErrors.cliffAmount = "Cliff amount is required";
        } else {
          if (cliffType === "percentage" && Number(cliffAmount) > 90) {
            newErrors.cliffAmount = "Percentage cannot exceed 90%";
          } else if (
            cliffType === "amount" &&
            Number(cliffAmount) >= Number(amount)
          ) {
            newErrors.cliffAmount = "Cliff amount cannot exceed total amount";
          }
        }
      }
    } else {
      if (!unlockDate) {
        newErrors.unlockDate = "Unlock date is required";
      } else if (new Date(unlockDate).getTime() <= Date.now()) {
        newErrors.unlockDate = "Unlock date must be in the future";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateStream = async () => {
    if (!validateForm()) {
      console.log("Validation failed", errors);
      return;
    }

    const params = {
      token: selectedToken === "Custom" ? customTokenAddress : selectedToken,
      amount,
      streamName,
      recipient,
      isImmutable,
      feePaymentMethod,
      streamType,
      vesting:
        streamType === "vesting"
          ? {
              startNow,
              startDate,
              isCustomDuration,
              durationValue,
              vestingUnit,
              unlockFrequency,
              cliff: cliffEnabled
                ? { amount: cliffAmount, type: cliffType }
                : null,
            }
          : null,
      timelock: streamType === "timelock" ? { unlockDate } : null,
      privacy: { isObfuscated, isEncrypted },
    };

    console.log("Creating Stream with Params:", params);

    // const mxePublicKey = await getMXEPublicKeyWithRetry(
    //   anchorProvider,
    //   streamProgram,
    // );
    // const keypair = await deriveX25519Key(0); // TODO: fetch next stream id
    // if (!keypair) throw new Error("Failed to derive X25519 key");
    // const sharedSecret = x25519.getSharedSecret(
    //   keypair.publicKey,
    //   mxePublicKey,
    // );
    // const cipher = new RescueCipher(sharedSecret);
    // const nonce = randomBytes(16);
  };

  // Filter frequency options based on duration
  const getFrequencyOptions = () => {
    if (streamType !== "vesting" || isCustomDuration) return TIME_UNITS;

    const totalDuration = Number(durationValue || 0) * vestingUnit;
    if (totalDuration === 0) return TIME_UNITS;

    return TIME_UNITS.filter((unit) => unit.seconds <= totalDuration);
  };

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="mb-8 flex items-center gap-4">
        <Button variant="outline" href="/app/stream" size="icon">
          <ArrowLeft size={16} />
        </Button>
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-tight">
            Create Stream
          </h1>
          <p className="text-zinc-400">Set up a real-time payment stream.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Area */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Stream Configuration</CardTitle>
              <CardDescription>
                Configure the asset and recipient details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Token Asset</Label>
                <div className="grid grid-cols-3 gap-4">
                  {["USDC", "SOL", "Custom"].map((token) => (
                    <button
                      key={token}
                      type="button"
                      onClick={() => setSelectedToken(token)}
                      className={`h-12 border transition-colors flex items-center justify-center font-mono text-sm focus:ring-1 focus:ring-white focus:outline-none ${
                        selectedToken === token
                          ? "bg-zinc-100 text-zinc-900 border-white font-bold"
                          : "border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-600 text-zinc-400"
                      }`}
                    >
                      {token}
                    </button>
                  ))}
                </div>
                {selectedToken === "Custom" && (
                  <div className="mt-4 animate-in fade-in slide-in-from-top-2">
                    <Label className="text-xs text-zinc-400 mb-1.5 block">
                      Token Address
                    </Label>
                    <Input
                      placeholder="Enter SPL Token Address"
                      value={customTokenAddress}
                      onChange={(e) => setCustomTokenAddress(e.target.value)}
                    />
                  </div>
                )}
                {isFetchingToken && (
                  <div className="mt-2 text-xs text-zinc-500 animate-pulse">
                    Fetching token details...
                  </div>
                )}
                {tokenDetails && (
                  <div className="mt-2 text-xs text-green-500">
                    Found: {tokenDetails.symbol} (Decimals:{" "}
                    {tokenDetails.decimals})
                  </div>
                )}
                {errors.token && (
                  <p className="text-red-500 text-xs mt-1">{errors.token}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Amount</Label>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className={errors.amount ? "border-red-500" : ""}
                  />
                  {errors.amount && (
                    <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Stream Name (Optional)</Label>
                  <Input
                    placeholder="e.g. Oct Salary"
                    value={streamName}
                    onChange={(e) => setStreamName(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Recipient Address</Label>
                <div className="relative">
                  <Input
                    placeholder="Solana Wallet Address"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className={errors.recipient ? "border-red-500" : ""}
                    disabled
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Wallet size={16} className="text-zinc-500" />
                  </div>
                </div>
                {errors.recipient && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.recipient}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <div className="space-y-0.5">
                  <Label className="mb-0 text-white">Immutable Stream</Label>
                  <p className="text-xs text-zinc-500">
                    If enabled, the stream cannot be cancelled or modified.
                  </p>
                </div>
                <Switch
                  checked={isImmutable}
                  onCheckedChange={setIsImmutable}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                <div>
                  <CardTitle>Unlock Schedule</CardTitle>
                  <CardDescription>
                    Define how tokens unlock over time.
                  </CardDescription>
                </div>

                <div className="flex bg-zinc-900 p-1 border border-zinc-800">
                  <button
                    type="button"
                    onClick={() => setStreamType("timelock")}
                    className={`px-3 py-1 text-xs font-medium transition-all ${
                      streamType === "timelock"
                        ? "bg-zinc-800 text-white shadow-sm"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Time-lock
                  </button>
                  <button
                    type="button"
                    onClick={() => setStreamType("vesting")}
                    className={`px-3 py-1 text-xs font-medium transition-all ${
                      streamType === "vesting"
                        ? "bg-zinc-800 text-white shadow-sm"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Vesting
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {streamType === "vesting" ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Start Date</Label>
                        <div className="flex items-center gap-2">
                          <Label className="text-[10px] text-zinc-400 font-normal mb-0!">
                            Start Now
                          </Label>
                          <Switch
                            size="xs"
                            checked={startNow}
                            onCheckedChange={setStartNow}
                          />
                        </div>
                      </div>
                      <Input
                        type="datetime-local"
                        className="text-zinc-400"
                        disabled={startNow}
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                      {errors.startDate && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.startDate}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>
                          {isCustomDuration ? "End Date" : "Duration"}
                        </Label>
                        <div className="flex items-center gap-2">
                          <Label className="text-[10px] text-zinc-400 font-normal mb-0!">
                            Custom
                          </Label>
                          <Switch
                            size="xs"
                            checked={isCustomDuration}
                            onCheckedChange={setIsCustomDuration}
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {isCustomDuration ? (
                          <Input
                            type="datetime-local"
                            className="text-zinc-400"
                            value={durationValue}
                            onChange={(e) => setDurationValue(e.target.value)}
                          />
                        ) : (
                          <Input
                            type="number"
                            placeholder="12"
                            value={durationValue}
                            onChange={(e) => setDurationValue(e.target.value)}
                            className={errors.duration ? "border-red-500" : ""}
                          />
                        )}
                        {!isCustomDuration && (
                          <Select
                            value={isCustomDuration ? "custom" : vestingUnit}
                            onChange={(e) => {
                              if (e.target.value === "custom") {
                                setIsCustomDuration(true);
                              } else {
                                setIsCustomDuration(false);
                                setVestingUnit(Number(e.target.value));
                              }
                            }}
                            options={[
                              ...TIME_UNITS.map((unit) => ({
                                value: unit.seconds,
                                label: unit.title.toUpperCase(),
                              })),
                              { value: "custom", label: "CUSTOM" },
                            ]}
                            className="h-12"
                          />
                        )}
                      </div>
                      {errors.duration && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.duration}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Unlock Frequency</Label>
                    <Select
                      value={unlockFrequency}
                      onChange={(e) =>
                        setUnlockFrequency(Number(e.target.value))
                      }
                      options={getFrequencyOptions().map((unit) => ({
                        value: unit.seconds,
                        label: unit.title.toUpperCase(),
                      }))}
                      className={`h-12 ${errors.frequency ? "border-red-500" : ""}`}
                    />
                    {errors.frequency && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.frequency}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4 pt-4 border-t border-zinc-800">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="mb-0 text-white">Cliff Amount</Label>
                        <p className="text-xs text-zinc-500">
                          Unlock a specific amount immediately at start.
                        </p>
                      </div>
                      <Switch
                        checked={cliffEnabled}
                        onCheckedChange={setCliffEnabled}
                      />
                    </div>

                    {cliffEnabled && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2">
                        <div className="space-y-2 col-span-2">
                          <Label>Amount to Unlock</Label>
                          <div className="flex gap-2">
                            <Input
                              type="number"
                              placeholder="0"
                              value={cliffAmount}
                              onChange={(e) => setCliffAmount(e.target.value)}
                              className={
                                errors.cliffAmount ? "border-red-500" : ""
                              }
                            />
                            <Select
                              value={cliffType}
                              onChange={(e) => setCliffType(e.target.value)}
                              options={CLIFF_TYPES.map((type) => ({
                                value: type.id,
                                label: type.title,
                              }))}
                              className="h-12"
                            />
                          </div>
                          {errors.cliffAmount && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.cliffAmount}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 flex gap-3 items-start">
                    <Lock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-blue-400">
                        Time-lock Mode
                      </h4>
                      <p className="text-xs text-blue-300/70 leading-relaxed">
                        Tokens will be fully locked until the specified date,
                        after which 100% of the allocation will be released at
                        once.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Unlock Date</Label>
                    <Input
                      type="datetime-local"
                      className={`text-zinc-400 ${errors.unlockDate ? "border-red-500" : ""}`}
                      value={unlockDate}
                      onChange={(e) => setUnlockDate(e.target.value)}
                    />
                    {errors.unlockDate && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.unlockDate}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Protocol Fee</CardTitle>
              <CardDescription>
                Choose how you want to pay the protocol fee.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {(["default", "sol", "token"] as const).map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setFeePaymentMethod(method)}
                    className={`h-12 border transition-colors flex items-center justify-center font-mono text-sm uppercase focus:ring-1 focus:ring-white focus:outline-none ${
                      feePaymentMethod === method
                        ? "bg-zinc-100 text-zinc-900 border-white font-bold"
                        : "border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-600 text-zinc-400"
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Privacy Side Panel */}
        <div className="">
          <div className="space-y-6 sticky top-24">
            <Card className="border-zinc-800 bg-zinc-950/50">
              <CardHeader className="bg-stripes">
                <div className="flex items-center gap-2 text-green-500 mb-2">
                  <Shield size={16} />
                  <span className="text-xs font-mono uppercase tracking-widest font-bold">
                    Zenlok Guard
                  </span>
                </div>
                <CardTitle>Privacy Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Switch
                    checked={isObfuscated}
                    // onCheckedChange={setIsObfuscated}
                    onCheckedChange={() => {
                      alert("Obfuscate Transaction is under development");
                    }}
                  />
                  <div>
                    <Label className="text-white mb-1">
                      Obfuscate Transaction
                    </Label>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Transactions will be routed through the dark pool. Sender,
                      recipient, and amounts will be obfuscated on-chain.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Switch
                    checked={isEncrypted}
                    onCheckedChange={setIsEncrypted}
                  />
                  <div>
                    <Label className="text-white mb-1">Encrypted Stream</Label>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Encrypts stream data so only the participants can decrypt
                      it.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase text-zinc-500">
                    Summary
                  </h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Network Fee</span>
                    <span className="font-mono">~0.0005 SOL</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Protocol Fee</span>
                    <span className="font-mono">10 USDC</span>
                  </div>
                  <div className="p-3 bg-zinc-900 border border-zinc-800 mt-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-zinc-500 uppercase">
                        Total Deposit
                      </span>
                      <span className="font-bold text-white font-mono">
                        {amount ? Number(amount).toLocaleString() : "0.00"}{" "}
                        {selectedToken === "Custom"
                          ? tokenDetails?.symbol || "Token"
                          : selectedToken}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
              <Button variant="ghost" href="/app/stream">
                Cancel
              </Button>
              {isConnected ? (
                <Button
                  variant="tech"
                  className="min-w-[150px]"
                  onClick={handleCreateStream}
                >
                  Create Stream
                </Button>
              ) : (
                <ConnectWallet
                  variant="tech"
                  className="min-w-[150px]"
                  icon={<Wallet size={14} />}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
