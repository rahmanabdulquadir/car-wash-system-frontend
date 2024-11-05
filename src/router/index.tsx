import AdminDashboardLayout from "@/components/Layouts/AdminDashboardLayout";
import AuthLayout from "@/components/Layouts/AuthLayout";
import NotFound from "@/pages/shared/NotFound";
import UserDashboardLayout from "@/components/Layouts/UserDashboardLayout";
import { createBrowserRouter } from "react-router-dom";
import { adminRoutes } from "./admin.route";
import { authRoutes } from "./auth.route";
import MainLayout from "@/components/Layouts/MainLayout";
import AdminProtectedRoute from "@/ProtectRoutes/AdminProtectedRoute";
import UserProtectedRoutes from "@/ProtectRoutes/UserProtectedRoutes";
import { pageRoutes } from "./pages.route";
import { userRoutes } from "./user.route";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [...pageRoutes],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [...authRoutes],
  },
  {
    path: "/dashboard/admin",
    element: (
      <AdminProtectedRoute>
        <AdminDashboardLayout />
      </AdminProtectedRoute>
    ),
    children: [...adminRoutes],
  },
  {
    path: "/dashboard/user",
    element: (
      <UserProtectedRoutes>
        <UserDashboardLayout />
      </UserProtectedRoutes>
    ),
    children: [...userRoutes],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
