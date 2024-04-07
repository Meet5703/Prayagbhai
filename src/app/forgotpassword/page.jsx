"use client";
import React, { useState } from "react";
import axios from "axios";
import NavbarByMe from "@/components/navbar";

const ForgotPasswordPage = () => {
  const [user, setUser] = useState({
    email: ""
  });

  const onSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post("/api/users/forgotpass", user);
      console.log("data", response);
    } catch (error) {
      console.log("signup error", error);
      // Handle error
    }
  };

  return (
    <>
      <div className="fixed w-full z-50">
        <NavbarByMe />
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Forgot Password</h1>
        <form onSubmit={onSignup}>
          <input
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })} // Update email property
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
