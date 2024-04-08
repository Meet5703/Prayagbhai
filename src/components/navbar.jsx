"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import img1 from "../assets/dslogo1.png";

const NavbarByMe = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const currentPath = window.location.pathname; // Get the current path
  const [activeTab, setActiveTab] = useState(currentPath);
  const [shouldReload, setShouldReload] = useState(false);
  const [reloadFunction, setReloadFunction] = useState(null);
  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const getUserDetails = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/users/profile");
      console.log(response.data);
      setData(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error.message);
      setData(null);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      return; // No need to reload if the user is not logged in
    }

    const handleLogout = async () => {
      setIsLoading(true);
      try {
        await axios.get("/api/users/logout");
        setIsLoggedIn(false);
        window.location.reload(); // Reload the page after logout
      } catch (error) {
        console.error("Error logging out:", error);
      } finally {
        setIsLoading(false);
      }
    };

    return () => {
      handleLogout(); // Automatically logout when the component unmounts
    };
  }, [isLoggedIn]);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLoginSignup = () => {
    getUserDetails();
  };

  return (
    <nav className="bg-gray-100 font-sans w-full m-0 sticky  top-0 z-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <Link href="/">
                <Image src={img1} alt="logo" height={50} />
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-4 bg-transparent">
              <Link
                href="/"
                className={`ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all ${
                  activeTab === "/" && "bg-violet-900 text-white"
                }`}
                onClick={() => handleSetActiveTab("/")}
              >
                Home
              </Link>
              {/* <Link
                href="/jobs"
                className={`ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all ${
                  activeTab === "/jobs" && "bg-violet-900 text-white"
                }`}
                onClick={() => handleSetActiveTab("/jobs")}
              >
                Jobs
              </Link> */}
              <Link
                href="/explore"
                className={`ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all ${
                  activeTab === "/explore" && "bg-violet-900 text-white"
                }`}
                onClick={() => handleSetActiveTab("/explore")}
              >
                Explore
              </Link>
              <Link
                href="/about"
                className={`ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all ${
                  activeTab === "/about" && "bg-violet-900 text-white"
                }`}
                onClick={() => handleSetActiveTab("/about")}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all ${
                  activeTab === "/contact" && "bg-violet-900 text-white"
                }`}
                onClick={() => handleSetActiveTab("/contact")}
              >
                Contact
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center">
              {isLoading ? (
                <p>Loading...</p>
              ) : isLoggedIn ? (
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    {data && (
                      <a
                        className="bg-violet-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-6"
                        href="/profile"
                      >
                        {data.user.username.charAt(0).toUpperCase()}
                      </a>
                    )}
                  </div>
                  <button
                    onClick={handleLogout}
                    className=" hidden btn btn-primary"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="btn btn-primary flex items-center px-4 py-3 justify-around w-full text-purple-800 hover:text-white border border-purple-800 hover:bg-purple-800 hover:border-purple-500 duration-200 transition-all ease-in-out rounded-xl"
                  onClick={handleLoginSignup}
                >
                  <span className="material-symbols-outlined bg-transparent">
                    login
                  </span>
                  Sign up / Login
                </Link>
              )}
            </div>

            <div
              className="sm:hidden cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <span className="material-symbols-outlined">menu</span>
            </div>
          </div>

          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } sm:hidden bg-transparent border-t-2 py-2 transition-all ease-in-out duration-500`}
          >
            <div className="flex flex-col gap-y-4 items-center">
              <Link
                href="/"
                className="ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all "
              >
                Home
              </Link>
              {/* <Link
                href="/jobs"
                className="ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all "
              >
                Jobs
              </Link> */}
              <Link
                href="/explore"
                className="ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all "
              >
                Explore
              </Link>
              <Link
                href="/about"
                className="ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all "
              >
                About
              </Link>
              <Link
                href="/contact"
                className="ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all "
              >
                Contact
              </Link>
              {isLoading ? (
                <p>Loading...</p>
              ) : isLoggedIn ? (
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    {data && (
                      <a href="/profile"> {data.user.username.charAt(0)}</a>
                    )}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="hidden btn btn-primary"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="btn btn-primary"
                  onClick={handleLoginSignup}
                >
                  Sign up / Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarByMe;
