import { Inter } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Memo Notes",
  description: "Your more than needed styling notes app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="home-body" className={inter.className}>
        <Providers>

          {children}

        </Providers>

      </body>
    </html>
  );
}
