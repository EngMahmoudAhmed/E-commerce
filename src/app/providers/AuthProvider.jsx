// // providers/AuthProvider.jsx

// import supabase from "../../lib/supabase";
// import { useEffect } from "react";
// import { useQueryClient } from "@tanstack/react-query";

// const AuthProvider = ({ children }) => {
//   const queryClient = useQueryClient();

//   useEffect(() => {
//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (event, session) => {
//         if (event === "SIGNED_IN") {
//           queryClient.setQueryData(["user"], session.user);
//         }

//         if (event === "SIGNED_OUT") {
//           queryClient.setQueryData(["user"], null);
//         }
//       }
//     );

//     return () => listener.subscription.unsubscribe();
//   }, []);

//   return children;
// };

// export default AuthProvider;