import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulatory Product MVP",
  description: "Regulatory Product MVP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
