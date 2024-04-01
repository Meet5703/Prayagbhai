"use client";
import React, { useState } from "react";
import img1 from "../assets/dslogo1.png";
import Image from "next/image";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const NavbarByMe = () => {
  const { user, error, isLoading } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
              <Link
                href="/"
                className="text-gray-800 text-lg font-semibold hover:text-purple-600 mr-4"
              >
                Home
              </Link>
              <Link
                href="/Jobs"
                className="text-gray-800 text-lg font-semibold hover:text-purple-600 mr-4"
              >
                Jobs
              </Link>
              <Link
                href="/explore"
                className="text-gray-800 text-lg font-semibold hover:text-purple-600 mr-4"
              >
                Explore
              </Link>
              <Link
                href="/about"
                className="text-gray-800 text-lg font-semibold hover:text-purple-600"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 text-lg font-semibold hover:text-purple-600"
              >
                Contact
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center">
              {user ? (
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center ">
                    <Image
                      className="rounded-full"
                      src={user.picture}
                      alt="user"
                      width={40}
                      height={40}
                    />
                  </div>
                  <Link
                    href="/api/auth/logout"
                    className="text-white  text-sm font-semibold border  bg-[rgb(83,15,184)] px-6 py-3 rounded-lg hover:text-[rgb(83,15,184)] hover:border-[rgb(83,15,184)] hover:bg-white ease-in-out duration-300"
                  >
                    Logout
                  </Link>
                </div>
              ) : (
                <Link
                  href="/api/auth/login"
                  className="text-white  text-sm font-semibold border  bg-[rgb(83,15,184)] px-6 py-3 rounded-lg hover:text-[rgb(83,15,184)] hover:border-[rgb(83,15,184)] hover:bg-white ease-in-out duration-300"
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

          {/* Mobile Menu */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } sm:hidden bg-transparent border-t-2 py-2 transition-all ease-in-out duration-500`}
          >
            <div className="flex flex-col gap-y-4 items-center">
              <Link
                href="/"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
              >
                Home
              </Link>
              <Link
                href="/Jobs"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
              >
                Jobs
              </Link>
              <Link
                href="/explore"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
              >
                Explore
              </Link>
              <Link
                href="/about"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
              >
                Contact
              </Link>
              <div className="flex justify-between items-center border-t-2 w-full pt-2">
                {user ? (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <Image
                        className="rounded-full"
                        src={user.picture}
                        alt="user"
                        width={40}
                        height={40}
                      />
                    </div>
                    <Link
                      className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600"
                      href="/api/auth/logout"
                    >
                      Logout
                    </Link>
                  </div>
                ) : (
                  <Link
                    className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600"
                    href="/api/auth/login"
                  >
                    Sign up / Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarByMe;
