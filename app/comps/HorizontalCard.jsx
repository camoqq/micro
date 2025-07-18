// "use client";
// import Image from "next/image";
// import React, { useState } from "react";

// const data = [
//   {
//     image: "/images/1.png",
//     tag: ["#FunctionalMedicine", "#AIInWellcare"],
//     Title: "A $10,000 AI System for Just $697",
//     Date: "Vishu • June 19, 2025",
//     Desc: "The System that's shaking up functional and integrative medicine...",
//   },
//   {
//     image: "/images/3.jpg",
//     tag: ["#AIFortHealers", "#FunctionalFuture"],
//     Title: "AI Has Ignored Holistic Healers Until Now",
//     Date: "Paul • June 21, 2025",
//     Desc: "Why Doctors & Nurses are finally getting their tools...",
//   },
//   {
//     image: "/images/2.png",
//     tag: ["#VirtualCareTeam", "#AICompanions"],
//     Title: "Meet Your Wellcare Team",
//     Date: "Paul • June 21, 2025",
//     Desc: "EVA, Candise & Gwen. Built by functional, Integrative & lifestyle medicine practicioners...",
//   },
//   {
//     image: "/images/4.png",
//     tag: ["#TrustDrivenTech", "#PractitionerBuilt"],
//     Title: "$2M Rooted In Practitioner Feedback",
//     Date: "Vishu • June 19, 2025",
//     Desc: "Hers's how we co-created a system you'll actually use...",
//   },
//   {
//     image: "/images/7.png",
//     tag: ["#WellcareAutomation", "#AIPfofitSystem"],
//     Title: "Your Revenue On Autopilot",
//     Date: "Shane • June 20, 2025",
//     Desc: "A practice model you control...",
//   },
// ];

// const HorizontalCard = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState("");

//   const openModal = (desc) => {
//     setModalContent(desc);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setModalContent("");
//   };

//   return (
//     <div>
//       <div className="flex flex-wrap">
//         {data.map((x, i) => (
//           <div
//             key={i}
//             className="flex p-6 bg-white rounded m-6 w-full md:h-[220px] h-full hover:shadow-2xl hover:shadow-gray-500/40 transition-shadow duration-200"
//           >
//             <div className="w-1/3 rounded overflow-hidden">
//               <Image
//                 src={x.image}
//                 alt="banner"
//                 width={200}
//                 height={200}
//                 className="object-cover w-full h-full"
//               />
//             </div>

//             <div className="w-2/3 flex flex-col ml-4 justify-between">
//               <div className="flex flex-wrap gap-2 mb-2">
//                 {x.tag.map((t, j) => (
//                   <span
//                     key={j}
//                     className="bg-gray-100 rounded px-2 py-1 text-sm"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               <span className="font-bold text-lg">{x.Title}</span>
//               <span className="text-sm text-gray-500">{x.Date}</span>
//               <span
//                 className="text-blue-500 hover:cursor-pointer text-sm"
//                 onClick={() => openModal(x.Desc)}
//               >
//                 {x.Desc}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-white rounded p-6 max-w-md w-full relative shadow-lg">
//             <button
//               className="absolute top-2 right-3 text-xl font-bold text-gray-600"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//             <h2 className="text-lg font-semibold mb-4">More Info</h2>
//             <p>{modalContent}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HorizontalCard;

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { marked } from "marked";
import { data } from "./CardData";

const HorizontalCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    image: "",
    title: "",
    desc: "",
    FullDesc: "",
  });

  const openModal = (item) => {
    setModalContent({
      image: item.image,
      title: item.Title,
      desc: item.Desc,
      FullDesc: item.FullDesc || item.Desc,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent({ image: "", title: "", desc: "" });
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {data.map((x, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row p-6 bg-white rounded m-6 w-full md:h-[220px] h-full transition-shadow duration-200 shadow hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
          >
            <div className="w-full md:w-1/3 aspect-square rounded overflow-hidden">
              <Image
                src={x.image}
                alt="banner"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="md:w-2/3 w-full flex flex-col md:ml-4 ml:0 justify-between">
              <div className="flex flex-wrap md:gap-2 gap-1 mb-2">
                {x.tag.map((t, j) => (
                  <span
                    key={j}
                    className="bg-gray-100 rounded px-2 py-1 text-sm md:mt-0 mt-3"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="font-bold text-lg">{x.Title}</span>
              <span className="text-sm text-gray-500">{x.Date}</span>
              <div
                className="text-blue-500 hover:cursor-pointer text-sm w-full"
                onClick={() => openModal(x)}
              >
                {x.Desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm overflow-y-auto z-50 p-4 flex justify-center items-start"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white border-4 border-gray-600 rounded-[70px] p-8 pr-4 max-w-xl w-full relative shadow-lg max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scrollable content wrapper with padding */}

            <div
              className="overflow-y-scroll max-h-[75vh] pr-4 custom-scrollbar"
              style={{ minHeight: "200px" }}
            >
              {/* Your content here */}
              <div className="flex items-start justify-between mb-4 gap-4">
                <div className="flex flex-col md:flex-row  sm:text-center text-left w-full">
                  <div className="w-42 h-42 md:w-28 md:h-28 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={modalContent.image}
                      alt={modalContent.title}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <h2 className="text-lg font-semibold flex-1 sm:pl-2 pl-0 mt-4 md:mt-4">
                    {modalContent.title}
                  </h2>
                </div>

                <button
                  onClick={closeModal}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Close
                </button>
              </div>

              <p
                className="text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: marked(modalContent.FullDesc),
                }}
              ></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalCard;
