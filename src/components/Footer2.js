import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; 

const Footer2 = () => {
  return (
    <footer className="bg-[#48F7DD] text-black py-4">
      <div className="container mx-auto flex flex-col items-center text-center space-y-4">

        <div className="text-sm md:text-base font-light">
          <p style={{ fontFamily: "Inter, sans-serif" }}>
            © 2024 BUY INDIA HOMES DIGITAL PVT. LTD.
          </p>
        </div>


        <div className="text-sm md:text-base">
          <p style={{ fontFamily: "Inter, sans-serif" }}>
            ALL RIGHTS RESERVED.
          </p>
        </div>


        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="h-6 w-6 text-blue-600 hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="h-6 w-6 text-blue-400 hover:text-blue-300 transition-colors duration-300" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-6 w-6 text-pink-500 hover:text-pink-400 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="h-6 w-6 text-blue-700 hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="h-6 w-6 text-red-600 hover:text-red-500 transition-colors duration-300" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer2;
