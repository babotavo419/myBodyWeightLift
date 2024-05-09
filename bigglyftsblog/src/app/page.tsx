'use client'

import HeroCarousel from "./components/HeroSection";
import MainSection from "./components/MainSection";
import SecoindSection from "./components/SecoindSection";
import ThirdSection from "./components/ThirdSection";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <MainSection />
      <SecoindSection />
      <ThirdSection />
    </div>
  )
}
