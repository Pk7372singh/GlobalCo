import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConnectHub",
  description: "Social media SaaS platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
