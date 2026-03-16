import type { Metadata } from "next";

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

export const metadata: Metadata = {
  title: "Contact",
};
