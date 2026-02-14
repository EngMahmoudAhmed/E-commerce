import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../component/layouts/MainLayout.jsx";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register.jsx";
import VerifyEmail from "../features/auth/VerifyEmail.jsx";
import Home from "../component/layouts/Home.jsx";
import Products from "../data/fakeProducts.jsx";
import AboutUs from "../component/layouts/AboutUs.jsx";
import ProtectedRoute from "../routes/ProtectedRoute.jsx";
import Cart from "../pages/Cart.jsx";
import Checkout from "../pages/CheckOut.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // كل شيء جوه MainLayout
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: (
          <Home />
        ),
      },
      {
        path: "/products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart /> ,
          </ProtectedRoute>),
      },
      {
        path: "/aboutus",
        element: (
          <AboutUs />
        ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "verify-email", element: <VerifyEmail /> },
      { path: "checkout", element: <Checkout /> }
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" replace />, // توجيه أي مسار غير معروف إلى الصفحة الافتراضية
  },
]);
