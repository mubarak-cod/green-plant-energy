import { Suspense } from "react";
import ChatWidget from "./components/ChatWidget";
import Image from "next/image";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import WhatWeDo from "./components/WhatWeDo";
import { WorldMapDemo } from "./components/WorldMapDemo";
import CountersSection from "./components/CountersSection";
import Footer from "./components/Footer";
import Loader from "./components/Loader";


export default function Home() {
  return (
      <div className="relative w-full overflow-x-hidden">
        <Nav />
        <Suspense fallback={<Loader />}>
       <Hero />
         <ChatWidget
        phone="+2348012345678"               // your WhatsApp number
        welcome="Hi! I’m your AI assistant 🤖 — how can I help today?"
        ctaText="Chat on WhatsApp"
        presetText="Hello! I’d like to speak with support."
      />
       </Suspense>
        <Welcome />
        <WhatWeDo />
        <WorldMapDemo />
        <CountersSection />
        <Footer />
       </div>
  );
}


// "use client";

// import { Suspense } from "react";
// import Image from "next/image";
// import Hero from "./components/Hero";
// import Nav from "./components/Nav";
// import Welcome from "./components/Welcome";
// import WhatWeDo from "./components/WhatWeDo";
// import { WorldMapDemo } from "./components/WorldMapDemo";
// import CountersSection from "./components/CountersSection";
// import Footer from "./components/Footer";


// function Loader() {
//   return (
//     <div className="flex items-center justify-center h-[400px]">
//       <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="relative w-full overflow-x-hidden">
//       <Nav />
      
     
//       <Suspense fallback={<Loader />}>
//         <Hero />
//       </Suspense>

//       <Welcome />
//       <WhatWeDo />
//       <WorldMapDemo />
//       <CountersSection />
//       <Footer />
//     </div>
//   );
// }

