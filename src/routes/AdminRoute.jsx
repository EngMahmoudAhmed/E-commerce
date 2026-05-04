import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";

const AdminRoute = ({ children }) => {
    const { user, role, loading, } = useAuth();
    if (loading) return <div>Hello...</div>;
    if (!user) return <Navigate to={"/login"} />;
    if (role !== 'admin') return <Navigate to={"/products"} />;
    
    // console.log("role");
    // console.log(user);
    
    // if (role === 'admin') return <Navigate to={"/dashboard"} />;
    return children;
}

export default AdminRoute;