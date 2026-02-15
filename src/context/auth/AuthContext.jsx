import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../../lib/supabase";
import { toast } from "react-toastify";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Load session on app start
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    // 2. Listen to all auth state changes (including login, logout, email confirmation)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);

      // Handle email confirmation from URL hash
      if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
        // Session is now available
      }
      
      if (event === "EMAIL_CONFIRMED") {
        // Email was just confirmed
      }
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
            toast.error("Error confirming email:", error);
          } else if (data.session) {
            // Email confirmed successfully
            // Remove hash from URL
            window.history.replaceState(null, "", window.location.pathname);
          }
        } catch (error) {
          toast.error("Error processing email confirmation:", error);
        }
      }
    };

    handleEmailConfirmation();

    return () => {
      subscription.unsubscribe();
    };
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
export default AuthProvider;