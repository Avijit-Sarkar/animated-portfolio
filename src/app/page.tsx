import Collaboration from "@/sections/Collaboration";
import Hero from "@/sections/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative z-10 w-full overflow-x-clip">
        <Collaboration />
      </div>
    </main>
  );
}
