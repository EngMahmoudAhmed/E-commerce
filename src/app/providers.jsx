import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import AuthProvider from "../context/auth/AuthContext";
import ThemeProvider, { useTheme } from "../context/theme/ThemeContext";
import { CartProvider } from "../context/cart/CartContext";
import { PaymentProvider } from "../context/payment/PaymentContext";
export const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <PaymentProvider>
            <ToastWithTheme />
            {children}
          </PaymentProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

const ToastWithTheme = () => {
  const { theme } = useTheme();
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      pauseOnHover
      draggable
      theme={theme === "dark" ? "dark" : "light"}
    />
  );
};
