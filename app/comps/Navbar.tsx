"use client";
import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-blue-500 text-white p-4 fixed top-0 left-0 z-10 w-full">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        {/* Logo or Title */}
        <h1 className="text-lg font-bold">
          <Link href="/">H6FIT Wellcare AI Sandbox Summit</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 text-sm">
          <li>
            <Link href="/routes/blogs">Blog</Link>
          </li>
          <li>
            <Link href="/routes/whitepapers">White Papers</Link>
          </li>
          <li>
            <Link href="/routes/research">Research</Link>
          </li>
          <li>
            <Link href="/routes/about">About</Link>
          </li>
          <li>
            <Link href="/routes/summit">Summit</Link>
          </li>
        </ul>

        {/* Social Icons + Subscribe (desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="https://www.linkedin.com/company/h6fitventurestudio/">
            <IconLink icon={<FaLinkedin />} />
          </Link>
          <Link href="https://www.facebook.com/H6FITVentureStudio">
            <IconLink icon={<FaFacebookF />} />
          </Link>
          <Link href="https://www.tiktok.com/@h6fit">
            <IconLink icon={<FaTiktok />} />
          </Link>
          <Link href="https://x.com/H6FITVentStudio">
            <IconLink icon={<FaSquareXTwitter />} />
          </Link>
          <Link href="https://www.instagram.com/h6fitventurestudio">
            <IconLink icon={<FaInstagram />} />
          </Link>
          <button className="bg-white text-black rounded px-3 py-1 ml-2 text-sm">
            Subscribe
          </button>
        </div>

        {/* Hamburger (mobile only) */}
        <div className="md:hidden ">
          <button onClick={() => toggleMenu()} className="hover:cursor-pointer">
            {isOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-sm">
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/routes/blogs">Blog</Link>
            </li>
            <li>
              <Link href="/routes/whitepapers">White Papers</Link>
            </li>
            <li>
              <Link href="/routes/research">Research</Link>
            </li>
            <li>
              <Link href="/routes/about">About</Link>
            </li>
            <li>
              <Link href="/routes/summit">Summit</Link>
            </li>
            <li></li>
          </ul>
          <div className="flex gap-2 mt-3 hover:cursor-pointer">
            <Link href="https://www.linkedin.com/company/h6fitventurestudio/">
              <IconLink icon={<FaLinkedin />} />
            </Link>
            <Link href="https://www.facebook.com/H6FITVentureStudio">
              <IconLink icon={<FaFacebookF />} />
            </Link>
            <Link href="https://www.tiktok.com/@h6fit">
              <IconLink icon={<FaTiktok />} />
            </Link>
            <Link href="https://x.com/H6FITVentStudio">
              <IconLink icon={<FaSquareXTwitter />} />
            </Link>
            <Link href="https://www.instagram.com/h6fitventurestudio">
              <IconLink icon={<FaInstagram />} />
            </Link>
          </div>
          <button className="bg-white text-black rounded px-3 py-1 text-sm mt-2 hover:cursor-pointer">
            Subscribe
          </button>
        </div>
      )}
    </div>
  );
}

// Reusable icon wrapper
const IconLink = ({ icon }: any) => (
  <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center">
    {icon}
  </div>
);
