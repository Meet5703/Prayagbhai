"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box
} from "@chakra-ui/react";

const FAQ = () => {
  // Render the FAQ item
  return (
    <div className="flex mt-10 mb-10 p-10 justify-center md:ml-[10%] md:mr-[10%] flex-col">
      <h1
        className="font-bold text-[#ffa83c] text-5xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        FAQ
      </h1>
      <Accordion allowToggle className="w-full">
        <AccordionItem
          w={"full"}
          mt={4}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className=" hover:bg-[#d79ff2] bg-[#f6ebfb] border border-[#510b71]">
            <AccordionButton
              backgroundColor={"transparent"}
              _hover={{ backgroundColor: "transparent" }}
            >
              <Box
                _hover={{ backgroundColor: "transparent" }}
                fontWeight={"bold"}
                fontSize={"xl"}
                backgroundColor={"transparent"}
                as="span"
                flex="1"
                textAlign="left"
              >
                Section 1 title
              </Box>
              <AccordionIcon
                backgroundColor={"transparent"}
                _hover={{ backgroundColor: "transparent" }}
              />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            backgroundColor={"#f6ebfb"}
            border={"solid #510b71 1px"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mt={4} data-aos="fade-right" data-aos-duration="1000">
          <h2 className=" hover:bg-[#d79ff2] bg-[#f6ebfb] border border-[#510b71]">
            <AccordionButton
              backgroundColor={"transparent"}
              _hover={{ backgroundColor: "transparent" }}
            >
              <Box
                _hover={{ backgroundColor: "transparent" }}
                fontWeight={"bold"}
                fontSize={"xl"}
                backgroundColor={"transparent"}
                as="span"
                flex="1"
                textAlign="left"
              >
                Section 2 title
              </Box>
              <AccordionIcon
                backgroundColor={"transparent"}
                _hover={{ backgroundColor: "transparent" }}
              />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            backgroundColor={"#f6ebfb"}
            border={"solid #510b71 1px"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

// Export the FAQ component
export default FAQ;
