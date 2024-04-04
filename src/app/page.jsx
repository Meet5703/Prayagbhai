"use client";
import React, { useEffect } from "react";
import CarouselAds from "@/components/Companycrousel/crousel";
import Herosection from "@/components/Herosection";
import Card from "@/components/card";
import Card2 from "@/components/card2";
import CourseCard from "@/components/courseCard";
import Testimonial from "@/components/testimonialCrousel";
import Aos from "aos";
import ContactForm from "@/components/contactForm";
import VerticalTabs from "@/components/verticalTabs";
const testimonials = [
  {
    id: 1,
    text: "I'm extremely satisfied with the service!",
    author: "John Doe"
  },
  {
    id: 2,
    text: "Amazing experience! Highly recommended.",
    author: "Jane Smith"
  },
  {
    id: 3,
    text: "The best decision I've made for my business!",
    author: "Michael Johnson"
  }
];

const Home = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS on the client side
  }, []);

  return (
    <main>
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
    </main>
  );
};

export default Home;
