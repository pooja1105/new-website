import React from 'react';
import web from "../images/hero.webp";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: '#06a34e', fontFamily: 'Inter, sans-serif' }}
        >
          ON Spot Offer
        </h1>
        
        <img
          src={web}
          alt="Hero Section"
          className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
        />
      </div>
    </>
  );
};

export default HeroSection;
