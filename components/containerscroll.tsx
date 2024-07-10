"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col overflow-hidden ${className}`}>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Network, connect, and innovate <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Founder profiles
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://cdn.usegalileo.ai/screenshots/f1da51be-344d-4c8f-bb5a-5efafbac41a5.webp"  // Ensure this path is correct
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}