import { Metadata } from "next";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

export const metadata: Metadata = {
  title: "Home",
};
