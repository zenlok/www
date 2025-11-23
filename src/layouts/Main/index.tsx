"use client";

import {
  Activity,
  ArrowRight,
  ChevronDown,
  Database,
  FileCode,
  Globe,
  Key,
  Layers,
  type LucideIcon,
  Menu,
  RefreshCcw,
  Terminal,
  Wallet,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { StatusBadge, type StatusType } from "@/components/ui/StatusBadge";

type MenuItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  status?: string;
};

const MENU_ITEMS: { title: string; items: MenuItem[] }[] = [
  {
    title: "Protocol",
    items: [
      {
        icon: Activity,
        title: "Stream",
        desc: "Private payroll & token vesting.",
        status: "in-development",
      },
      {
        icon: RefreshCcw,
        title: "Lend",
        desc: "Zero-knowledge collateralized loans.",
        status: "in-development",
      },
      {
        icon: Layers,
        title: "Trade",
        desc: "Dark pool swaps on Solana.",
        status: "planned",
      },
      {
        icon: Wallet,
        title: "Earn",
        desc: "Shielded liquidity provision.",
        status: "planned",
      },
    ],
  },
  {
    title: "Developers",
    items: [
      {
        icon: Terminal,
        title: "Documentation",
        desc: "Integrate the Zenlok SDK.",
      },
      {
        icon: FileCode,
        title: "Contracts",
        desc: "SPL Program Addresses.",
      },
      {
        icon: Key,
        title: "Audits",
        desc: "Security reports by OtterSec.",
      },
    ],
  },
  {
    title: "Governance",
    items: [
      {
        icon: Globe,
        title: "DAO",
        desc: "Realms Governance.",
      },
      {
        icon: Database,
        title: "Treasury",
        desc: "On-chain asset holdings.",
      },
    ],
  },
];

const NavDropdown = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: show menu on hover
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`flex items-center gap-2 px-6 h-full text-xs font-mono uppercase tracking-widest transition-colors ${open ? "bg-white text-black" : "text-zinc-400 hover:text-white"}`}
      >
        {title}{" "}
        <ChevronDown
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 w-[700px] bg-black/95 backdrop-blur-xl border border-zinc-800 z-50 animate-in fade-in slide-in-from-top-2 duration-200 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
          <div className="grid grid-cols-2">
            <div className="p-2 border-r border-zinc-800 bg-zinc-950/50">
              {children}
            </div>
            <div className="p-6 flex flex-col justify-end bg-dot-grid-sm bg-black relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-80"></div>
              <div className="border border-zinc-800 p-4 bg-black/80 backdrop-blur relative z-10">
                <div className="flex items-center gap-2 mb-2 text-zinc-500 font-mono text-[10px] uppercase">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  System Status
                </div>
                <div className="text-white font-bold text-sm mb-1">
                  Mainnet Beta
                </div>
                <div className="text-zinc-600 text-xs">
                  All systems operational. 99.99% uptime.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MegaMenuItem = ({
  icon: Icon,
  title,
  desc,
  status,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  status?: StatusType;
}) => (
  <a
    href="#"
    className="flex items-start gap-4 p-4 group hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-800"
  >
    <div className="mt-1 text-zinc-600 group-hover:text-white transition-colors">
      <Icon size={18} strokeWidth={1.5} />
    </div>
    <div>
      <div className="text-sm font-bold text-zinc-300 group-hover:text-white mb-1 flex items-center gap-2">
        {title}
        {status && <StatusBadge status={status} />}
        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </div>
      <p className="text-[10px] text-zinc-500 leading-relaxed font-mono uppercase">
        {desc}
      </p>
    </div>
  </a>
);

