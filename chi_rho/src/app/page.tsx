import HeroCarousel from "./components/HeroSection";
import OurValuesSection from "./components/OurValues";
// import ThirdSection from "./components/ThirdSection";
import ProductsTiles from "./components/ProductsTiles";
import LatestArticle from "./components/LatestArticleTile";

export const revalidate = 60; // in seconds

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <ProductsTiles />
      <OurValuesSection />
      <LatestArticle
      imageUrl="/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg"
      title="Your Article Title"
      shortDescription="A brief description of your article"
      category="Article Category"
      author="Author Name"
      date="2023-04-15"
      longDescription="A more detailed description of your article content.. "
      />
      {/* <ThirdSection /> */}
    </div>
  )
}
