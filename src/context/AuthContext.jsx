import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../lib/supabase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Load session on app start
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    // 2. Handle email confirmation callback
    // When user clicks the confirmation link, Supabase redirects with hash fragments
    supabase.auth.onAuthStateChange(async (event, session) => {
      // Handle email confirmation
      if (event === "SIGNED_IN" && session) {
        setUser(session.user ?? null);
      }

      // Handle email confirmation specifically
      if (event === "EMAIL_CONFIRMED") {
        setUser(session?.user ?? null);
      }

      setUser(session?.user ?? null);
    });

    // 3. Check for email confirmation hash in URL
    const handleEmailConfirmation = async () => {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hashParams.get("access_token");
      const type = hashParams.get("type");

      if (accessToken && type === "email") {
        try {
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: hashParams.get("refresh_token"),
          });

          if (error) {
            console.error("Error confirming email:", error);
          } else if (data.session) {
            // Email confirmed successfully
            // Remove hash from URL
            window.history.replaceState(null, "", window.location.pathname);
          }
        } catch (error) {
          console.error("Error processing email confirmation:", error);
        }
      }
    };

    handleEmailConfirmation();
  }, []);

  useEffect(() => {
    if (!user?.email_confirmed_at) return;

    const createProfile = async () => {
      await supabase.from("profiles").upsert({
        id: user.id,
        email: user.email,
      });
    };

    createProfile();
  }, [user?.id]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
