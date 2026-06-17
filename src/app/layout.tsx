import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Cursor from "@/components/ui/Cursor";
import Loader from "@/components/ui/Loader";

export const metadata = {
  title: "ACX | Think, Believe, Make it Happen.",
  description:
    "ACX creates modern digital solutions, websites, applications and technology projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Loader />
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}