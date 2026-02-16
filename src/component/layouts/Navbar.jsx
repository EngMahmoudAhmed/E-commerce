import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../lib/supabase";
import { useAuth } from "../../context/auth/AuthContext";
import { useTheme } from "../../context/theme/ThemeContext";
import { CartContext } from "../../context/cart/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    closeMenu();
    navigate("/login");
  };

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "AboutUs", path: "/aboutus" },
    { name: "Products", path: "/products" },
  ];

  return (
    <>
      <header className="p-3 px-5 top-0 left-0 right-0 z-100 fixed backdrop-blur-md shadow-xl ">
        <div className="mx-auto flex h-16 w-full items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link to={user ? "/home" : "/home"} className="block text-teal-600 dark:text-teal-300">
            <span className="sr-only">Home</span>
            <img src="../../../public/download.png" alt="logo.img" width={50} className="rounded-2xl" />
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="mr-2 cursor-pointer inline-flex items-center justify-center rounded-md p-2 bg-gray-200 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? ("🌙" ) : ("☀️")}
              </button>

              {user && (
                <Link to="/cart">
                  Cart 🛒 ({cartCount})
                </Link>
              )}

              {/* Show Login/Register only when user is NOT logged in */}
              {!user && (
                <div className="hidden sm:flex sm:gap-4">
                  <Link
                    className="cursor-pointer block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                    to="/login"
                  >
                    Login
                  </Link>

                  <Link
                    className="cursor-pointer hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                    to="/register"
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* Show User Info and Logout when user IS logged in */}
              {user && (
                <div className="hidden sm:flex sm:items-center sm:gap-4">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="block rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}

              <button
                onClick={toggleMenu}
                className="cursor-pointer block rounded-sm p-2.5 transition  md:hidden "
                aria-label="Toggle menu"
              >
                <span className="sr-only">Toggle menu</span>
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg border-t border-gray-200 z-50">
            <nav aria-label="Mobile navigation" className="px-4 py-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className="block px-4 py-3 rounded-md hover:bg-gray-100 transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                {/* Show Login/Register in mobile menu only when NOT logged in */}
                {!user && (
                  <>
                    <li className="border-t border-gray-200 pt-2 mt-2">
                      <Link
                        to="/login"
                        onClick={closeMenu}
                        className="block px-4 py-3 rounded-md bg-teal-600 text-white text-center hover:bg-teal-700 transition"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        onClick={closeMenu}
                        className="block px-4 py-3 rounded-md bg-gray-100 text-teal-600 text-center hover:bg-gray-200 transition"
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}

                {/* Show User Info and Logout in mobile menu when logged in */}
                {user && (
                  <>
                    <li className="border-t border-gray-200 pt-2 mt-2">
                      <div className="px-4 py-3 text-sm text-gray-600">
                        {user.email}
                      </div>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full block px-4 py-3 rounded-md bg-red-600 text-white text-center hover:bg-red-700 transition"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* spacer to avoid content being covered by fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;