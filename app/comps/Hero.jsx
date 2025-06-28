import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center m-6 mt-22">
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden ">
        <Image
          src="/images/Hero Image.png"
          alt="banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-purple-900 text-4xl font-bold drop-shadow-lg flex flex-col text-center">
            <span>AI Sandbox Summit</span>
            <span>August 20/2025</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
