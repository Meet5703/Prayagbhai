"use client";
import React, { useEffect, useState } from "react";
import CarouselAds from "@/components/crousel";
import Herosection from "@/components/Herosection";
import Card from "@/components/card";
import Card2 from "@/components/card2";
import CourseCard from "@/components/courseCard";
import Testimonial from "@/components/testimonialCrousel";
import Aos from "aos";
import ContactForm from "@/components/contactForm";
import VerticalTabs from "@/components/verticalTabs";
import HeroSkeleton from "@/components/skeletons/heroskele";
import CarouselSkeleton from "@/components/skeletons/crouselskele";
import CardSkeleton from "@/components/skeletons/cardskele";

const Home = () => {
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    // Initialize AOS on the client side
    Aos.init();

    // Simulate loading time (remove setTimeout in actual production)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a timeout (simulating loading)
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return (
    <main>
      {loading ? (
        <div>
          <HeroSkeleton />
          <CarouselSkeleton />
          <CardSkeleton />
        </div> // Render loading indicator while loading is true
      ) : (
        <div className="overflow-x-hidden">
          <Herosection />
          <CarouselAds />
          <Card />
          <Card2 />
          <CourseCard />
          <VerticalTabs />
          <Testimonial />
          <ContactForm />
        </div>
      )}
    </main>
  );
};

export default Home;
