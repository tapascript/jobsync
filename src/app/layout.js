import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JobSync",
  description: "Sync your skills to requirements and get started with your job.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen p-8">
          {children}
        </div>
      </body>
    </html>
  );
}
