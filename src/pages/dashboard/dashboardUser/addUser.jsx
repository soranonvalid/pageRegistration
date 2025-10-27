import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const addUserSchema = z.object({
  fullname: z
    .string()
    .min(8, { message: "Fullname must be at least 8 character" }),
  username: z
    .string()
    .min(5, { message: "Username must be at least 5 character" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 character" }),
  email: z.email({ message: "Invalid email address" }),
  phone_number: z
    .string()
    .refine((val) => !isNaN(val), "Phone Number must be a number")
    .transform((val) => Number(val)),
  age: z
    .string()
    .refine((val) => !isNaN(val), "Age must be a number")
    .transform((val) => Number(val))
    .refine((val) => val >= 18 && val <= 60, {
      message: "Age must be between 18 - 60 years",
    }),
  address: z
    .string()
    .min(10, { message: "Address must be at least 10 character" }),
  role: z.enum(["user", "admin"], { message: "Invalid role" }),
});

function AddUser() {
  const form = useForm({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      fullname: "",
      username: "",
      password: "",
      email: "",
      phone_number: 0,
      age: 0,
      address: "",
      role: "user",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const message = await addUser(data);
      alert("User berhasil ditambahkan: " + message);
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Gagal menambahkan user.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 p-20 bg-gray-100 h-screen"
      >
        <h1 className="font-bold text-2xl max-w-1/2 m-auto mb-7">
          Create New User
        </h1>
        <div className="p-5 rounded-2xl max-w-1/2 m-auto flex flex-col gap-4">
          {/* Nama Lengkap */}

          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black! text-base">
                  Fullname
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Fullname at least 8 character"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black! text-base">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Username at least 5 character"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black! text-base">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Password at least 5 character"
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black! text-base">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a valid Email address" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Nomor Telepon */}
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black! text-base">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Umur */}
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black! text-base">Age</FormLabel>

                <FormControl>
                  <Input placeholder="Enter your Age" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Alamat */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black! text-base">Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Address at least 10character"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="cursor-pointer w-fit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default AddUser;
