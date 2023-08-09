import "./globals.css";
import { League_Spartan } from "next/font/google";

const inter = League_Spartan({ weight: ["500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Code-athon-1",
  description: "Code athon app for frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
