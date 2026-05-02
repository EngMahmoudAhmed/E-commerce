import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";

const AdminRoute = ({ children }) => {
    const { user, role, loading } = useAuth();
    if (loading) return <div>Loading...</div>;
    if (!user) return <Navigate to={"/login"} />;
    if (role !== 'admin') return <Navigate to={"/"} />;
    return children;
}

export default AdminRoute;