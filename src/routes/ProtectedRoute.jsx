import { Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Skeleton / Spinner
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!user.email_confirmed_at) {
    return <Navigate to="/verify-email" />;
  }

  return children;
}

export default ProtectedRoute;
// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children, user }) {
//   if (!user) return <Navigate to="/login" />;

//   if (!user.email_confirmed_at) {
//     return <Navigate to="/verify-email" />;
//   }

//   return children;
// }