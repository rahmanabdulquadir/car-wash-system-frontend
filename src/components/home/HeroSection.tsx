import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { MdArrowForwardIos } from "react-icons/md";
import { Card, CardContent } from "../ui/card";

export const RenderNewLine = ({ text }: { text: string }) => {
  return text.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
};
const HeroSection = () => {
  const sliderData = [
    {
      id: 3,
      image: "/images/banner3.jpg",
      heading: "Caring service for your car",
      desc: "Discover top-tier fitness equipment designed to take your workouts to the next level.",
    },
    {
      id: 1,
      image: "/images/banner1.jpg",
      heading: "Interior & Exterior cleaning",
      desc: "Discover top-tier fitness equipment designed to take your workouts to the next level.",
    },
    {
      id: 2,
      image: "/images/banner2.jpg",
      heading: "Fully automatic machine",
      desc: "Discover top-tier fitness equipment designed to take your workouts to the next level.",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Carousel
        className="overflow-hidden h-screen "
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className="flex">
          {sliderData.map((slider) => (
            <CarouselItem key={slider.id} className="min-w-full">
              <Card className="bg-transparent rounded-none border-none shadow-none">
                <CardContent className="flex items-center justify-center h-full p-0 w-full">
                  <div
                    className="relative w-full h-screen overflow-hidden"
                    style={{ transition: "0.3s" }}
                  >
                    <div className="overlay" />
                    <img
                      src={slider.image}
                      className="absolute z-[1]  top-0 left-0 h-full w-full object-cover ani_image"
                      alt=""
                    />

                    <div className="relative z-[21] w-full h-full  flex-col center pl-[50px] bg-[#00000011] gap-[5px]">
                      <h4 className="text-center font-[700] uppercase hero_title text-primaryMat tracking-[7px]">
                        top class cleaning
                      </h4>
                      <h1 className="text-[20px] sm:text-[30px] hero_title lg:text-[90px] font-[700] text-white capitalize">
                        <RenderNewLine text={slider.heading} />
                      </h1>
                      <p className="max-w-[550px] text-white text-center  text-[12px] sm:text-[14px] lg:text-[16px]">
                        {slider.desc}
                      </p>
                      <div className="center gap-[10px]">
                        <Link
                          to={"/"}
                          className="center gap-[5px] px-[40px] py-[12px] rounded-full bg-primaryMat/80 text-white mt-[20px] text-[25px]"
                        >
                          Book a Slot <MdArrowForwardIos />
                        </Link>
                        <Link
                          to={"/"}
                          className="center gap-[5px] px-[40px] py-[12px] rounded-full bg-white text-primaryMat mt-[20px] text-[25px]"
                        >
                          Explore <MdArrowForwardIos />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9664;
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9654;
        </CarouselNext>
      </Carousel>
    </div>
  );
};
export default HeroSection;
