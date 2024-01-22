import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Puesto - Start your own business",
  description: "Jump start your food business with Puesto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-red-100 to-orange-50"
        )}
      >
        {children}
      </body>
    </html>
  );
}
