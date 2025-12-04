"use client";

import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useEffect } from "react";
import { useEnc } from "@/hooks/useEnc";
import { Button, type ButtonProps } from "./ui/Button";

export const ConnectWallet = (props: Omit<ButtonProps, "onClick">) => {
  const { open } = useAppKit();
  const { isConnected, address } = useAppKitAccount();
  const { checkAndSign } = useEnc();

  useEffect(() => {
    checkAndSign();
  }, [checkAndSign]);

  return (
    <Button {...props} onClick={() => open()}>
      {isConnected && address ? (
        <>
          <div className="w-2 h-2 bg-green-500 mr-2 animate-pulse" />
          {address.slice(0, 4)}...{address.slice(-4)}
        </>
      ) : (
        "Connect Wallet"
      )}
    </Button>
  );
};