const StatsTicker = () => (
  <div className="overflow-hidden whitespace-nowrap border-b border-zinc-800 bg-black h-10 flex items-center relative z-10">
    <div className="absolute inset-0 bg-stripes opacity-10 pointer-events-none"></div>
    <div className="animate-scan flex items-center gap-16 px-4 opacity-70 hover:opacity-100 transition-opacity">
      {[...Array(4)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
            SOL/USD <span className="text-white">$148.20</span>
          </span>
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
            TPS <span className="text-green-500">4,291</span>
          </span>
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
            EPOCH <span className="text-white">520</span>
          </span>
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
            TVL <span className="text-white">$4.2B</span>
          </span>
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
            24h VOL <span className="text-white">$892M</span>
          </span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const MobileNavDropdown = ({
  title,
  items,
}: {
  title: string;
  items: MenuItem[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b pb-6 border-zinc-800">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-6 text-4xl font-light uppercase font-sans text-left"
      >
        {title}
        <ChevronDown
          className={`w-6 h-6 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="space-y-4">
          {items.map((item) => (
            <a
              key={item.title}
              href="#"
              className="flex items-start gap-4 p-2 hover:bg-zinc-900/50 rounded-lg transition-colors"
            >
              <div className="mt-1 text-zinc-500">
                <item.icon size={20} />
              </div>
              <div>
                <div className="text-lg font-medium text-zinc-300 mb-1 flex items-center gap-2">
                  {item.title}
                  {item.status && (
                    <StatusBadge status={item.status as StatusType} />
                  )}
                </div>
                <p className="text-xs text-zinc-500 font-mono uppercase">
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-white selection:text-black font-sans">
      <div className="noise-overlay" />
      <div className="scanline" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800 h-16">
        <div className="max-w-[1600px] mx-auto border-x border-zinc-800 flex justify-between items-stretch h-full px-6">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2 mr-8">
            <Image
              src="/assets/images/logo/white.svg"
              alt="Zenlok"
              width={115}
              height={20}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center h-full border-l border-zinc-800">
            {MENU_ITEMS.map((section) => (
              <NavDropdown key={section.title} title={section.title}>
                {section.items.map((item) => (
                  <MegaMenuItem
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                    status={item.status as StatusType}
                  />
                ))}
              </NavDropdown>
            ))}
          </div>

          {/* Spacer */}
          <div className="flex-1 hidden lg:block"></div>

          {/* Actions */}
          <div className="flex items-center gap-6 border-l border-zinc-800 pl-6 h-full">
            <Button
              variant="tech"
              className="hidden md:flex h-9"
              icon={<ArrowRight size={14} />}
            >
              Launch App
            </Button>
            <button
              type="button"
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div className="fixed inset-0 z-40 bg-black pt-20 px-6 overflow-y-auto">
          <div className="space-y-8 pb-20">
            {MENU_ITEMS.map((section) => (
              <MobileNavDropdown
                key={section.title}
                title={section.title}
                items={section.items}
              />
            ))}
            <div className="pt-8">
              <Button className="w-full text-lg h-16">Launch App</Button>
            </div>
          </div>
        </div>
      )}

      <div className="pt-16">
        <StatsTicker />

        {children}

        {/* FOOTER */}
        <footer className="bg-black border-t border-zinc-800 pt-20 pb-10">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              <div className="col-span-1 md:col-span-2">
                <Link
                  href="/"
                  className="flex shrink-0 items-center gap-2 mb-6"
                >
                  <Image
                    src="/assets/images/logo/white.svg"
                    alt="Zenlok"
                    width={115}
                    height={20}
                  />
                </Link>
                <p className="text-zinc-500 max-w-sm mb-8">
                  Building the privacy layer for the Solana ecosystem. Audited,
                  open-source, and immutable.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/zenlok"
                    className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-zinc-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={18} name="dinkie-icons:github" />
                  </a>
                  <a
                    href="https://x.com/zenlokio"
                    className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-zinc-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={18} name="dinkie-icons:twitter-alt" />
                  </a>
                  <a
                    href="https://t.me/zenlokio"
                    className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-zinc-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={18} name="dinkie-icons:telegram-alt" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">
                  Ecosystem
                </h4>
                <ul className="space-y-4 text-zinc-400 font-light text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Governance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Bug Bounty
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Grants Program
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Brand Assets
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">
                  Legal
                </h4>
                <ul className="space-y-4 text-zinc-400 font-light text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Disclaimers
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
              <div className="flex gap-8">
                <span>&copy; {new Date().getFullYear()} Zenlok Protocol</span>
              </div>
              {/* <div className="flex items-center gap-4"> */}
              {/*   <span className="flex items-center gap-2"> */}
              {/*     <div className="w-1.5 h-1.5 bg-green-900 rounded-full" /> API */}
              {/*     Status: OK */}
              {/*   </span> */}
              {/*   <span className="flex items-center gap-2"> */}
              {/*     <div className="w-1.5 h-1.5 bg-green-900 rounded-full" />{" "} */}
              {/*     Bridge Status: OK */}
              {/*   </span> */}
              {/* </div> */}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
