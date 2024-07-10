import React from "react";
import { TypewriterEffectSmoothDemo } from "../../components/typewriter";
import { Background } from "../../components/background";
import { Container } from "../../components/container";
import { HeroScrollDemo } from "../../components/containerscroll";


export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Background />
      <Container className="relative z-10 flex min-h-screen flex-col items-center">
        <TypewriterEffectSmoothDemo />
        <HeroScrollDemo className="mb-1000" />
      </Container>
        <div className="relative z-10">
        </div>
    </div>
  );
}