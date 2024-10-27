import CustomerServiceForm from "@/pages/User/CustomerServiceForm";
import FeedbackPage from "@/pages/User/FeedbackPage";

import MyBookings from "@/pages/User/MyBookings";
import Profile from "@/pages/User/Profile";
import UpdateProfileInfo from "@/pages/User/UpdateProfileInfo";

export const userRoutes = [
  {
    index: true,
    path: "",
    element: <Profile />,
  },
  {
    index: true,
    path: "update-info",
    element: <UpdateProfileInfo />,
  },
  {
    index: true,
    path: "my-bookings",
    element: <MyBookings />,
  },
  {
    index: true,
    path: "customer-service",
    element: <CustomerServiceForm/>,
  },
  {
    index: true,
    path: "feedback",
    element: <FeedbackPage/> ,
  }
];
