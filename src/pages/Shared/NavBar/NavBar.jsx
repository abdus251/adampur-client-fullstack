import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import { motion } from "framer-motion";


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
    <nav className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between overflow-auto font-noto-sans-bengali">
    {/* Navigation Links */}
    <ul className="flex flex-wrap items-start lg:flex-row">
      <li className="font-noto-sans-bengali my-2"><Link to="/">হোম</Link></li>
      <li className="font-noto-sans-bengali my-2 lg:ml-5"><Link to="/about">আমাদের সম্পর্কে</Link></li>
      <li className="font-noto-sans-bengali my-2 lg:ml-5"><Link to="/applicationForm">ভর্তি ফরম</Link></li>
      {/* Cart Button */}
      <li>
    <Link to="/dashboard" className="my-2 lg:ml-5 font-noto-sans-bengali">
     ড্যাশবোর্ড
    </Link>
    </li>
      <li className="font-noto-sans-bengali my-2 lg:ml-5"><Link to="/prePrimary">প্রাক-প্রাথমিক</Link></li>
      <li className="font-noto-sans-bengali my-2 lg:ml-5"><Link to="/primary">প্রাথমিক</Link></li>
      <li className="font-noto-sans-bengali my-2 lg:ml-5 relative">
        <details>
          <summary className="cursor-pointer">জনবল</summary>
          <ul className=" p-2">
            <li><Link to="/staff">শিক্ষক</Link></li>
            <li><Link to="/student">শিক্ষার্থী</Link></li>
            <li><Link to="/committe">কমিটি</Link></li>
          </ul>
        </details>
      </li>
 {/* Login/Logout */}
 <li className=" lg:ml-5 ">
      {user ? (
        <button onClick={handleLogOut} className="btn btn-ghost font-noto-sans-bengali">লগআউট</button>
      ) : (
        <Link to="/login" className="font-noto-sans-bengali">লগইন</Link>
      )}
    </li>
      
      <li className="font-noto-sans-bengali my-2 lg:ml-10"><Link to="/shop">সততা স্টোর</Link></li>
      <li className="font-noto-sans-bengali my-2 lg:ml-10 relative">
        <details>
          <summary className="cursor-pointer">আরো</summary>
          <ul className=" p-2">
            <li><Link to="/academic">একাডেমিক</Link></li>
            <li><Link to="/admission">ভর্তি</Link></li>
            <li><Link to="/mission">মিশন ও ভিশন</Link></li>
          </ul>
        </details>
      </li>
    </ul>
    <li className="font-noto-sans-bengali my-2 lg:ml-10"><Link to="/contact">যোগাযোগ</Link></li>
  </nav>
  );
  const introChildren = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5} },
  };
  
  return (
    <>
      {/* Logo Section */}
      <div className="flex items-center justify-center my-3 w-full">
  <motion.div
          className=""
          variants={introChildren}
          initial="hidden"
          animate="visible"
        >
          <div className="text-2xl text-right text-sky-400 font-bold font-noto-sans-bengali mr-5">
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
          </div>
        </motion.div>
      <a className="flex gap-5 justify-center items-center">
        <div>
          <img className="h-24 w-24" src="/Adompur logo.jpg" alt="Adompur Logo" />

        </div>
        <div className="flex flex-col text-left mr-5 font-noto-sans-bengali text-sky-400 font-bold">
 
  <span className="block">
    <span className="text-orange-400">স্থ</span>াপিত: ১৯৬৯ খ্রি.
  </span>
  <span className="block">
    <span className="text-orange-400">মো</span>বাইল: (+৮৮০) ১৯১৩৪৭৫১৭৯
  </span>
  <span className="block">
    <span className="text-orange-400">ই</span>মেইল: adampurgps6@gmail.com
  </span>
  <span className="block">
    <span className="text-orange-400">E</span>MIS: 311020105
  </span>
</div>


      </a>
    </div>
    
{/* navbar */}
      <div className="navbar relative z-10 bg-opacity-30 bg-sky-400 max-w-screen-xl">
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
