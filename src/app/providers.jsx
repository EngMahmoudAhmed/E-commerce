import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import AuthProvider from "../context/AuthContext";
import ThemeProvider from "../context/ThemeContext";

export const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          pauseOnHover
          draggable
        />
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
};
