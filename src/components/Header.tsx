"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Head = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-white w-full h-[120px] relative">
        {/* Top Bar with Links */}
        <div className="bg-neutral-100 h-9 flex items-center justify-between px-8 sm:px-12">
          <Image
            src="/images/vector 1.png"
            alt="Nike logo"
            width={100}
            height={100}
            className="w-6 h-6"
          />

          {/* Navigation Links */}
          <div className="hidden sm:flex items-center space-x-4 text-xs font-medium text-[#111111]">
            <span>Find a Store</span>
            <span>|</span>
            <span>Help</span>
            <span>|</span>
            <span>Join Us</span>
            <span>|</span>
            <span>Sign In</span>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="bg-white h-[60px] flex items-center justify-between px-12 sm:px-8">
          <Image
            src="/images/vector 2.png"
            alt="Nike logo"
            width={100}
            height={100}
            className="w-12 h-12"
          />

          {/* Navigation Links (Desktop) */}
          <ul className="hidden sm:flex space-x-8 text-sm font-medium text-[#111111]">
            <li className="cursor-pointer hover:text-gray-600">
              New & Featured
            </li>
            <li className="cursor-pointer hover:text-gray-600">Men</li>
            <li className="cursor-pointer hover:text-gray-600">Women</li>
            <li className="cursor-pointer hover:text-gray-600">Kids</li>
            <li className="cursor-pointer hover:text-gray-600">Sale</li>
            <li className="cursor-pointer hover:text-gray-600">SNKRS</li>
          </ul>

          {/* Hamburger Menu (Mobile) */}
          <div className="sm:hidden flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <AiOutlineClose className="w-8 h-8 text-gray-600" />
              ) : (
                <AiOutlineMenu className="w-8 h-8 text-gray-600" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <button className="flex items-center border-2 border-[#F5F5F5] rounded-[4px] px-3 py-1 bg-[#F5F5F5] gap-2">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-[200px] h-[32px] text-[12px] font-poppins font-[400] opacity-50 text-[#000000] outline-none"
              />
              <IoIosSearch className="w-[20px] h-[20px] text-gray-600" />
            </button>

            {/* Icons */}
            <FaRegHeart className="w-[22px] h-[22px] text-gray-600 cursor-pointer" />
            <MdOutlineShoppingCart className="w-[24px] h-[24px] text-gray-600 cursor-pointer" />
          </div>
        </div>

        {/* Mobile Navigation Menu (Responsive) */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-[60px] left-0 w-full bg-white shadow-md">
            <ul className="flex flex-col space-y-4 text-sm font-medium text-[#111111] px-8 py-4">
              <li className="cursor-pointer hover:text-gray-600">
                New & Featured
              </li>
              <li className="cursor-pointer hover:text-gray-600">Men</li>
              <li className="cursor-pointer hover:text-gray-600">Women</li>
              <li className="cursor-pointer hover:text-gray-600">Kids</li>
              <li className="cursor-pointer hover:text-gray-600">Sale</li>
              <li className="cursor-pointer hover:text-gray-600">SNKRS</li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Head;
