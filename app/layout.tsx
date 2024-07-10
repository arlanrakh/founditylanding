import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/utils/cn";
import { ViewTransitions } from "next-view-transitions";


export const metadata: Metadata = {
  title: "Foundity",
  description:
    "We help young founders.",
  openGraph: {
    images: ["https://cdn.usegalileo.ai/screenshots/f1da51be-344d-4c8f-bb5a-5efafbac41a5.webp"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={cn(
            GeistSans.className,
            "bg-white dark:bg-black antialiased h-full w-full"
          )}
        >
            {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
