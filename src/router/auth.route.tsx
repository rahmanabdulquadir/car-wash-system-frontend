import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";

export const authRoutes = [
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
]