import {
  type AppKitNetwork,
  solanaDevnet,
  solanaLocalnet,
} from "@reown/appkit/networks";
import { createAppKit, type Metadata } from "@reown/appkit/react";
import {
  type BaseWalletAdapter,
  SolanaAdapter,
} from "@reown/appkit-adapter-solana/react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
  ] as unknown as BaseWalletAdapter[],
});

// 1. Get projectId from https://cloud.reown.com
const nextPublicProjectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const defaultProjectId = "b56e18d47c72ab683b10814fe9495694"; // this is a public projectId only to use on localhost
const projectId = nextPublicProjectId || defaultProjectId;

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// 2. Create a metadata object - optional
const metadata: Metadata = {
  name: "Solec Locker",
  description:
    "Secure DeFi platform for locking, vesting, and managing tokens on Solana.",
  url: "https://d.solec.app",
  icons: ["/android-chrome-192x192.png"],
};

// 3. Define networks
const networks: [AppKitNetwork, ...AppKitNetwork[]] = [
  solanaDevnet,
  solanaLocalnet,
];

// 4. Create modal
export const appkit = createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

export default function AppKitProvider({ children }: React.PropsWithChildren) {
  return children;
}
