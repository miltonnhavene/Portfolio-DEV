import "./globals.css";
import { Geist, Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400","600","700"], variable: "--font-poppins", display: "swap" });

export const metadata = { title: "Portfolio - João Nhavene", description: "" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${geist.variable} ${poppins.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
