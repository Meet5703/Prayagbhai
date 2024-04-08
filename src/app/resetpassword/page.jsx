"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import NavbarByMe from "@/components/navbar";

const ResetPasswordPage = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    password: "",
    token: ""
  });

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setUser({ ...user, token: urlToken || "" });
  }, []);
  const onReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/resetpass", user);
      console.log("Password reset successfully", response);
      router.push("/login");
    } catch (error) {
      console.log("reset error", error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="fixed w-full z-50">
        <NavbarByMe />
      </div>
      <div className="flex justify-center items-center h-screen flex-col bg-gray-400">
        <h1>Reset Password</h1>
        <form onSubmit={onReset}>
          <input
            type="password" // Specify input type as password
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })} // Update password property
            required
          />
          <button onClick={onReset} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPasswordPage;
