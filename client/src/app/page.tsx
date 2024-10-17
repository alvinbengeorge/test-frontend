"use client";
import React, { useState } from "react";
import InputBox from "../components/input_box";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <section>
      <nav className="bg-gray-800 w-full p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-4xl flex content-center">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-full invert"
            >
              <rect x="0" fill="none" width="20" height="20" />

              <g>
                <path d="M10 9.25c-2.27 0-2.73-3.44-2.73-3.44C7 4.02 7.82 2 9.97 2c2.16 0 2.98 2.02 2.71 3.81 0 0-.41 3.44-2.68 3.44zm0 2.57L12.72 10c2.39 0 4.52 2.33 4.52 4.53v2.49s-3.65 1.13-7.24 1.13c-3.65 0-7.24-1.13-7.24-1.13v-2.49c0-2.25 1.94-4.48 4.47-4.48z" />
              </g>
            </svg>
            PostGlobal Configurator
          </div>
        </div>
      </nav>
      <div className="grid place-items-center h-screen grid-cols-1 lg:grid-cols-2 p-0 lg:p-4">
        <div className="p-8 rounded-2xl bg-white hover:bg-slate-200 duration-500 shadow-none hover:shadow-2xl hover:border">
          {/* <Image
            src="/image.png"
            alt="login"
            width={700}
            height={700}
            className="rounded-2xl hover:shadow-md hover:bg-slate-100 duration-500"
          /> */}

          <p className="text-justify text-2xl text-wrap">
            PostGlobal in a completely Modular, fully scalable Post Office
            solution that operates on any POS, Kiosk, Locker, PDT or Smartphone.
            It has a standard GUI that allows all users to operate the system
            seamlessly across all channels.
          </p>
        </div>
        <div className="bg-slate-100 p-12 rounded-xl shadow-lg hover:shadow-2xl hover:bg-slate-200 duration-300">
          <h1 className="font-bold text-4xl text-center">Login</h1>
          <div className="grid place-items-center p-4 ">
            <InputBox
              placeholder="Username"
              onChange={(event) => setEmail(event)}
            />
            <InputBox
              placeholder="Password"
              onChange={(event) => setPassword(event)}
              type="password"
            />
          </div>
          <div className="px-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32"
              onClick={() => {
                if (email === "admin" && password === "admin") {
                  router.push("/dashboard");
                } else {
                  alert("Invalid credentials");
                }
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
