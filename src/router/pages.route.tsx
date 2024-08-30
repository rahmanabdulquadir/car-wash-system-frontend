import Booking from "@/pages/Booking/Booking";
import Home from "@/pages/Home/Home";
import ServiceDetail from "@/pages/ServiceDetail/ServiceDetail";
import Services from "@/pages/Services/Services";
import UserProtectedRoutes from "@/ProtectRoutes/UserProtectedRoutes";
// import UserProtectedRoutes from "@/ProtectRoutes/UserProtectedRoutes";

export const pageRoutes = [
  {
    index: true,
    element: <Home />,
  },

  {
    index: true,
    path: "services",
    element: <Services />,
  },
  {
    index: true,
    path: "service/:id",
    element: <ServiceDetail />,
  },
  {
    index: true,
    path: "procced-booking",
    element: (
      <UserProtectedRoutes>
        <Booking />
      </UserProtectedRoutes>
      // <Booking />
    ),
  },
];
