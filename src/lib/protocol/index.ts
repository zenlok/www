import { getMXEPublicKey } from "@arcium-hq/client";
import * as anchor from "@coral-xyz/anchor";
import type { Provider } from "@reown/appkit-adapter-solana";
import type { AnchorWallet } from "@solana/wallet-adapter-react";
import { camel } from "case";
import type { Stream } from "./programs/stream/stream";

type SeedsMap<T extends Stream> = Record<
  T["constants"][number]["name"],
  Uint8Array
>;

export function getAnchorProvider(
  connection: anchor.web3.Connection,
  wallet: AnchorWallet,
  opts?: anchor.web3.ConfirmOptions,
): anchor.AnchorProvider {
  return new anchor.AnchorProvider(connection, wallet, {
    preflightCommitment: "recent",
    commitment: "confirmed",
    ...opts,
  });
}

export function parseIdlSeeds<T extends Stream>(idl: any): SeedsMap<T> {
  const seeds: SeedsMap<T> = {} as SeedsMap<T>;

  for (const item of idl["constants"]) {
    try {
      // Parse the stringified byte array into an actual array of numbers
      const byteArray: number[] = JSON.parse(item.value);

      // Map the seed name to its parsed string
      seeds[camel(item.name) as keyof SeedsMap<T>] = Uint8Array.from(byteArray);
    } catch (error) {
      // Log an error if parsing fails, but continue processing other seeds
      console.error(`Failed to parse value for ${item.name}:`, error);
    }
  }

  return seeds;
}

export const awaitEvent = async <
  P extends anchor.Program,
  E extends keyof Event,
>(
  program: P,
  eventName: E,
): Promise<Event[E]> => {
  let listenerId: number;
  const event = await new Promise<Event[E]>((res) => {
    listenerId = program.addEventListener(eventName, (event) => {
      res(event);
    });
  });
  await program.removeEventListener(listenerId!);

  return event;
};

export async function getMXEPublicKeyWithRetry<
  PVD extends anchor.AnchorProvider,
  IDL extends anchor.Idl,
>(
  provider: PVD,
  program: anchor.Program<IDL>,
  maxRetries: number = 10,
  retryDelayMs: number = 500,
): Promise<Uint8Array> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const mxePublicKey = await getMXEPublicKey(provider, program.programId);
      if (mxePublicKey) {
        return mxePublicKey;
      }
    } catch (error) {
      console.log(`Attempt ${attempt} failed to fetch MXE public key:`, error);
    }

    if (attempt < maxRetries) {
      console.log(
        `Retrying in ${retryDelayMs}ms... (attempt ${attempt}/${maxRetries})`,
      );
      await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
    }
  }

  throw new Error(
    `Failed to fetch MXE public key after ${maxRetries} attempts`,
  );
}
