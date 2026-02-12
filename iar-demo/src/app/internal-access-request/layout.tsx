import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internal Access Request",
  description: "Submit and evaluate internal access requests",
};

export default function InternalAccessRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
