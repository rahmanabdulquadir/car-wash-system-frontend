import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useAppSelector } from "@/redux/hooks";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import UpcomingSlotCountdown from "./UpcomingSlotCountdown";


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
    href: "/procced-booking",
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
              <img src="data:image/png;base64,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" className="w-[100px]" />
            </Link>
            <div className="center w-fit gap-[15px] pt-[0] pb-[10px]">
              <div className="hidden lg:flex">
                {navLinks.map(({ href, lebel }, i) => (
                  <Link
                    key={i}
                    to={href}
                    className={
                      navigationMenuTriggerStyle() +
                      " !bg-transparent !text-white font-[700] py-[0]"
                    }
                  >
                    {lebel}
                  </Link>
                ))}
              </div>

              {user ? (
                <Link
                  to={`/dashboard/${user.role == "admin" ? "admin" : "user"}`}
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
              <UpcomingSlotCountdown />
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