import JournyCard from "@/components/Companycrousel/journyCard";
import Curriculum from "@/components/Curriculum";
import DataScience from "@/components/DataScience";
import Card2 from "@/components/card2";
import CompniesCard from "@/components/compniesCard";
import HighlightedFeatures from "@/components/featureCard";
import React from "react";
import img1 from "../../assets/2023-05-12_13-33-12_6kqr4btbgz9RVR35WhmQMA.jpg";
import Cirtificate from "@/components/cirtificateCard";
import PriceCard from "@/components/PriceCard";
import FAQ from "@/components/Faq";
import Testimonial from "@/components/testimonialCrousel";
const page = () => {
  return (
    <>
      <DataScience />
      <CompniesCard />
      <Card2 />
      <HighlightedFeatures />
      <JournyCard />
      <Curriculum />
      <Cirtificate />
      <PriceCard />
      <Testimonial />
      <FAQ />
    </>
  );
};

export default page;
