"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarByMe from "@/components/navbar";
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
          content="Data Skills Hub: Your premier destination to master data science & analytics. Explore tutorials, resources & projects."
        />
        <meta
          name="keywords"
          content="Data Skills Hub, Data Science, Data Analytics , Data Analytics Tutorials, Projects"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1/2 days" />
        <meta name="author" content="Prayagraj" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,300,0,0"
        />
      </head>

      <body
        className={` ${inter.className}  bg-[#f7f2f8] scroll-smooth overflow-x-hidden m-0 p-0 box-border`}
      >
        <NavbarByMe />
        <ChakraProvider>{children}</ChakraProvider>
        <Footer />
        <script
          src="https://unpkg.com/alpinejs@3.13.7/dist/cdn.min.js"
          defer
        ></script>
      </body>
    </html>
  );
}
