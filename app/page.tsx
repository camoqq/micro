import HorizontalCard from "./comps/HorizontalCard";
import SideCard from "./comps/SideCard";
import Hero from "./comps/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-300 min-h-screen md:mx-40">
      <Hero />
      <div className="flex flex-col lg:flex-row justify-center ">
        <div className="w-full lg:w-2/3 lg:mb-0 ">
          <HorizontalCard />
        </div>
        <div className="w-full lg:w-1/3 pr-12  ">
          <SideCard />
          <div className="flex flex-col gap-6">
            <div className="w-full  rounded overflow-hidden mb-2 ml-6">
              {/* <Image
                src="/images/conference.jpg"
                alt="paul"
                width={400}
                height={180}
                className="object-cover w-full h-full"
              /> */}
              <video width="100%" height="auto" controls autoPlay loop muted>
                <source src="/videos/H6FIT_Campus.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <div className="bg-white ml-6 w-full rounded-t">
                <h2 className="text-lg text-center p-1 font-bold">Meet EVA</h2>
              </div>
              <div className="w-full  rounded-b overflow-hidden mb-2 ml-6">
                {/* <Image
                  src="/images/eva.jpg"
                  alt="paul"
                  width={400}
                  height={180}
                  className="object-cover w-full h-full"
                /> */}
                <video width="100%" height="auto" controls autoPlay loop muted>
                  <source src="/videos/Eva.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="w-full rounded overflow-hidden mb-6 ml-6">
              <Image
                src="/images/candise.png"
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
