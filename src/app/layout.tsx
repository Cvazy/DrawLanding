import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME } from "@/app/constants";
import { Header } from "@/widgets";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },

  description: "Подтверди возраст – выиграй фитнес!",

  icons: {
    icon: "/favicon.ico",
  },
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <div
          className={
            "flex flex-col justify-center min-h-dvh w-full h-max relative"
          }
        >
          <Header />

          <main className={"flex flex-grow w-full"}>
            <div className={"flex justify-center w-full"}>
              <div className={"w-full h-full"}>{children}</div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
