import * as anchor from "@coral-xyz/anchor";
import { useAppKitProvider } from "@reown/appkit/react";
import type { Provider } from "@reown/appkit-adapter-solana";
import { useAppKitConnection } from "@reown/appkit-adapter-solana/react";
import type { AnchorWallet } from "@solana/wallet-adapter-react";
import { getAnchorProvider } from "@/lib/protocol";

export const useAnchorProvider = () => {
  const { connection } = useAppKitConnection();
  const { walletProvider } = useAppKitProvider<Provider>("solana");

  const provider = getAnchorProvider(
    connection!,
    walletProvider as AnchorWallet,
  );
  anchor.setProvider(provider);

  return provider;
};
