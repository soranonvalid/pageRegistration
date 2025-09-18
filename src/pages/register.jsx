import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpScheme = z.object({
  email: z
    .string()
    .nonempty("Email is required.")
    .and(z.email("Invalid email address.")),
  name: z
    .string()
    .nonempty("Name is required.")
    .min(2, "name must be atleast 2 characters or more."),
  username: z
    .string()
    .nonempty("Username is required.")
    .min(5, "username must be atleast 5 characters or more."),
  password: z
    .string()
    .nonempty("Password is required.")
    .min(8, "password must be atleast 8 characters or more."),
  confirmPassword: z
    .string()
    .nonempty("Confirm Password is required.")
    .min(8, "password must be atleast 8 characters or more.")
    .refine((data) => {
      data.password === data.confirmPassword;
    }, "Passwords do not match."),
  age: z.preprocess(
    (val) => Number(val),
    z
      .number()
      .min(13, "You must be at least 18 years old.")
      .max(60, "You must be at least 60 years old.")
  ),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpScheme),
  });

  const onSubmit = (data) => {
    const { email, name, username, password } = data;
    console.log(data);

    if (email && name && username && password) {
      alert("Registration successful!");
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#141414] to-[#181818]">
      <div className="flex w-full flex-col items-center">
        <h1 className="text-5xl font-extrabold text-white">Sign Up</h1>
        <form
          className="mt-8 flex w-80 flex-col space-y-4 animate-slideDown"
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <input
            type="text"
            {...register("email")}
            placeholder="Email"
            className={`w-full rounded-md border border-gray-300 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none`}
          />
          {errors.email && (
            <p className="text-red-500 text-[0.7rem]">{errors.email.message}</p>
          )}
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className={`w-full rounded-md border border-gray-300 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none`}
          />
          {errors.name && (
            <p className="text-red-500 text-[0.7rem]">{errors.name.message}</p>
          )}
          <input
            type="text"
            {...register("username")}
            placeholder="Username"
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
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            className={`w-full rounded-md border border-gray-300 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-[0.7rem]">
              {errors.confirmPassword.message}
            </p>
          )}
          <input
            type="number"
            {...register("age")}
            placeholder="age"
            className={`w-full rounded-md border border-gray-300 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none`}
          />
          {errors.age && (
            <p className="text-red-500 text-[0.7rem]">{errors.age.message}</p>
          )}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        <p className="text-white mt-4">
          Already had an account?{" "}
          <a className="text-blue-500" href="/">
            Log in.
          </a>
        </p>
      </div>
    </main>
  );
}
