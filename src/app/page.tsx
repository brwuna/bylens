import { SectionCards } from "@/components/SectionCards";
import { SectionHero } from "@/components/SectionHero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionCards />
    </>
  );
}
