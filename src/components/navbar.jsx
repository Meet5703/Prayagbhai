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
  const [shouldReload, setShouldReload] = useState(false); // Add shouldReload state

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
    getUserDetails();
  }, []);

  useEffect(() => {
    if (!isLoading && shouldReload) {
      setShouldReload(false); // Reset shouldReload
      window.location.reload(); // Reload the page
    }
  }, [isLoading, shouldReload]);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLoginSignup = () => {
    getUserDetails();
  };

  return (
    <nav className="bg-gray-100 font-sans w-full m-0">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <Link href="/">
                <Image src={img1} alt="logo" width={200} height={200} />
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center sm:gap-8">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/jobs" className="nav-link">
                Jobs
              </Link>
              <Link href="/explore" className="nav-link">
                Explore
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/contact" className="nav-link">
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
                        {" "}
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
                  className="btn btn-primary"
                  onClick={handleLoginSignup}
                >
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
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/jobs" className="nav-link">
                Jobs
              </Link>
              <Link href="/explore" className="nav-link">
                Explore
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/contact" className="nav-link">
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
