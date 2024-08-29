export type TFeaturedService = {
  name: string;
  image: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
  id: string;
};
export const serviceData = [
  {
    id: "11",
    name: "Exterior Cleanup",
    image: "https://plus.unsplash.com/premium_photo-1661697732242-b502c58ead54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNhciUyMHdhc2glMjBFeHRlcmlvciUyMENsZWFudXB8ZW58MHx8MHx8fDA%3D",
    description:
      "A 30-minute session for an initial consultation where we will discuss your primary concerns, assess your needs, and plan the next steps to address your goals. This session serves as an introduction to our services.",
    price: 50,
    duration: 30,
    isDeleted: false,
  },
  {
    id: "22",
    name: "Interior Cleanup",
    image: "https://media.istockphoto.com/id/1800026265/photo/cleaning-car-interior-with-a-microfiber-towel.webp?b=1&s=612x612&w=0&k=20&c=ump_uY3DHqwPf0ETmrCi5OvmRXLZX2-Q7YyPmtqA5lM=",
    description:
      "A comprehensive one-hour therapy session designed to provide in-depth counseling and support. We will delve into ongoing issues, develop coping strategies, and work towards long-term solutions. Ideal for those seeking intensive support.",
    price: 150,
    duration: 60,
    isDeleted: false,
  },
  {
    id: "33",
    name: "Engine Service",
    image: "https://plus.unsplash.com/premium_photo-1661717357358-67ae75ca57cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwRW5naW5lJTIwU2VydmljZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "A personalized 45-minute session focusing on nutritional advice tailored to your specific health goals and dietary needs. This session includes a detailed analysis of your current diet and actionable recommendations for improvement.",
    price: 100,
    duration: 45,
    isDeleted: false,
  },
  {
    id: "44",
    name: "Engine oil change",
    image: "https://media.istockphoto.com/id/652660470/photo/auto-mechanic-service-and-repair.webp?b=1&s=612x612&w=0&k=20&c=NmIUe56gFWYidUF8OSgPftm1OyQW2TXEYe5Jr5eWhlA=",
    description:
      "A brief 20-minute session to review progress, address any concerns, and adjust the treatment plan as necessary. This session ensures that you stay on track and continue to make improvements towards your goals.",
    price: 30,
    duration: 20,
    isDeleted: false,
  },
  {
    id: "55",
    name: "Car battery chekup",
    image: "https://media.istockphoto.com/id/2148440620/photo/automotive-battery-tester-diagnosis-defective-battery.webp?b=1&s=612x612&w=0&k=20&c=_A6DfB_IYEtMxb4fhGQLI2nDRy8DhreP4_MlwWEBVO4=",
    description:
      "A 90-minute group session focusing on techniques to manage and reduce stress. Participants will learn about mindfulness, relaxation exercises, and practical tools to handle stressful situations effectively. Ideal for individuals or teams.",
    price: 200,
    duration: 90,
    isDeleted: false,
  },
  {
    id: "66",
    name: "Maintanance Advice",
    image: "https://media.istockphoto.com/id/1490208050/photo/woman-and-technician-talking-together-in-garage.webp?b=1&s=612x612&w=0&k=20&c=uiKPIudV314Mxk6gte1mHMKJEhc1gfoU9wIYvqrtxBw=",
    description:
      "This service has been marked as deleted and is no longer available. It was previously offered as a part of our program but has since been discontinued. Please refer to other available services for your needs.",
    price: 20,
    duration: 30,
    isDeleted: false,
  },
];