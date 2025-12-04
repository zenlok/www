"use client";

import {
  useAppKitAccount,
  useAppKitProvider,
  useDisconnect,
} from "@reown/appkit/react";
import type { Provider } from "@reown/appkit-adapter-solana";
import bs58 from "bs58";
import { useCallback, useState } from "react";
import { deriveX25519FromSignature } from "@/lib/crypto";

const PREFIX = "sig_";
const MESSAGE = "zenlok::encrypted";

export const useEnc = () => {
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider<Provider>("solana");
  const [isSigning, setIsSigning] = useState(false);
  const [signature, setSignature] = useState<Uint8Array | null>(() => {
    if (typeof window !== "undefined" && address) {
      return bs58.decode(localStorage.getItem(`${PREFIX}${address}`)!);
    }
    return null;
  });
  const [keypair, setKeypair] = useState<Uint8Array | null>();

  const checkAndSign = useCallback(async () => {
    if (!isConnected || !address) return;

    const storageKey = `${PREFIX}${address}`;
    const storedSignature = localStorage.getItem(storageKey);

    if (storedSignature) {
      if (storedSignature !== bs58.encode(signature!)) {
        setSignature(bs58.decode(storedSignature));
      }
      return;
    }

    if (isSigning) return;

    try {
      setIsSigning(true);
      const message = new TextEncoder().encode(MESSAGE);
      const signature = await walletProvider.signMessage(message);
      localStorage.setItem(storageKey, bs58.encode(signature));
      setSignature(signature);
    } catch (error) {
      console.error("Failed to sign message:", error);
      disconnect();
    } finally {
      setIsSigning(false);
    }
  }, [isConnected, address, disconnect, walletProvider, isSigning, signature]);

  const deriveX25519Key = useCallback(
    (nonce: number) => {
      if (!signature) return null;
      return deriveX25519FromSignature(signature, nonce);
    },
    [signature],
  );

  return {
    isSigning,
    signature,
    checkAndSign,
    deriveX25519Key,
  };
};
