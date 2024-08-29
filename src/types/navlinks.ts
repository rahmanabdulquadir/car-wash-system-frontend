import { IconType } from "react-icons";
import { CiUser, CiViewList } from "react-icons/ci";
import { GrServices } from "react-icons/gr";
export interface NavItem {
  href: string;
  title: string;
  Icon: IconType;
}

export const adminLinks: NavItem[] = [
  {
    href: "/dashboard/admin",
    Icon: GrServices,
    title: "Dashboard",
  },
  {
    href: "/dashboard/admin/manage-user",
    Icon: CiUser,
    title: "Manage Users",
  },
  {
    href: "/dashboard/admin/manage-slots",
    Icon: CiViewList,

    title: "Manage Slots",
  },
  {
    href: "/dashboard/admin/manage-bookings",
    Icon: CiUser,
    title: "Manage Bookings",
  },
];