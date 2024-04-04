"use client";
import React, { useState } from "react";
import axios from "axios";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseData = await axios.post("/api/users/forgotpass", { email });
      if (responseData && responseData.data && responseData.data.message) {
        // Successful response
        setMessage(responseData.data.message);
      } else if (responseData && responseData.data && responseData.data.error) {
        // Error response
        setMessage(responseData.data.error);
      } else {
        // Unexpected response structure
        setMessage("Unexpected response from the server");
      }
    } catch (error) {
      // Error occurred during the request
      setMessage("An error occurred while processing your request");
      console.error("Error in forgot password", error);
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ForgotPasswordPage;
