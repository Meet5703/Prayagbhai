"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState(null); // Initialize data as null
  const getUserDetails = async () => {
    try {
      const response = await axios.post("/api/users/profile");
      console.log(response.data);
      setData(response.data); // Update data with fetched user details
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUserDetails(); // Fetch user details when component mounts
  }, []); // Empty dependency array to ensure it runs only once

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await axios.get("/api/users/logout");
      setIsLoggedIn(false);
      setShouldReload(true); // Set shouldReload to true on logout
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Render user details only when data is available
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-gray-400">
      <h1>Profile</h1>
      {data && (
        <>
          <p>Username: {data.user.username}</p>
          <p>Email: {data.user.email}</p>
        </>
      )}
      <button className="bg-red-500 px-5 py-2" onClick={logout}>
        Logout
      </button>
      <button className="bg-green-500 px-5 py-2" onClick={getUserDetails}>
        get
      </button>
    </div>
  );
};

export default Page;
