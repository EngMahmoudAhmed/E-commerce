import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../lib/supabase";
import { useAuth } from "../../context/AuthContext";

const VerifyEmail = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // If user is already verified, redirect to home
    if (user?.email_confirmed_at) {
      navigate("/home");
    }
  }, [user, navigate]);

  const handleResendEmail = async () => {
    if (!user?.email) {
      setMessage("No user email found. Please register again.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.resend({
      type: "signup",
      email: user.email,
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Verification email sent! Please check your inbox.");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Verify Your Email
        </h2>
        <p className="mt-4 text-center text-sm text-gray-600">
          We've sent a confirmation email to:
        </p>
        <p className="mt-2 text-center text-sm font-medium text-gray-900">
          {user?.email}
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="rounded-md bg-blue-50 p-4">
          <p className="text-sm text-blue-800">
            Please click the confirmation link in your email to verify your
            account. After verification, you'll be able to access all features.
          </p>
        </div>

        {message && (
          <div
            className={`mt-4 rounded-md p-4 ${
              message.startsWith("Error")
                ? "bg-red-50 text-red-800"
                : "bg-green-50 text-green-800"
            }`}
          >
            <p className="text-sm">{message}</p>
          </div>
        )}

        <div className="mt-6 space-y-4">
          <button
            onClick={handleResendEmail}
            disabled={loading}
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Resend Verification Email"}
          </button>

          <button
            onClick={() => navigate("/login")}
            className="flex w-full justify-center rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;