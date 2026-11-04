import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunnie Yeung — UI/UX & Brand Designer",
  description:
    "Sunnie Yeung is a New York based UI/UX and brand designer who believes design should be intuitive and fun.",
  icons: {
    icon: "/images/bunbun-icon.png",
  },
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
