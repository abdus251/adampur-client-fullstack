import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart,  FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { IoIosPersonAdd } from "react-icons/io";
import { GrUserAdmin } from "react-icons/gr";
import { LiaSchoolSolid } from "react-icons/lia";
import { RiHomeGearLine } from "react-icons/ri";
import { TbCoinTaka } from "react-icons/tb";

const Dashboard = () => {
const [cart] = useCart();
const [isAdmin, isLoading] = useAdmin();

  // TODO: get isAdmin value from the database
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  return (
    <div className="flex ">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-sky-400 ">
        <ul className="menu">
          {
            isAdmin ? <>
            <li>
            <NavLink to="/dashboard/adminHome">
            <RiHomeGearLine />
              এডমিন হোম
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addStudents">
              <FaList></FaList>
              ভর্তিচ্ছু শিক্ষার্থী</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
            <IoIosPersonAdd />
              শিক্ষার্থী যুক্ত করুন</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
            <GrUserAdmin />
              শিক্ষার্থী ব্যবস্থাপনা</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
             <FaUsers></FaUsers>
              সব ইউজার</NavLink>
          </li>
          
            </>
            :
            <>
            <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              ইউজার হোম
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              আমার কার্ট ({cart.length})</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              রিভিউ এন্ড রেটিং</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
            <TbCoinTaka />
              অর্থ প্রদানের তথ্য</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addStudents">
              <FaList></FaList>
              ভর্তিচ্ছু শিক্ষার্থী</NavLink>
          </li>
            </>
          }
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              হোম
            </NavLink>
          </li>
          <li>
            <NavLink to="/primary">
            <LiaSchoolSolid />
              প্রাথমিক
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
            <FaEnvelope></FaEnvelope>
             যোগাযোগ
            </NavLink>
          </li>


        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
