"use client"; // Ensure client-side behavior in Next.js

import { useState } from "react";
import Image from "next/image";

const SideCard = () => {
  const [showModal, setShowModal] = useState(false);

  const shortDesc =
    "Paul is a pioneer in AI for holistic healing. He’s passionate about blending technology with care.";
  const fullDesc = `My Heart Built H6FIT: My 20-Year Journey from Near Death to a New Life Economy
At age 34, I was a peak-performance machine: 5,000 calories a day, protein shakes, pushing
limits as a driven entrepreneur and extreme athlete. By all outward accounts, I was thriving.
But something inside me was beginning to unravel.
What started as fatigue and strange symptoms soon became impossible to ignore. I consulted
many doctors. Most dismissed my complaints as anxiety or the aftershock of overtraining. One
even wrote me a prescription for anxiety. I declined. I didn’t want sedation. I wanted the truth.
By 2006, I was 54 and at a crossroads. I sold my successful business, not for a new venture,
but to save my own life. That’s how dire things had become. In early 2007, on what was meant
to be a healing vacation, I could barely walk across a hotel room. When I returned home, I
begged my primary care doctor for an angiogram. He refused.
So, I found another doctor. A cardiologist. He compared two EKGs and saw something everyone
else had missed. The angiogram revealed a 90% blockage in my left anterior descending artery,
the “widowmaker.” I was six months from a fatal heart attack. The stent saved me. Or so I
thought.
A Broken System and a Burning Question
From 2007 to 2010, the symptoms kept returning. I endured three more interventions, including
one where the attending cardiologist didn’t even show up. A hospital nurse, after seeing me
multiple times—suggested I might need bypass surgery. When I relayed this to my doctor, he
scoffed and told me to be “happy to live another 6 to 8 years.”
That comment lit a fire in me. I wasn’t ready to accept death disguised as advice.
I walked out, winded, angry, but determined to get to the root cause. What began that day
wasn’t just a quest for survival. It became the origin of a lifelong mission.
2010–2012: Becoming My Own Doctor
I immersed myself in the world of medicine, attending functional and integrative conferences
undercover as press, studying at night, testing myself, and experimenting with protocols. I
found what doctors hadn’t: hormonal imbalances, nutrient deficiencies, undiagnosed
hypothyroidism, and a total lack of whole-systems diagnostics. At one of the conferences, I met
a physician train in lifestyle medicine. She verified what I learned and set me up with a regime.
My transformation was undeniable. Within three months on my new protocol, I felt better than I
had in decades. Friends and family saw it too. And they asked: “Can you help me?” And I did.
From Paris to Istanbul: A Global Education
In 2014, I moved to Europe. In Istanbul, I discovered a world where holistic medicine was
mainstream. I could walk into a pharmacy and access the very protocols that had saved me,

without resistance or ridicule. It was here, nourished by the Mediterranean diet and free of
stress, that I founded H6FIT: the six key drivers of Functional &amp; Integrative Therapeutics.
I returned to the U.S. determined to build something greater than a protocol, a full-fledged
inversion of sick-care. But I had to relocate. California’s regulatory environment was too hostile
toward holistic care, so I moved to Florida, met like-minded practitioners, and began
architecting a new health economy.
The Second Life Saved
In 2017, despite my wellness regimen, something still wasn’t right. A forward-thinking doctor,
Dr. J., recognized what others missed: a second artery was failing. He referred me to an
integrative cardiologist who scheduled a double bypass, a LIMA. I was told the procedure could
extended my life by another 30 to 40 years. Nice!
Coming out of surgery, I faced yet another battle: anesthesia-induced depression. I refused
pharmaceuticals. Another doctor, Dr. G., suggested I increase my growth hormone and added a
precursor compound. Recovery wasn’t instant, but it was complete.
The Mission: H6FIT Is Born
That was the moment I realized: this is no longer about me. It’s about millions like me:
undiagnosed, mistreated, dismissed. I founded H6FIT Wellcare not as another product, but as a
counter-system.
 A life-like virtual ecosystem built on behavior change, diagnostics, AI agents, and human
compassion.
 A new AI-forward economy which will eventually be fueled by a Health Coin where
people are rewarded for getting healthier.
 A model designed for longevity, vitality, and prevention, not symptom-chasing or
pharmaceutical dependence.
Imagineering the Future of Medicine
Today, at 73, I’m still standing, building, and imagining a new world. With an incredible team,
we’ve created:
 A virtual Wellcare Omniverse with immersive specialty centers
 A functional protocol framework for practitioners and coaches
 A Web 3.0-ready Health Pass, giving people ownership in their care
 And AI-powered Wellcare Agents like EVA and CANDISE, designed to scale healing
globally
This is not just a business. It’s a movement. A second chance extended to others. A living
answer to the question I asked on that hill in San Francisco: “What if the system is broken, but
I don’t have to be?”

A Bit About Me…
I’ve been told I am a visionary. I prefer imagineer. Why? Because, according to my early in life
hero, Walt Disney, he said that “an imagineer is someone who is skilled in creative ideas and
turning them into practical form.” That’s where it all started for me.
With 15 years of experience in healthcare innovation and over three decades in internet
strategy and digital transformation, I’ve built an amazing team of dedicated physicians,
academicians, researchers, health professionals, and business executives who have helped built
H6FIT Wellcare into what it is today.
For the last 27 years, I’ve specialized in designing virtual, life-like, biophilic web-based
ecosystems that deliver measurable and life-enhancing outcomes.
In May 2023, we expanded our team expertise into AI and machine learning, integrating these
technologies into his groundbreaking work in healthcare. As the founder of H6FIT, I’ve
pioneered a well-being economy that combines virtual care health tech, marketing and
management, digital human avatars, and tokenized incentives with advanced six key drivers of
holistic well-being, including, but not limited to advanced diagnostics and personalized wellcare
plans to redefine preventive healthcare.
I enjoy speaking at events, and have presented at prestigious events such as the Age
Management Medicine Group (AMMG) Conference and numerous industry forums. My work is
distinguished by my ability to create immersive, interactive environments that empowers people
and delivers tangibly persuasive improvements in health and well-being.
I attended UCLA, where I focused on Interactive Communications, a foundation for my
innovative approach to blending technology, strategy, and behavioral insights. My passion for
creating impactful solutions continues to inspire me to help people and drive meaningful change
across the healthcare and technology sectors.`;

  return (
    <>
      <div className="flex sm:flex-col flex-row p-6 bg-white rounded m-6 w-full shadow hover:shadow-2xl transition-shadow duration-300">
        {/* Image */}
        <div className="w-full sm:w-auto sm:max-w-[150px] mx-auto sm:mx-0 aspect-square rounded overflow-hidden mb-4 sm:mb-0 lg:mx-auto lg:mb-2">
          <Image
            src="/images/6.jpg"
            alt="paul"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Short Description + Read More Link */}
        <div className="ml-4">
          <p className="text-sm text-gray-700 mb-1">{shortDesc}</p>
          <button
            onClick={() => setShowModal(true)}
            className="text-blue-500 text-sm underline hover:text-blue-700 w-fit hover:cursor-pointer"
          >
            Read more
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-lg font-semibold mb-2">About Paul</h2>
            <p className="text-sm text-gray-700 whitespace-pre-line">
              {fullDesc}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SideCard;
