import Cursor from "@/components/ui/Cursor";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Adem Chebbi | ACX",
  description: "Full-Stack Developer • Founder of ACX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Cursor />
        {children}
      </body>
    </html>
  );
}