import "./globals.css";
import { Geist, Poppins } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Portfolio - João Nhavene",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${geist.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-sans text-white">{children}</body>
    </html>
  );
}
