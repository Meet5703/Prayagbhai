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
import FAQ from "@/components/Faq";
import VerticalTabs from "@/components/verticalTabs";
const faqData = [
  {
    question: "Question 1",
    answer: "Answer 1"
  },
  {
    question: "Question 2",
    answer: "Answer 2"
  }
  // Add more FAQ items as needed
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
