import Image from "next/image";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import WhatWeDo from "./components/WhatWeDo";
import { WorldMapDemo } from "./components/WorldMapDemo";
import CountersSection from "./components/CountersSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
      <div className="relative w-full overflow-x-hidden">
        <Nav />
        <Hero />
        <Welcome />
        <WhatWeDo />
        <WorldMapDemo />
        <CountersSection />
        <Footer />
       </div>
  );
}
