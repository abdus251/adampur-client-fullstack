import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import logo from "../../../../public/Adompur logo.jpg";
import { AuthContext } from "../../../providers/AuthProvider";
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:justify-between">
      {/* Navigation Links */}
      <li className="font-noto-sans-bengali my-2 lg:my-0">
        <Link to="/">হোম</Link>
      </li>
  
      <li className="font-noto-sans-bengali my-2 lg:my-0 lg:ml-5">
        <Link to="/about">আমাদের সম্পর্কে</Link>
      </li>
  
      <li className="font-noto-sans-bengali my-2 lg:my-0 lg:ml-5">
        <Link to="/applicationForm">আবেদন ফরম</Link>
      </li>
  
      {user && isAdmin && (
        <li className="font-noto-sans-bengali my-2 lg:my-0">
          <Link to="/dashboard/userHome">ড্যাশবোর্ড</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li className="font-noto-sans-bengali my-2 lg:my-0">
          <Link to="/dashboard/userHome">ড্যাশবোর্ড</Link>
        </li>
      )}
  
      {/* Cart Button */}
      <Link to="/dashboard/cart">
        <button className="btn my-2 lg:my-0">
          <MdOutlineShoppingCart />
          {cart?.length > 0 && (
            <div className="badge badge-secondary">+{cart.length}</div>
          )}
        </button>
      </Link>
  
      <li className="font-noto-sans-bengali my-2 lg:my-0 lg:ml-5">
        <Link to="/prePrimary">প্রাক-প্রাথমিক</Link>
      </li>
      <li className="font-noto-sans-bengali my-2 lg:my-0 lg:ml-5">
        <Link to="/primary">প্রাথমিক</Link>
      </li>
      <li className="font-noto-sans-bengali my-2 lg:my-0 lg:ml-5">
        <Link to="/staff">জনবল</Link>
      </li>
      <li className="font-noto-sans-bengali my-2 lg:my-0 lg:ml-5">
        <Link to="/contact">যোগাযোগ</Link>
      </li>
      <li className="font-noto-sans-bengali my-2 lg:my-0 lg:ml-5">
        <Link to="/shop">সততা স্টোর</Link>
      </li>
  
      {/* More Dropdown */}
      <div className="navbar-center lg:hidden flex flex-col items-start my-2">
        <details>
          <summary className="font-noto-sans-bengali">আরো</summary>
          <ul className="p-2">
            <li>
              <Link to="/academic" className="py-2 hover:bg-gray-100 font-noto-sans-bengali">
                একাডেমিক
              </Link>
            </li>
            <li>
              <Link to="/admission" className="py-2 hover:bg-gray-100 font-noto-sans-bengali">
                ভর্তি
              </Link>
            </li>
            <li>
              <Link to="/mission" className="py-2 hover:bg-gray-100 font-noto-sans-bengali">
                মিশন ও ভিশন
              </Link>
            </li>
          </ul>
        </details>
      </div>
  
      {/* Login/Logout */}
      <li className="items-center justify-center my-2 lg:my-0">
        {user ? (
          <button onClick={handleLogOut} className="btn btn-ghost font-noto-sans-bengali">
            লগআউট
          </button>
        ) : (
          <Link to="/login" className="font-noto-sans-bengali">লগইন</Link>
        )}
      </li>
    </div>
  );
  
  return (
    <>
      {/* Logo Section */}
      <div className="flex items-center justify-center my-3 ">
        <a className="flex gap-5 justify-center items-center">
          <img className="h-24 w-24" src={logo} alt="Adompur School Logo" />
          <span className="text-2xl text-sky-400 font-bold font-noto-sans-bengali">
           <span className="text-orange-400">আ</span>দমপুর <br /> 
           <span className="text-orange-400">স</span>
           রকারি 
           <span className="text-orange-400">  প্রা</span>
           থমিক 
           <span className="text-orange-400"> বি</span>
          দ্যালয়, <br /> 
          <span className="text-orange-400"> ব</span>
          ন্দর, 
          <span className="text-orange-400"> না</span>
          রায়ণগঞ্জ
          </span>
        </a>
      </div>
{/* navbar */}
      <div className="navbar fixed z-10 bg-opacity-30 bg-sky-400 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex mr-40">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
