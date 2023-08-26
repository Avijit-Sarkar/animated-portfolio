import About from "@/sections/About";
import Carosul from "@/sections/Carosul";
import Collaboration from "@/sections/Collaboration";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Streamlined from "@/sections/Streamlined";
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
      </div>
    </main>
  );
}
