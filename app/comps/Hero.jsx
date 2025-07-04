// import React from "react";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <div className="flex justify-center m-6 mt-22 flex-col">
//       <div className="relative w-full h-[300px] rounded-t overflow-hidden">
//         <Image
//           src="/images/Hero Image.png"
//           alt="banner"
//           fill
//           className="object-cover"
//         />

//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="flex flex-col items-center gap-x-4">
//             <Image
//               src="/images/5.png"
//               alt="logo"
//               width={140}
//               height={140}
//               className="object-contain w-[150px] h-[150px]  lg:w-[200px] lg:h-[200px]"
//             />

//             <h2 className="text-purple-900 text-3xl  md:text-4xl lg:text-5xl font-bold drop-shadow-lg text-center">
//               <span>AI Sandbox Summit</span>
//               <br />
//               <span>August 20/2025</span>
//             </h2>
//           </div>
//         </div>
//       </div>
//       <div className="bg-white p-3 rounded-b text-center">
//         <p className="text-2xl font-medium">
//           Finally--AI Built for Real Healers
//         </p>
//         <p className="italic">
//           A new Path for Funtional, Integrative, and Root-Cause Practicioners.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center m-6 mt-22 flex-col">
      <div className="relative w-full h-[300px] rounded-t overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/Hero Image.png"
          alt="banner"
          fill
          className="object-cover"
        />

        {/* Right-Aligned Content */}
        <div className="absolute inset-0 flex items-center justify-end pr-8">
          <div className="flex flex-col items-center">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={140}
              height={140}
              className="object-contain w-[130px] h-[130px] lg:w-[180px] lg:h-[180px]"
            />

            <h2 className="text-purple-900 text-2xl md:text-3xl  font-bold drop-shadow-lg text-center mt-1 leading-tight">
              AI Sandbox Summit
              <br />
              August 27-2025
            </h2>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white p-3 rounded-b text-center">
        <p className="text-2xl font-medium">
          Finally--AI Built for Real Healers
        </p>
        <p className="italic">
          A New Path for Functional, Integrative, and Root-Cause Practitioners
        </p>
      </div>
    </div>
  );
};

export default Hero;
