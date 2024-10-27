import AboutUs from "@/components/home/AboutUs";
import FAQ from "@/components/home/FAQ";
import FeaturedServices from "@/components/home/FeaturedServices";
import Gallery from "@/components/home/Gallery";
import HeroSection from "@/components/home/HeroSection";
import Reviews from "@/components/home/Reviews";

const HomeView = () => {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <FeaturedServices />
      <AboutUs/>
      <Reviews />
      <Gallery/>
      <FAQ/>
    </div>
  );
};

export default HomeView;