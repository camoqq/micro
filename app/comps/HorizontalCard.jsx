"use client";
import Image from "next/image";
import React, { useState } from "react";

const data = [
  {
    image: "/images/1.png",
    tag: ["#FunctionalMedicine", "#AIInWellcare"],
    Title: "A $10,000 AI System for Just $697",
    Date: "Vishu • June 19, 2025 • Comment",
    Desc: "The System that's shaking up functional and integrative medicine...",
  },
  {
    image: "/images/3.jpg",
    tag: ["#AIFortHealers", "#FunctionalFuture"],
    Title: "AI Has Ignored Holistic Healers Until Now",
    Date: "Paul • June 21, 2025 • Comment",
    Desc: "Why Doctors & Nurses are finally getting their tools...",
  },
  {
    image: "/images/2.png",
    tag: ["#VirtualCareTeam", "#AICompanions"],
    Title: "Meet Your Wellcare Team",
    Date: "Paul • June 21, 2025 • Comment",
    Desc: "EVA, Candise & Gwen. Built by functional, Integrative & lifestyle medicine practicioners...",
  },
  {
    image: "/images/4.png",
    tag: ["#TrustDrivenTech", "#PractitionerBuilt"],
    Title: "$2M Rooted In Practitioner Feedback",
    Date: "Vishu • June 19, 2025 • Comment",
    Desc: "Hers's how we co-created a system you'll actually use...",
  },
  {
    image: "/images/7.png",
    tag: ["#WellcareAutomation", "#AIPfofitSystem"],
    Title: "Your Revenue On Autopilot",
    Date: "Shane • June 20, 2025 • Comment",
    Desc: "A practice model you control...",
  },
];

const HorizontalCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (desc) => {
    setModalContent(desc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent("");
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {data.map((x, i) => (
          <div
            key={i}
            className="flex p-6 bg-white rounded m-6 w-full md:h-[220px] h-full hover:shadow-2xl hover:shadow-gray-500/40 transition-shadow duration-200"
          >
            <div className="w-1/3 rounded overflow-hidden">
              <Image
                src={x.image}
                alt="banner"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="w-2/3 flex flex-col ml-4 justify-between">
              <div className="flex flex-wrap gap-2 mb-2">
                {x.tag.map((t, j) => (
                  <span
                    key={j}
                    className="bg-gray-100 rounded px-2 py-1 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="font-bold text-lg">{x.Title}</span>
              <span className="text-sm text-gray-500">{x.Date}</span>
              <span
                className="text-blue-500 hover:cursor-pointer text-sm"
                onClick={() => openModal(x.Desc)}
              >
                {x.Desc}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded p-6 max-w-md w-full relative">
            <button
              className="absolute top-2 right-3 text-xl font-bold text-gray-600"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-4">More Info</h2>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalCard;
