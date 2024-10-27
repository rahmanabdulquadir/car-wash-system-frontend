import SectionHeading from "@/components/ui/sectionHeading";
import { serviceData, TFeaturedService } from "@/mock/service";
import { addServiceToCompare } from "@/redux/features/service/serviceComparison.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRightIcon, CheckIcon, ClockIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const FeaturedServices = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();

  const { selectedServices } = useAppSelector((state) => state?.comparison);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const features = [
    "Seats washing",
    "Vacuum cleaning",
    "Interior wet cleaning",
    "Window wiping",
    "Tire cleaning",
    "Wax coating",
  ];

  return (
    <div className="w-full carbon_fiber pt-[60px] px-[20px]">
      <SectionHeading
        description="Top 6 populer offer to chose from use. Best featured services"
        heading="Our top featured services"
        slogan="Our services"
      />
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="mt-[20px]"
      >
        <CarouselContent>
          {serviceData.map((data: TFeaturedService) => (
            <CarouselItem key={data.name}>
              <div className="flex container !px-[0] mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex-row flex-col">
                <div className="w-full md:w-1/2 relative">
                  <img
                    src={data.image}
                    alt="Service Image"
                    className="object-cover w-full h-full"
                    width="640"
                    height="512"
                    style={{ aspectRatio: "640/512", objectFit: "cover" }}
                  />
                  <div className="absolute center gap-[5px] bottom-4 left-1/2 flex items-center">
                    <CarouselNext className="text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
                      &#9654;
                    </CarouselNext>
                    <span className="text-white font-[800]">
                      {current} of {count}
                    </span>
                    <CarouselPrevious className="text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
                      &#9664;
                    </CarouselPrevious>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8 transition-transform transform hover:scale-105 hover:shadow-xl bg-white rounded-lg shadow-md border border-gray-200">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800 hover:text-green-500 transition-colors duration-300">
                    {data.name}
                  </h2>
                  <div className="flex items-center mb-4 text-gray-700">
                    <ClockIcon className="h-6 w-6 text-green-600" />
                    <span className="ml-2 text-lg">{data.duration} min</span>
                  </div>
                  <p className="text-gray-600 mb-6">{data.description}</p>
                  <ul className="space-y-3 mb-6">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="ml-4 py-3 font-bold text-3xl text-green-600">
                    {data.price}$
                  </h2>
                  <Button
                    className={`${
                      selectedServices.includes(data)
                        ? "bg-green-500"
                        : "bg-red-500"
                    } text-white px-6 py-3 rounded-full transition-colors duration-300 hover:bg-opacity-90 flex items-center justify-center`}
                    onClick={() => dispatch(addServiceToCompare(data))}
                  >
                    {selectedServices.includes(data)
                      ? "Remove from Compare"
                      : "Add to Compare"}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default FeaturedServices;
