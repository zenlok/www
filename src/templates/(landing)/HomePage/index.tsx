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
      <Hero />
      <TokenOps />
      <Lending />
      <Trade />
      <Earn />
      <Developer />
      <TechStack />
      <Faq />
    </>
  );
}
