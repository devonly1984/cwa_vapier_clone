import "./globals.css";
import { ReactNode } from "react";
import { TRPCReactProvider } from "@/lib/trpc/client";
import { Toaster } from "@/components/ui/sonner";
import { geistMono, geistSans } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zapier Clone",
  description: "Zapier clone by CWA Tutorial",
};
const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TRPCReactProvider>
          {children}
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
};
export default RootLayout;
