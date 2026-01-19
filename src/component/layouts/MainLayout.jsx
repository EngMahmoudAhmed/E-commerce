import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
