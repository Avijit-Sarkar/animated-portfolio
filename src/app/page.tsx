import About from "@/sections/About";
import Carosul from "@/sections/Carosul";
import Collaboration from "@/sections/Collaboration";
import CtaSection from "@/sections/CtaSection";
import Hero from "@/sections/Hero";
import HorizontalScroller from "@/sections/HorizontalScroller";
import Logocloud from "@/sections/Logocloud";
import Services from "@/sections/Services";
import Stats from "@/sections/Stats";
import Streamlined from "@/sections/Streamlined";
import Teams from "@/sections/Teams";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative z-10 w-full overflow-x-clip">
        <Collaboration />
        <About />
        <Streamlined />
        <Services />
        <Carosul />
        <CtaSection />
        <Logocloud />
        <Stats />
        <HorizontalScroller />
        <Teams />
      </div>
    </main>
  );
}
