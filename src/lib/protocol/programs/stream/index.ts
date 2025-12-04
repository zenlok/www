import * as anchor from "@coral-xyz/anchor";
import { useAppKitProvider } from "@reown/appkit/react";
import type { Provider } from "@reown/appkit-adapter-solana";
import { useAppKitConnection } from "@reown/appkit-adapter-solana/react";
import { type AnchorWallet } from "@solana/wallet-adapter-react";
import { getAnchorProvider, parseIdlSeeds } from "../..";
import type { Stream } from "./stream";
import idl from "./stream.json";
import { useAnchorProvider } from "@/hooks/useAnchorProvider";

export const STREAM_PROGRAM_ID = new anchor.web3.PublicKey(idl.address);
export const streamProgramSeeds = parseIdlSeeds(idl);

export function getStreamProgram(
  connection: anchor.web3.Connection,
  wallet?: AnchorWallet,
): anchor.Program<Stream> {
  return new anchor.Program(
    idl,
    wallet ? getAnchorProvider(connection, wallet) : undefined,
  );
}

export function useStreamProgram(): anchor.Program<Stream> {
  const {} = useAnchorProvider();
  const { connection } = useAppKitConnection();
  const { walletProvider } = useAppKitProvider<Provider>("solana");

  return getStreamProgram(connection!, walletProvider as AnchorWallet);
}
