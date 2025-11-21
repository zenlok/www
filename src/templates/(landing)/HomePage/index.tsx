"use client";

import Developer from "./Developer";
import Earn from "./Earn";
import Faq from "./Faq";
import Hero from "./Hero";
import Lending from "./Lending";
import TechStack from "./TechStack";
import TokenOps from "./TokenOps";
import Trade from "./Trade";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* PAYROLL & VESTING */}
      <TokenOps />

      {/* SHIELDED LENDING */}
      <Lending />

      {/* TRADE SECTION - DARK MODE */}
      <Trade />

      {/* EARN SECTION */}
      <Earn />

      {/* DEVELOPERS SECTION */}
      <Developer />

      {/* TECH STACK SECTION */}
      <TechStack />

      {/* FAQ SECTION */}
      <Faq />
    </>
  );
}
