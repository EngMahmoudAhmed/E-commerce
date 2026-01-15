// import { rules } from "eslint-plugin-react-hooks";
import { useForm } from "react-hook-form";
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm();

  const password = watch("password");

  const onSubmit =  (data) => {
    console.log("Login data", data);
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
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-100"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Email
              </label>
            </div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Password
              </label>
              
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 6 characters",
                    
                  },
                })}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmpassword"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Confirm Password
              </label>
              
            </div>
            <div className="mt-2">
              <input
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                {...register("confirmpassword", { required: "password is required",
                    validate:(value)=>
                        value === password || "password don't match"
                 })}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
            {errors.confirmPassword && (
              <span className="text-red-600">{errors.confirmPassword.message}</span>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center cursor-pointer rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              disabled={isSubmitting}
            >
              {isSubmitting ?  "Creating Account..." : "Register"}
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
