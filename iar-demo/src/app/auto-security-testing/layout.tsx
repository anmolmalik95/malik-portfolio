import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatic Security Testing",
  description: "Automatic security testing for the Internal Access Request Tool",
};

export default function AutoSecurityTestingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
