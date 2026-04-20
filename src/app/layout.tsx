import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#0a0618",
};

export const metadata: Metadata = {
  title: "DVYS - Lucky Jet",
  description: "DVYS Lucky Jet Predictor",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: "https://1play.gamedev-tech.cc/lucky_grm/assets/media/3caa6b7c2d37c3ae0bd198c86b81bb13.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
