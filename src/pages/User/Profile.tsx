"use client";
import { useAppSelector } from "@/redux/hooks";
import { format } from "date-fns";
import { FaPen, FaCog, FaStar, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
  const { isLoading, user } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <></>;
  }

  return (
    <div className="w-full rounded-lg p-6  max-w-3xl mx-auto">
      {/* Profile Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Link
            to={"/dashboard/user/update-info"}
            className="w-32 h-32 rounded-full overflow-hidden relative group shadow-md"
          >
            <img
              src={user?.image || "/images/avatar.jpg"}
              alt="avatar"
              className="w-full h-full object-cover"
            />
            <span className="absolute inset-0 bg-black opacity-30 scale-0 group-hover:scale-100 flex items-center justify-center text-white duration-150">
              <FaPen size={18} />
            </span>
          </Link>
          <div>
            <h3 className="text-2xl font-semibold">{user?.firstName} {user?.lastName}</h3>
            <p className="text-gray-500">Member since: {format(new Date(user?.createdAt || "12-30-2024"), "MMM dd, yyy")}</p>
          </div>
        </div>
        <Link
          to="/dashboard/user/settings"
          className="flex items-center gap-1 px-3 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition-colors"
        >
          <FaCog /> Settings
        </Link>
      </div>

      {/* User Details */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h4>
          <p className="text-gray-600"><span className="font-medium">Email:</span> {user?.email}</p>
          <p className="text-gray-600 mt-1"><span className="font-medium">Phone:</span> {user?.phone || "N/A"}</p>
          <p className="text-gray-600 mt-1"><span className="font-medium">Location:</span> {user?.location || "N/A"}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Statistics</h4>
          <p className="text-gray-600"><FaStar className="inline text-yellow-500" /> Rating: {user?.rating || "N/A"}</p>
          <p className="text-gray-600 mt-1"><FaClock className="inline text-blue-500" /> Total Bookings: {user?.totalBookings || 0}</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h4>
        <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
          <p className="text-gray-600">- Booked a service on {format(new Date(), "MMM dd, yyy")}</p>
          <p className="text-gray-600">- Updated profile picture</p>
          <p className="text-gray-600">- Submitted a feedback</p>
        </div>
      </div>

      {/* Additional Links */}
      <div className="mt-8 flex gap-4">
        <Link
          to="/dashboard/user/reviews"
          className="flex-1 text-center py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          My Reviews
        </Link>
        <Link
          to="/dashboard/user/history"
          className="flex-1 text-center py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Service History
        </Link>
      </div>
    </div>
  );
};

export default Profile;
