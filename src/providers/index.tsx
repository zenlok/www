"use client";

import { Toaster } from "sonner";
import AppKitProvider from "./reown";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position="top-center" />
      <AppKitProvider>{children}</AppKitProvider>
    </>
  );
}
