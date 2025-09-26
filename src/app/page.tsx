import { Metadata } from "next";
import { SITE_NAME } from "@/app/constants";
import { FooterWidget, HowBecomeMemberWidget, StartWidget } from "@/widgets";

export const metadata: Metadata = {
  title: "Главная" + SITE_NAME,
};

export default function Home() {
  return (
    <div className={"flex flex-col w-full h-full"}>
      <StartWidget />

      <HowBecomeMemberWidget />

      <FooterWidget />
    </div>
  );
}
