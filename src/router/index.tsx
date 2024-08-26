import AuthLayout from "@/components/Layouts/AuthLayout";
import MainLayout from "@/components/Layouts/MainLayout";
import Booking from "@/pages/Booking/Booking";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import ServiceDetail from "@/pages/ServiceDetail/ServiceDetail";
import Services from "@/pages/Services/Services";
import NotFound from "@/pages/shared/NotFound";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
        element: <Booking />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: "login",
        element: <Login />,
      },
      {
        index: true,
        path: "register",
        element: <Register />,
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       index: true,
  //       path: "admin",
  //       element: <ServiceManage />,
  //     },
  //     {
  //       index: true,
  //       path: "register",
  //       element: <Register />,
  //     },
  //   ],
  // },
  {
    path: "*",
    element: <NotFound />,
  },
]);


export default router