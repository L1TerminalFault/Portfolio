import { Metadata } from "next";

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex flex-col h-full w-full">{children}</div>;
}

export const metadata: Metadata = {
  title: "Projects",
};
