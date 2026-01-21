import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../component/layouts/MainLayout.jsx";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register.jsx";
import VerifyEmail from "../features/auth/VerifyEmail.jsx";
import Home from "../component/layouts/Home.jsx";
import Products from "../data/fakeProducts.jsx";
import AboutUs from "../component/layouts/AboutUs.jsx";
import ProtectedRoute from "../routes/ProtectedRoute.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // كل شيء جوه MainLayout
    children: [
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
        path: "/aboutus",
        element: (
            <AboutUs />
        ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "verify-email", element: <VerifyEmail /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/register" />, // توجيه أي مسار غير معروف إلى صفحة Register
  },
  {
    path: "*",
    element: <Home />, // توجيه أي مسار غير معروف إلى صفحة Register
  },
]);
