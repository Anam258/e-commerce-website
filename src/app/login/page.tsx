import React from "react";
import logo from "@public/images/logo/logo.svg"; // Importing the logo image from the public directory
import Image from "next/image"; // Next.js optimized image component
import Link from "next/link"; // For navigation using Next.js Link component
import Button from "../components/Button"; // Importing a custom button component

const page = () => {
  return (
    // Main container for the page, using flexbox for centering and padding
    <div className="flex flex-col items-center py-10 px-10 md:px-0">
      {/* Logo section */}
      <Image className="pb-5" src={logo} width={40} height={10} alt="Logo" />

      {/* Main heading of the page */}
      <h2 className="uppercase w-40 text-center font-bold pb-5">
        YOUR ACCOUNT FOR EVERYTHING NIKE
      </h2>

      {/* Form for user login */}
      <form action="" className="flex flex-col w-full lg:w-96">
        {/* Email input field */}
        <input
          className="w-50 lg:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Email Address"
        />

        {/* Password input field */}
        <input
          className="w-50 lg:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Password"
        />

        {/* Remember me checkbox and password reset link */}
        <div className="flex justify-between items-center py-5">
          {/* "Keep me signed in" checkbox */}
          <div>
            <input type="checkbox" id="remember" />
            <label
              className="ml-2 pl-2 cursor-pointer text-text-secondary-gray"
              htmlFor="remember"
            >
              Keep me signed in
            </label>
          </div>

          {/* Forgotten password link */}
          <div>
            <span>
              <a href="#" className="text-[#BCBCBC]">
                Forgotten your password?
              </a>
            </span>
          </div>
        </div>

        {/* Legal links and privacy notice */}
        <p className="text-text-secondary-gray text-center pb-6">
          By logging in, you agree to Nike's{" "}
          <Link className="underline" href="#">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="underline" href="#">
            Terms of Use
          </Link>
          .
        </p>

        {/* Custom sign-in button */}
        <Button text="SIGN IN" classNames="rounded-sm py-3" />

        {/* Sign-up prompt for new users */}
        <p className="text-center">
          <span className="text-text-secondary-gray">Not a Member? </span>
          <span className="underline">Join Us.</span>
        </p>
      </form>
    </div>
  );
};

export default page;
