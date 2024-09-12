import HeroCarousel from "./components/HeroSection";
import SecoindSection from "./components/SecoindSection";
// import ThirdSection from "./components/ThirdSection";
import Benefits from "./components/Benefits";
import Features from "./components/Features";

export const revalidate = 60; // in seconds

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <Benefits />
      <Features />
      <SecoindSection />
      {/* <ThirdSection /> */}
    </div>
  )
}
