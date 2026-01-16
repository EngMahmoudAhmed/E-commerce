import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/layouts/MainLayout.jsx";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register.jsx";
import Home from "../component/layouts/Home.jsx";

// import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,  // كل شيء جوه MainLayout
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "/home", element: <Home /> },
    ],
  },
]);