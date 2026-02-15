// import { useEffect, useState } from "react";
// import supabase from "../lib/supabase";
// import { useNavigate } from "react-router-dom";

// export function useAuth() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // 1️⃣ Initial session load
//     supabase.auth.getSession().then(({ data }) => {
//       setUser(data.session?.user ?? null);
//       setLoading(false);

//       // 🔥 CLEAN URL after auth redirect
//       if (window.location.hash) {
//         window.history.replaceState(
//           {},
//           document.title,
//           window.location.pathname
//         );
//       }
//     });

//     // 2️⃣ Listen to auth state changes
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user ?? null);
//       setLoading(false);

//       // ✅ Redirect after login/signup
//       if (session?.user) {
//         navigate("/home");
//       }
//     });

//     return () => subscription.unsubscribe();
//   }, [navigate]);

//   return { user, loading };
// }



import { useEffect, useState } from "react";
import supabase from "../lib/supabase";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial load
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    // if (window.location.hash) {
    //     window.history.replaceState(
    //       {},
    //       document.title,
    //       window.location.pathname
    //     );
    //   }
    // });

    // Listen to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { user, loading };
}