"use client";
import React, { useState } from "react";
import InputBox from "../components/input_box";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <section>
      <nav className="bg-gray-800 w-full p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">PostGlobal Configurator</div>
        </div>
      </nav>
      <div className="grid place-items-center h-screen">
        
        <div className="bg-slate-100 p-16 rounded-xl shadow-lg hover:shadow-2xl hover:bg-slate-200 duration-300">
          <h1 className="font-bold text-4xl text-center">Login</h1>
          <div className="grid place-items-center p-4 ">
            <InputBox placeholder="Username" onChange={(event) => setEmail(event)} />
            <InputBox
              placeholder="Password"
              onChange={(event) => setPassword(event)}
              type="password"
            />
          </div>
          <div className="grid place-items-center">
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
