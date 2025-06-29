import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center m-6 mt-20">
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
        <Image
          src="/images/Hero Image.png"
          alt="banner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-x-4">
            <h2 className="text-purple-900 text-3xl  md:text-4xl lg:text-5xl font-bold drop-shadow-lg text-center">
              <span>AI Sandbox Summit</span>
              <br />
              <span>August 20/2025</span>
            </h2>

            <Image
              src="/images/5.png"
              alt="logo"
              width={140}
              height={140}
              className="object-contain w-[150px] h-[150px]  lg:w-[200px] lg:h-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
