
import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";
import { ThemeProvider } from "../ui/ThemeProvider";
import DashboardHeader from "@/pages/shared/DashboardHeader";

const DashboardLayout = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="w-full h-screen flex items-start justify-start pb-[30px]">
        <Sidebar />
        <div className="w-full h-full flex-col flex">
          <DashboardHeader />
          <div className="h-full overflow-auto smoothBar">
            <Outlet />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;