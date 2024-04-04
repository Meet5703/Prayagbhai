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
import Card from "@/components/card";
import Placement from "@/components/placement";
const page = () => {
  return (
    <div className="overflow-x-hidden">
      <DataScience />
      <CompniesCard />
      <Placement />
      <Card2 />
      <JournyCard />
      <Curriculum />
      <Cirtificate />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default page;
