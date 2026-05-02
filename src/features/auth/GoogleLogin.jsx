import supabase from "../../lib/supabase";


const GoogleLogin = () => {
    const handleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: "https://localhost:5173/home",
            },
        });
    };

    return (
        <button
            onClick={handleLogin}
            className="w-full py-2 cursor-pointer bg-red-500 text-white rounded-lg"
        >
            Continue with Google
        </button>
    );
};

export default GoogleLogin;