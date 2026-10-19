import type { Metadata, Viewport } from "next";
import { Newsreader, Inter, Noto_Serif_Malayalam } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ThemeScript from "@/components/ThemeScript";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoMalayalam = Noto_Serif_Malayalam({
  subsets: ["malayalam"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-malayalam",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vineethkolarath.com"),
  title: {
    default: "Vineeth K Kolarath",
    template: "%s · Vineeth K Kolarath",
  },
  description:
    "Mentor, teacher and builder. Writing, books, research, sessions and webinars from Koodali, Kannur, Kerala.",
  openGraph: {
    title: "Vineeth K Kolarath",
    description:
      "Mentor, teacher and builder. Writing, books, research, sessions and webinars from Koodali, Kannur, Kerala.",
    siteName: "Vineeth K Kolarath",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${inter.variable} ${notoMalayalam.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-screen flex-col">
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}