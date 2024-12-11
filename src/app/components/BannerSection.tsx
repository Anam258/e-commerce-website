import Image, { StaticImageData } from "next/image"; // Importing the Next.js Image component for optimized image rendering.
import React from "react"; // Importing React to create functional components.
import Button from "./Button"; // Importing a custom Button component.

// Defining the types for the props that the BannerSection component will accept.
interface BannerSectionProps {
  heading: string; // Main heading displayed at the top of the banner section.
  imageUrl: StaticImageData; // Image URL or imported static image for the banner.
  secondHeading: string; // Secondary heading displayed prominently in the banner.
  para: string; // Paragraph text providing additional information.
  buttonText: string; // Text displayed on the button.
  imageAlt: string; // Alternative text for the image for accessibility.
}

// Functional component to display a banner section with an image, headings, and a button.
const BannerSection: React.FC<BannerSectionProps> = ({
  heading,
  imageUrl,
  secondHeading,
  para,
  buttonText,
  imageAlt,
}) => {
  return (
    <section className="px-10">
      {" "}
      {/* Container section with horizontal padding. */}
      <h2 className="mb-4 font-bold">{heading}</h2>{" "}
      {/* Main heading styled with bold font. */}
      <Image src={imageUrl} alt={imageAlt} />{" "}
      {/* Banner image with alt text for accessibility. */}
      <div className="flex flex-col items-center py-10">
        {" "}
        {/* Flex container for centered content and padding. */}
        <h2 className="text-5xl uppercase pt-2 text-center">
          {secondHeading}
        </h2>{" "}
        {/* Secondary heading in large, uppercase text, centered. */}
        <p className="w-full md:w-1/2 text-center py-6">
          {" "}
          {/* Paragraph text, centered and responsive width. */}
          {para}
        </p>
        {/* Button component styled with rounded corners and padding. */}
        <Button text={buttonText} classNames="rounded-full py-2" />
      </div>
    </section>
  );
};

export default BannerSection; // Exporting the BannerSection component for use in other parts of the application.
