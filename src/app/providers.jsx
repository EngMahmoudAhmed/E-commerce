import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import AuthProvider from "../context/auth/AuthContext";
import ThemeProvider from "../context/theme/ThemeContext";
import { CartProvider } from "../context/cart/CartContext";
export const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            pauseOnHover
            draggable
          />
          {children}
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
