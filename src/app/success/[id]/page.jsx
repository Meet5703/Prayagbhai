"use client";
// Import necessary modules and functions
import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the component
function Page({ params: { id } }) {
  // Access dynamic route parameter

  const [user, setUser] = useState({
    username: "",
    email: "",
    number: "",
    courses: []
  });

  useEffect(() => {
    if (id) {
      getUserDetails(); // Fetch user details when id is available
    }
  }, [id]); // Add id to the dependency array

  const getUserDetails = async () => {
    try {
      const response = await axios.put(`/api/users/payment/${id}`);
      console.log("User details response:", response.data.user); // Log response data
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="text-center flex items-center justify-center w-screen h-screen text-5xl text-green-600 bg-green-200">
      SUCCESS
    </div>
  );
}

// Export the component
export default Page;
