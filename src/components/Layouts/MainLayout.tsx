import Footer from "@/pages/shared/Footer";
import Navbar from "@/pages/shared/Navbar";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  useEffect(() => {
    window.onbeforeunload = function () {
      return;
    };
  });
  return (
    <div className="">
     <Navbar/>
     <Outlet/>
     <Footer/>
    </div>
  );
};

export default MainLayout;