import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useAppSelector } from "@/redux/hooks";
import { LucideShoppingCart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    lebel: "Home",
    href: "/",
  },
  {
    lebel: "Services",
    href: "/services",
  },
  {
    lebel: "Booking",
    href: "/",
  },
];

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // event target
      const target = event.target as HTMLElement;
      // screent width
      const screen = window.screen.width;

      // ---**** return if the screen width is larger
      if (screen > 1024) {
        return;
      }

      // return if the user click on the drawer or the navbar
      if (target.closest(".myDrawer") || target.closest(".menuBTn")) {
        return;
      }

      setShowSidebar(false);
    };

    // hide sidebar on clicking outside
    if (showSidebar) {
      document.body.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showSidebar, setShowSidebar]);

  return (
    <header className=" bg-primaryMat/70 w-full">
      <div className="nav_shape sticky top-0 z-20 border-b-primaryMat border-b-[1px]">
        <div className="mx-auto layout_container">
          <div className="flex  items-center justify-between py-2">
            <Link to="/" className="flex items-center">
              <img src="/images/logo.png" className="w-[100px]" />
            </Link>
            <div className="center w-fit gap-[15px] pt-[0] pb-[10px]">
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                  <div className="flex justify-end">
                    <NavigationMenuItem>
                      {navLinks.map(({ href, lebel }, i) => (
                        <NavigationMenuLink
                          key={i}
                          href={href}
                          className={
                            navigationMenuTriggerStyle() +
                            " !bg-transparent !text-white font-[700] py-[0]"
                          }
                        >
                          {lebel}
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuItem>
                  </div>
                </NavigationMenuList>
              </NavigationMenu>
              {user ? (
                <Link
                  to={"/dashboard"}
                  className="text-[15px] text-white bg-primaryMat px-[10px] py-[5px] center rounded-full gap-[3px]"
                >
                  <CiUser /> Dashboard
                </Link>
              ) : (
                <Link
                  to={"/login"}
                  className="px-[18px] py-[5px] bg-primaryMat text-white rounded-full center gap-[10px]"
                >
                  Login <CiUser />
                </Link>
              )}
              <div className="center gap-[10px]">
                <Link to={"/cart"} className="text-primaryTxt relative">
                  <LucideShoppingCart />
                  <span className="absolute text-[12px] top-[-14px] right-[-10px] text-white bg-primaryMat shadow-md px-[5px] py-[3px] rounded-[8px]">
                    00
                  </span>
                </Link>
                <span className="font-[600] text-primaryMat">$0</span>
              </div>
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="md:hidden flex menuBTn"
              >
                {showSidebar ? <X /> : <Menu />}
              </button>
            </div>

            {/* sidebar */}
            <div
              className={`${
                showSidebar
                  ? "w-[300px] border-r-[1px] px-[20px] pt-[20px]"
                  : "w-[0px]"
              } bg-white left-0 top-0 fixed h-screen border-borderColor z-20 overflow-hidden myDrawer`}
              style={{ transition: "0.3s" }}
            >
              <Link to="/" className="flex items-center">
                <img src="/images/logo.png" className="w-[120px]" />
              </Link>
              <div className="w-full flex flex-col mt-[20px]">
                {navLinks.map(({ href, lebel }) => (
                  <NavLink
                    to={href}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-primaryMat text-white"
                          : "text-primaryTxt"
                      }  w-full px-[15px] py-[8px] rounded-[5px]`
                    }
                  >
                    {lebel}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;