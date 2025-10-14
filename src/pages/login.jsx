import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginScheme = z.object({
  username: z
    .string()
    .nonempty("Username or email is required.")
    .min(5, "username must be atleast 5 characters or more.")
    .or(z.email("Invalid email address.")),
  password: z
    .string()
    .nonempty("Password is required.")
    .min(8, "password must be atleast 8 characters or more."),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginScheme),
  });

  const onSubmit = (data) => {
    const { username, password } = data;

    if (
      username === "admin" ||
      (username === "email@gmail.com" && password === "password123")
    ) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password.");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#141414] to-[#181818]">
      <div className="flex w-full flex-col items-center">
        <h1 className="text-5xl font-extrabold text-white">Sign In</h1>
        <form
          className="mt-8 flex w-80 flex-col space-y-4 animate-slideDown"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit((data) => onSubmit(data));
          }}
        >
          <input
            type="text"
            {...register("username")}
            placeholder="Username or Email"
            className={`w-full rounded-md border border-gray-300 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none`}
          />
          {errors.username && (
            <p className="text-red-500 text-[0.7rem]">
              {errors.username.message}
            </p>
          )}
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className={`w-full rounded-md border border-gray-300 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none`}
          />
          {errors.password && (
            <p className="text-red-500 text-[0.7rem]">
              {errors.password.message}
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        <p className="text-white mt-4">
          Dont have an account?{" "}
          <a className="text-blue-500" href="/register">
            Sign up.
          </a>
        </p>
      </div>
    </main>
  );
}
