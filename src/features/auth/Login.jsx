import supabase from "../../lib/supabase";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else if (!user?.email_confirmed_at) {
      alert("Please confirm your email before logging in.");
    } else {
      alert("Logged in successfully");
      navigate("/home");
    }
    reset();
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 text-black border-b-black">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight ">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          action="#"
          // method="POST"
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
            <div className="text-sm mt-4">
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
            </div>
            <div className="text-end mt-3">
              <a
                href="#"
                className="font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center cursor-pointer rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? "loading..." : "Login"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-400">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
