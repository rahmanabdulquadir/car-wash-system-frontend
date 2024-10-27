import FAQ from "@/components/home/FAQ";
import FeaturedServices from "@/components/home/FeaturedServices";
import HeroSection from "@/components/home/HeroSection";
import Reviews from "@/components/home/Reviews";

const HomeView = () => {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <Reviews />
      <FAQ/>
    </>
  );
};

export default HomeView;