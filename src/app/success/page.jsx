"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
function page() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    number: "",
    courses: [],
    status: "success"
  });

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const response = await axios.put("/api/users/payment");
      console.log("User details response:", response.data.user); // Log response data
      console.log("user", user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return <div>{user.status}</div>;
}

export default page;
