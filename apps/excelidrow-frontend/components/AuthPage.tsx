"use client";

import { useState } from "react";
import Link from "next/link";
import { loginUser, signupUser } from "@/httprequest/authrequest";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface AuthPageProps {
  type: "login" | "signup";
}

interface CreateUser {
  username: string;
  name: string;
  email: string;
  password: string;
}

export default function AuthPage({ type }: AuthPageProps) {
  const router = useRouter();

  const [userData, setUserData] = useState<CreateUser>({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (type === "signup") {
      const res = await signupUser(userData);

      if (!res.message) {
        toast.error(res.message);
      }
      router.push("/signin");
      toast.success(res.message);
    } else {
      const res = await loginUser(userData);

      if (!res.data.user) {
        toast.error(res.message);
      }

      if (res.data.user) {
        localStorage.setItem("token", res.data.token);
        router.push("/rooms");
        toast.success(res.message);
      }
      
      toast.error(res.message);
    }
  };

  return (
    <div className="w-9/12 mx-auto h-screen flex items-center">
      <div className="w-1/2 mx-auto flex flex-col gap-3 justify-center bg-gray-900 p-10 rounded-xl shadow-2xl shadow-gray-900">
        <div className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white text-center">
          {type === "login" ? "Login Your Account" : "Create Your Account"}
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {type === "signup" && (
            <div>
              <label
                className="block mb-2 text-sm font-medium text-white"
                htmlFor="username"
              >
                Username <sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="username"
                value={userData.username}
                required
                onChange={handleChange}
              />
            </div>
          )}

          {type === "signup" && (
            <div>
              <label
                className="block mb-2 text-sm font-medium text-white"
                htmlFor="name"
              >
                Name <sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="name"
                id="name"
                required
                value={userData.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <label
              className="block mb-2 text-sm font-medium text-white"
              htmlFor="email"
            >
              Email <sup className="text-red-500">*</sup>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={userData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-white"
              htmlFor="password"
            >
              Password <sup className="text-red-500">*</sup>
            </label>
            <input
              type="password"
              name="password"
              required
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={userData.password}
              onChange={handleChange}
            />
          </div>

          <button
            className="w-full cursor-pointer text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="submit"
          >
            {type === "login" ? "Login" : "Create an Account"}
          </button>
        </form>

        <div className="text-center">
          {type === "login" ? (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                className="text-white/20 hover:text-white/70 dark:text-primary-100 dark:hover:text-primary-400"
                href="/signup"
              >
                Sign Up
              </Link>
            </p>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                className="text-white/20 hover:text-white/70 dark:text-primary-100 dark:hover:text-primary-400"
                href="/signin"
              >
                Sign In
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
