import type { Metadata } from "next";
import MainLayout from "@/layouts/Main";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zenlok - Privacy-first DeFi Protocol",
    template: "%s | Zenlok",
  },
  description:
    "Zenlok, the first privacy-preserving protocol for SPL token streaming and zero-knowledge lending on Solana powered by Arcium.",
  keywords: [
    "Zenlok",
    "Solana",
    "Arcium",
    "encrypted",
    "token locks",
    "vesting",
    "stream",
    "streaming",
    "privacy",
    "DeFi",
    "time-based locks",
    "price-based locks",
    "lend",
    "borrow",
    "lending",
    "borrowing",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
