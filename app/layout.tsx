import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/sections/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NDSG Associates - Pioneering Digital Excellence",
  description: "Your strategic partner in navigating the digital frontier with cutting-edge technology solutions and transformative business strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
