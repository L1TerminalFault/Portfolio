import { Metadata } from "next";

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

export const metadata: Metadata = {
  title: "Services",
};
