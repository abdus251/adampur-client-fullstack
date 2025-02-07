import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../assets/pages/Login/Login";
import PrePrimary from "../assets/pages/PrePrimary/PrePrimary";
import ApplicationForm from "../pages/ApplicationForm/ApplicationForm";
import Primary from "../pages/Primary/Primary";
import Staff from "../pages/Staff/Staff";
import More from "../pages/More/More";
import Contact from "../pages/Contact/Contact";
import Academic from "../pages/Academic/Academic";
import Admission from "../pages/Admission/Admission";
import Mission from "../pages/Mission/Mission";
import Signup from "../assets/pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dahbard/Cart/Cart";
import AddStudents from "../pages/Dahbard/AddStudents/AddStudents";
import AllUsers from "../pages/Dahbard/AllUsers/AllUsers";
import Shop from "../assets/pages/Shop/Shop";
import AddItems from "../pages/Dahbard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dahbard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dahbard/UpdateItem/UpdateItem";
import Payment from "../pages/Dahbard/Payment/Payment";
import PaymentHistory from "../pages/Dahbard/PaymentHistory/PaymentHistory";
import AdminHome from "../pages/Dahbard/AdminHome/AdminHome";

import UserHome from "../pages/Dahbard/UserHome/UserHome"
import AddReview from "../pages/Dahbard/AddReview/AddReview";
import NotFound from "../pages/NotFound";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      },
      {
        path: "about",
        element: <Order></Order>,
      },
      {
        path: "student",
        element: <Menu></Menu>,
      },
      {
        path: "applicationForm",
        element: <ApplicationForm />,
        loader: () => fetch('http://localhost:5000')
      },
      {
        path: "prePrimary",
        element: <PrePrimary></PrePrimary>,
      },
      {
        path: "primary",
        element: <Primary></Primary>,
      },
      {
        path: "staff",
        element: <Staff></Staff>,
      },
//       {
// path: "student",
// element: <StudentPage></StudentPage>
//       },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "more",
        element: <More></More>,
      },
      {
        path: "academic",
        element: <Academic />,
      },
      {
        path: "admission",
        element: <Admission />,
      },
      {
        path: "mission",
        element: <Mission />,
      },
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // normal user routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "review",
        element: <AddReview></AddReview>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      //  admin only routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addStudents",
        element: <AddStudents></AddStudents>,
        loader: () => fetch("http://localhost:5000/student"),
      },
    ],
  },
]);
