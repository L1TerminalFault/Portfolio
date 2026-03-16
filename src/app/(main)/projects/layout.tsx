import { Metadata } from "next";

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}

export const metadata: Metadata = {
  title: "Projects",
};
