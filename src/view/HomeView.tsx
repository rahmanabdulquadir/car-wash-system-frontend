import FAQ from "@/components/home/FAQ";
import FeaturedServices from "@/components/home/FeaturedServices";
import Gallery from "@/components/home/Gallery";
import HeroSection from "@/components/home/HeroSection";
import Reviews from "@/components/home/Reviews";

const HomeView = () => {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <Reviews />
      <Gallery/>
      <FAQ/>
    </>
  );
};

export default HomeView;