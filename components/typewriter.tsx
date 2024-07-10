"use client";
import { TypewriterEffectSmooth } from "../components//ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "The",
      className: "text-black dark:text-black",
    },
    {
      text: "ultimate",
      className: "text-black dark:text-black",
    },
    {
      text: "database",
      className: "text-black dark:text-black",
    },
    {
      text: "of",
      className: "text-black dark:text-black",
    },
    {
        text: "young",
        className: "text-black dark:text-black",
      },
    {
      text: "Founders.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-black-200 text-xs sm:text-base  ">
        Connect, search, and collaborate
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a href="https://forms.gle/XzsYjCeWVcDCHeicA" target="_blank" rel="noopener noreferrer">
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
            Join Waitlist
          </button>
        </a>
      </div>
    </div>
  );
}
