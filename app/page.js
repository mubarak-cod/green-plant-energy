import Image from "next/image";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import WhatWeDo from "./components/WhatWeDo";
import { WorldMapDemo } from "./components/WorldMapDemo";


export default function Home() {
  return (
       <div className="h-full mb-40">
        <Nav />
        <Hero />
        <Welcome />
        <WhatWeDo />
        <WorldMapDemo />
       </div>
  );
}
