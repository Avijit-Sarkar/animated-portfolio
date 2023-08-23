import About from "@/sections/About";
import Collaboration from "@/sections/Collaboration";
import Hero from "@/sections/Hero";
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
      </div>
    </main>
  );
}
