import HorizontalCard from "./comps/HorizontalCard";
import SideCard from "./comps/SideCard";
import Hero from "./comps/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <Hero />
      <div className="flex flex-col lg:flex-row justify-center ">
        <div className="w-full lg:w-2/3 lg:mb-0 ">
          <HorizontalCard />
        </div>
        <div className="w-full lg:w-1/3 pr-12  ">
          <SideCard />
          <div className="flex flex-col gap-6">
            <div className="w-full  rounded overflow-hidden mb-2 ml-6">
              <Image
                src="/images/summit.png"
                alt="paul"
                width={400}
                height={180}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full  rounded overflow-hidden mb-2 ml-6">
              <Image
                src="/images/eva.png"
                alt="paul"
                width={400}
                height={180}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full rounded overflow-hidden mb-6 ml-6">
              <Image
                src="/images/register.png"
                alt="paul"
                width={400}
                height={180}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
