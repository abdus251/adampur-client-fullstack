import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart, FaAd, FaList, FaUsers, FaEnvelope } from "react-icons/fa";
import { RiHomeGearLine } from "react-icons/ri";
import { IoIosPersonAdd } from "react-icons/io";
import { GrUserAdmin } from "react-icons/gr";
import { TbCoinTaka } from "react-icons/tb";
import { LiaSchoolSolid } from "react-icons/lia";
import useCart from "../hooks/useCart"; // Custom hook for cart state
import useAdmin from "../hooks/useAdmin"; // Custom hook for admin state

const Dashboard = () => {
  const [cart] = useCart(); // Retrieve cart data
  const [isAdmin, isLoading] = useAdmin(); // Retrieve admin status

  // Show a loading spinner while fetching admin data
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex">
    {/* Sidebar */}
    <div className="w-64 min-h-screen bg-sky-400 text-white font-noto-sans-bengali">
      <ul className="menu p-4">
        {isAdmin ? (
          <>
            <li>
              <NavLink
                to="/dashboard/adminHome"
                className={({ isActive }) =>
                  isActive ? "bg-sky-500 text-white font-semibold shadow-md" : "hover:text-gray-200"
                }
              >
                <RiHomeGearLine className="text-orange-500 font-semibold" />
                এডমিন হোম
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/addStudents"
                className={({ isActive }) =>
                  isActive ? "bg-sky-500 text-white font-semibold shadow-md" : "hover:text-gray-200"
                }
              >
                <FaList className="text-orange-500 font-semibold" />
                ভর্তিচ্ছু শিক্ষার্থী
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/addItems"
                className={({ isActive }) =>
                  isActive ? "bg-sky-500 text-white font-semibold shadow-md" : "hover:text-gray-200"
                }
              >
                <IoIosPersonAdd className="text-orange-500 font-semibold"/>
                শিক্ষার্থী যুক্ত করুন
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manageItems"
                className={({ isActive }) =>
                  isActive ? "bg-sky-500 text-white font-semibold shadow-md" : "hover:text-gray-200"
                }
              >
                <GrUserAdmin className="text-orange-500 font-semibold"/>
                শিক্ষার্থী ব্যবস্থাপনা
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/users"
                className={({ isActive }) =>
                  isActive ? "bg-sky-500 text-white font-semibold shadow-md" : "hover:text-gray-200"
                }
              >
                <FaUsers className="text-orange-500 font-semibold" />
                সব ইউজার
              </NavLink>
            </li>
           
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/dashboard/userHome"
                className={({ isActive }) =>
                  isActive ? "bg-sky-500 text-white font-semibold shadow-md" : "hover:text-gray-200"
                }
              >
                <FaHome className="text-orange-500 font-semibold" />
                ইউজার হোম
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/cart"
                className={({ isActive }) =>
                  isActive ? "bg-sky-500 text-white font-semibold shadow-md" : "hover:text-gray-200"
                }
              >
                <FaShoppingCart className="text-orange-500 font-semibold"/>
                আমার কার্ট ({cart.length})
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/review"
                className={({ isActive }) =>
                  isActive ? "bg-sky-500 text-white font-semibold shadow-md" : "hover:text-gray-200"
                }
              >
                <FaAd className="text-orange-500 font-semibold"/>
                রিভিউ এন্ড রেটিং
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/paymentHistory"
                className={({ isActive }) =>
                  isActive ? "bg-sky-500 text-white font-semibold shadow-md" : "hover:text-gray-200"
                }
              >
                <TbCoinTaka />
                অর্থ প্রদানের তথ্য
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/addStudents"
                className={({ isActive }) =>
                  isActive ? "bg-sky-500 text-white font-semibold shadow-md" : "hover:text-gray-200"
                }
              >
                <FaList className="text-orange-500 font-semibold"/>
                ভর্তিচ্ছু শিক্ষার্থী
              </NavLink>
            </li>
          </>
        )}
  
        {/* Shared Links */}
        <div className="divider border-gray-200 my-2"></div>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-sky-500 text-white font-semibold shadow-md" : "hover:text-gray-200"
            }
          >
            <FaHome className="text-orange-500 font-semibold" />
            হোম
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/primary"
            className={({ isActive }) =>
              isActive ? "bg-sky-500 text-white font-semibold shadow-md" : "hover:text-gray-200"
            }
          >
            <LiaSchoolSolid className="text-orange-500 font-semibold"/>
            প্রাথমিক
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "bg-sky-500 text-white font-semibold shadow-md" : "hover:text-gray-200"
            }
          >
            <FaEnvelope className="text-orange-500 font-semibold"/>
            যোগাযোগ
          </NavLink>
        </li>
      </ul>
    </div>
  
    {/* Content Area */}
    <div className="flex-1 p-8">
      <Outlet /> {/* Renders nested routes */}
    </div>
  </div>
  
  );
};

export default Dashboard;

