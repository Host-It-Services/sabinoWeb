import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata = {
  title: "Sabino Holdings", // Set your title here
  description: "Professional construction services", // Optional description
  icons: {
    icon: "/icontab.png", // Path to your favicon image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Title and favicon */}
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
