// app/login/page.js
"use client"; // Only if client-side hooks are used in this component

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authenticate } from "../../utils/auth";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (authenticate(username, password)) {
      document.cookie = "auth=true; path=/";
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 rounded">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg gap-5 flex flex-col gap-5"
      >
        <div className="text-center h1" >Dashboard Kit</div>
        <h1 className="text-2xl mb-4 text-center h2">Login</h1>
        <label className="block mb-2">
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </label>
        <label className="block mb-4">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </label>
        <button
          type="submit"
          className="bg-black text-white p-2 rounded-md w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}
