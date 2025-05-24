"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-colors duration-300 backdrop-blur ${
        scrolled ? "bg-white/0 shadow-sm" : "bg-white/100"
      }`}
    >
      <div className="px-6 py-4 flex items-center justify-between text-green-800 max-w-6xl mx-auto">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold">
          Vagamon Tent Camping
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-2 font-medium">
          {[
            ["Home", "/"],
            ["Packages", "/rates"],
            ["Policies", "/policies"],
            //["Gallery", "/gallery"],
            //["Contact Us", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="mb-2 tracking-tight rounded-full border border-solid border-green-800 text-green-800 transition-colors hover:bg-green-800 hover:text-white flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        {/* Show only when menu is closed */}
        {!isOpen && (
        <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="text-green-800">
            <Menu size={24} />
            </button>
        </div>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="fixed top-0 right-0 h-screen w-1/2 z-40 
            bg-white/80 backdrop-blur-lg border-l border-white/0 
            flex flex-col justify-between"
        >
          {/* Close Button Inside Dropdown */}
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="text-green-800">
              <X size={24} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pt-0 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col row-start-2 items-center text-green-800 text-sm font-[family-name:var(--font-geist-mono)]">
              {[
                ["Home", "/"],
                ["Packages", "/rates"],
                ["Policies", "/policies"],
                //["Gallery", "/gallery"],
                //["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="mb-2 tracking-tight rounded-full border border-solid border-green-800 text-green-800 transition-colors hover:bg-green-800 hover:text-white flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </main>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
