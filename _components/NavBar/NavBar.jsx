"use client";
import IMAGES from "@/public";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X, ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion"

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null); // State for mobile dropdowns
  const pathname = usePathname(); // Get the current path

  const handleMouseEnter = (index) => setActiveDropdown(index);
  const handleMouseLeave = () => setActiveDropdown(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle mobile menu

  const toggleMobileDropdown = (index) => {
    setActiveMobileDropdown((prev) => (prev === index ? null : index));
  };

  const isLinkActive = (link) => {
    if (link.sublinks) {
      return link.sublinks.some((sublink) => pathname === sublink.url);
    }
    return pathname === link.url;
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu
  };


  return (
    <div className="h-32 sticky top-0 bg-white z-50">
      <div className="py-4 w-[90%] lg:w-[80%] mx-auto flex justify-between items-center">
        <Link href="/" className="flex justify-center items-center gap-5">
          <img
            src={IMAGES.hotelrajdhanilogo}
            alt="hotelrajdhanilogo"
            className="w-[16rem] h-[7rem] object-none"
          />
          {/* <div className="flex flex-col">
            <span className="text-[#800000] font-semibold leading-tight">
              Hotel
            </span>
            <span className="font-semibold text-gray-400 leading-tight">
              Rajdhani
            </span>
          </div> */}
        </Link>

        {/* Hamburger icon for small devices */}
        <div className="lg:hidden flex items-center justify-between">
          <button
            onClick={toggleMenu}
            className="text-gray-500 text-3xl focus:outline-none"
          >
            {isMenuOpen ? <X /> : <Menu />} {/* Menu open/close icon */}
          </button>
        </div>

        {/* Links for large devices */}
        <div className="space-x-4 hidden lg:flex">
          {links.map((link, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={link.url || "#"}
                className={`p-2 ${isLinkActive(link)
                  ? "text-black font-bold"
                  : "text-gray-500 font-semibold hover:text-black"
                  }`}
              >
                {link.name}
              </Link>

              {link.sublinks && activeDropdown === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-full mt-1 bg-white shadow-lg p-2 rounded-lg inline-block min-w-[20rem] max-w-[28rem]"
                >
                  {link.sublinks.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sublink.url}
                      className={`block p-2 ${pathname === sublink.url
                        ? "text-black font-bold"
                        : "text-gray-500 font-semibold hover:text-black"
                        }`}
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </motion.div>
              )}

            </div>
          ))}
        </div>

        {/* Contact button for large devices */}
        <Link href="/contactus" className="hidden lg:flex">
          <Button
            radius="full"
            className="bg-[#800000] text-white font-semibold px-4 tracking-wider "
          >
            Book Now
          </Button>
        </Link>
      </div>

      {/* Mobile menu links (only visible when menu is open) */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-white py-4 space-y-4 absolute z-50 top-16 left-0 w-full h-screen">
          {links.map((link, index) => (
            <div key={index} className="relative w-full text-start">
              {link.sublinks ? (
                <button
                  onClick={() => toggleMobileDropdown(index)}
                  className={`p-2 w-full text-start px-5 flex justify-between items-center ${isLinkActive(link) ? "text-black font-bold" : "text-gray-500 font-semibold hover:text-black"
                    }`}
                >
                  {link.name}
                  {/* Chevron icon to indicate open/close state (only for sublinks) */}
                  <span>
                    {activeMobileDropdown === index ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
                  </span>
                </button>
              ) : (
                <Link
                  href={link.url}
                  onClick={handleLinkClick} // Close the menu and navigate
                  className={`p-2 w-full text-start px-5 ${pathname === link.url ? "text-black font-bold" : "text-gray-500 font-semibold hover:text-black"
                    }`}
                >
                  {link.name}
                </Link>
              )}

              {/* Mobile Dropdown */}
              {link.sublinks && activeMobileDropdown === index && (
                <div className="flex flex-col items-center mt-2 border bg-gray-200 m-2">
                  {link.sublinks.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sublink.url}
                      onClick={handleLinkClick}
                      className={`block p-2 w-full text-start px-5 ${pathname === sublink.url ? "text-black font-bold" : "text-gray-500 font-semibold hover:text-black"
                        }`}
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Contact button for small devices */}
          <Link href="/contactus" className="w-full flex justify-start pt-5 px-5 ">
            <Button radius="full" className="bg-[#800000] text-white font-semibold px-4 tracking-wider">
              Let’s Get Started!
            </Button>
          </Link>
        </div>
      )}

    </div>
  );
};

export default NavBar;

const links = [
  {
    name: "Home",
  },
  { name: "About", url: "/prices" },
  {
    name: "Rooms",
    sublinks: [
      { name: "Single Bed Non AC Room", url: "/services/web-development" },
      { name: "Double Bed Non AC Room", url: "/services/digital-marketing" },
      { name: "Double Bed AC Room", url: "/services/revenue-management" },
      { name: "Triple Bed Non AC Room", url: "/services/revenue-management" },
      { name: "Super Deluxe AC Room", url: "/services/revenue-management" },
    ],
  },
  { name: "Testimonials", url: "/testimonials" },
  { name: "Blogs", url: "/blogs" },
  { name: "Contact Us", url: "/blogs" },
];



