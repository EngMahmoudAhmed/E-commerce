import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/layouts/MainLayout.jsx";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register.jsx";
import Home from "../component/layouts/Home.jsx";
import Products from "../data/fakeProducts.jsx";
import AboutUs from "../component/layouts/AboutUs.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,  // كل شيء جوه MainLayout
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "/home", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/aboutus", element: <AboutUs /> },
      {}


    ],
  },
]);