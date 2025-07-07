"use client";
import Link from "next/link";
import React from "react";

const quotes = [
  <>
    “Don’t spend so much time trying to choose the perfect opportunity that you
    miss the right opportunity.”{" "}
    <span className="italic ml-3"> Michael Dell, Dell Corp</span>
  </>,
  <>
    “Luck is what happens when preparedness meets opportunity.”{" "}
    <span className="italic ml-3">Seneca, Philosopher</span>
  </>,
  <>
    “How can you get rich if you’re scared to invest a little money?”
    <span className="italic ml-3">Sarah Nelson, Entrepreneur</span>
  </>,
  <>
    “First you learn, then you remove the ‘L."
    <span className="italic ml-3">TradingWalk</span>
  </>,
  <>
    “Strong alone. Unstoppable together.”
    <span className="italic ml-3">Vince Vaughan, Author</span>
  </>,
  <>
    “Your income will grow when your knowledge grows.”{" "}
    <span className="italic ml-3">Norman Vincent Peale, Author</span>
  </>,
  <>
    “Passion, patience, persistence = profit.”{" "}
    <span className="italic ml-3">W. Clement Stone, Success Unlimited</span>
  </>,
  <>
    “Small profits each day adds up to big results.”{" "}
    <span className="italic ml-3">Tom Peters, Author</span>
  </>,
  <>
    “If you wait for the right time, the good times, to start a business, you’ll
    wait all your life.” <span className="italic ml-3">Fran Tarkenton</span>
  </>,
  <>
    “A big business starts small.”{" "}
    <span className="italic ml-3"> Richard Branson</span>
  </>,
  <>
    “Small opportunities are often the beginning of great achievements.”{" "}
    <span className="italic ml-3"> Demosthenes</span>
  </>,
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-sm text-white border-t flex flex-col md:flex-row justify-between gap-2 py-2">
      {/* Left section: Musings + Scrolling Quotes */}
      <div className="w-full md:w-1/3 ">
        <p className="font-semibold text-center">Musings</p>
        <div className="overflow-hidden whitespace-nowrap h-[48px] flex items-center mx-7">
          <div className="animate-marquee inline-block">
            {[...quotes, ...quotes].map((q, i) => (
              <span key={i} className="mx-8 inline-block">
                {q}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Middle section: Invest */}
      <div className="w-full md:w-1/3 flex flex-col text-center">
        <p>Invest with H6FIT</p>
        <p>© {new Date().getFullYear()}</p>
      </div>

      {/* Right section: Contact */}
      <div className="w-full md:w-1/3 flex flex-col text-center">
        <p>Contact Info:</p>
        <Link href="http://www.h6fitsummits.com">
          <p className="hover:underline">info@h6fitsummits.com</p>
        </Link>
      </div>
    </footer>
  );
}
