import AuthLayout from "@/components/Layouts/AuthLayout";
import MainLayout from "@/components/Layouts/MainLayout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
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

      // {
      //   index: true,
      //   path: "services",
      //   element: <Services />,
      // },
      // {
      //   index: true,
      //   path: "service/:id",
      //   element: <ServiceDetail />,
      // },
      // {
      //   path: "*",
      //   element: <NotFound />,
      // },
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
]);


export default router