"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarByMe from "@/components/navbar";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({ duration: 500, once: false, easing: "ease-in-out" }); // Initialize AOS on the client side
  }, []); // Ensure the useEffect runs only once on component mount

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Data Skills Hub" />
        <meta
          name="description"
          content="Data skills hub provides data skills for students"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,300,0,0"
        />
      </head>
      <UserProvider>
        <body className={` ${inter.className}  bg-[#f7f2f8] scroll-smooth`}>
          <NavbarByMe />
          <ChakraProvider>{children}</ChakraProvider>
          <Footer />
          <script
            src="https://unpkg.com/alpinejs@3.13.7/dist/cdn.min.js"
            defer
          ></script>
        </body>
      </UserProvider>
    </html>
  );
}
