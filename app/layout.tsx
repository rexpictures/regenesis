import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const image = host ? `${protocol}://${host}/og.png` : undefined;

  return {
    title: "Regenesis — Creating a New Beginning",
    description:
      "Three landing page directions for Regenesis, a whole-person program supporting lasting change.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: image
      ? {
          title: "Regenesis — The Will to Be Well",
          description: "Creating a new beginning through whole-person support.",
          images: [{ url: image, width: 1200, height: 630, alt: "Regenesis — The Will to Be Well" }],
        }
      : undefined,
    twitter: image
      ? {
          card: "summary_large_image",
          title: "Regenesis — The Will to Be Well",
          description: "Creating a new beginning through whole-person support.",
          images: [image],
        }
      : undefined,
  };
}

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
