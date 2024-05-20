import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import { DashboardLayout } from "../Dashboard/DashboardLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../pages/Login";
import SignleBook from "../pages/shared/SignleBook";
import UploadBook from "../Dashboard/UploadBook";
import Dashboard from "../Dashboard/Dashboard";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";
import Signup from "../pages/Signup";
import Logout from "../pages/Logout";
import ErrorPage from "../pages/shared/ErrorPage";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import UnderDevelop from "../pages/underdevlop/UnderDevelop";
import Faq from "../pages/faq/Faq";
import Careers from "../pages/careers/Careers";
import Cart from "../pages/cart/Cart";
import SearchTitle from "../pages/seacthTitle/SearchTitle";
import Payment from "../pages/payment-confirm/Payment";
import DashboardDetai from "../Dashboard/DashboardDetai";
import Careers2 from "../pages/careers/careers2/Careers2";
import SingleJob from "../pages/careers/careers2/SingleJob";
import UserDashboard from "../Dashboard/UserDashboard";
import AdminPrivateRoute from "../PrivateRoute/AdminPrivateRoute";
import UserDashDeti from "../Dashboard/UserDashDeti";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/book/:id",
        element: <SignleBook />,
        loader: ({ params }) => fetch(`https://hasib-vai-backend.vercel.app/book/${params.id}`)
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      }, {
        path: "/underdevlop",
        element: <UnderDevelop />
      }
      , {
        path: "/faq",
        element: <Faq />
      },
      {
        path: "/careers",
        element: <Careers />
      },
      {
        path: "/career/search/:title",
        element: <Careers2 />,
        loader: ({ params }) => fetch(`https://hasib-vai-backend.vercel.app/search-career-data/${params.title}`)
      },
      {
        path: "/career/search/result/:id",
        element: <SingleJob />,
        loader: ({ params }) => fetch(`https://hasib-vai-backend.vercel.app/search-career-single-data/${params.id}`)
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/search-book/:title",
        element: <SearchTitle />
      },
      {
        path: "/payment-confirm",
        element: <Payment />
      }
    ]
  },
  {
    path: "/admin/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      { path: "/admin/dashboard/admin", element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> },
      { path: "/admin/dashboard/user", element: <PrivateRoute><UserDashboard/></PrivateRoute> },
      { path: "/admin/dashboard/upload", element: <UploadBook /> },
      { path: "/admin/dashboard/manage", element: <ManageBooks /> },
      {
        path: "/admin/dashboard/edit-books/:id", element: <EditBooks />,
        loader: ({ params }) => fetch(`https://hasib-vai-backend.vercel.app/book/${params.id}`)
      },
      {
        path:'/admin/dashboard/dashboard-details/:id',
        loader: ({ params }) => fetch(`https://hasib-vai-backend.vercel.app/payment-single/${params.id}`),
        element: <DashboardDetai/>
      },
      {
        path:'/admin/dashboard/user-dashboard-details/:id',
        loader: ({ params }) => fetch(`https://hasib-vai-backend.vercel.app/payment-single/${params.id}`),
        element: <UserDashDeti/>
      }
    ],
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "/create-user",
    element: <Signup />
  },
  {
    path: "/logout",
    element: <Logout />
  }
]);

export default router;