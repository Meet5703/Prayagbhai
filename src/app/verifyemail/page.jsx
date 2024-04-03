"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  });
  useEffect(() => {
    if (token) {
      verifyEmail();
    }
  }, [token]);
  const verifyEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
      router.push("/");
    } catch (error) {
      setError(true);
      console.log(error.response.data);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen ">
        <h1>Verify Email</h1>
        <h2>{verified ? "Email verified" : "Email not verified"}</h2>
        <h2>{error ? "Error" : ""}</h2>
        <button
          className="btn btn-primary"
          onClick={verifyEmail}
          disabled={verified}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default page;
