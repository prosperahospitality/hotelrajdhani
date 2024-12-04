"use client";
import IMAGES from "@/public";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { today, getLocalTimeZone } from "@internationalized/date";

const NavBar = () => {
  let defaultDate = today(getLocalTimeZone());
  const nextDay = defaultDate.add({ days: 1 });

  const formatDate = (date) => {
    const day = String(date.day).padStart(2, "0");
    const month = String(date.month).padStart(2, "0");
    const year = String(date.year);
    return `${day}-${month}-${year}`;
  };

  const [checkindate, setCheckindate] = useState(formatDate(defaultDate));
  const [checkoutdate, setCheckoutdate] = useState(formatDate(nextDay));
  const [roomsData, setRoomsData] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const pathname = usePathname();

  const formatRoomNameToUrl = (roomName) => {
    return roomName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
  };

  const sublinks = roomsData.map((item) => ({
    name: item.room_name,
    url: `/rooms/${formatRoomNameToUrl(item.room_name)}`,
  }));

  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/aboutus" },
    { name: "Rooms", sublinks: sublinks },
    { name: "Testimonials", url: "/testimonials" },
    { name: "Blogs", url: "/blog" },
    { name: "Contact Us", url: "/contactus" },
  ];

  const handleMouseEnter = (index) => setActiveDropdown(index);
  const handleMouseLeave = () => setActiveDropdown(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
    setIsMenuOpen(false);
  };

  const initialFxn = async () => {
    try {
      const response = await fetch(`/api/admin/property_master/room_details?hotelId=123456`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      const allRoomInform = result.dataAllActive;

      setRoomsData(allRoomInform);
    } catch (error) {
      console.log("Abc::::::::::>", error);
    }
  };

  useEffect(() => {
    initialFxn();
  }, []);

  return (
    <div className="h-auto sticky top-0 bg-white z-50 border-b">
      {/* Top Info Bar */}
      <div className="w-full border-b py-1">
        <div className="flex justify-between items-center w-[95%] mx-auto text-sm text-gray-400">
          <span>Welcome to Hotel Rajdhani</span>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> 98983 09244
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> hotelrajdhani22@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-[95%] mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src={IMAGES.logowithoutbg}
            alt="hotelrajdhanilogo"
            className="w-40 lg:w-60 h-auto object-contain"
          />
        </Link>

        {/* Hamburger icon for small devices */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-500 text-2xl">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Links for large devices */}
        <div className="hidden lg:flex space-x-6">
          {links.map((link, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={link.url || "#"}
                className={`p-2 ${
                  isLinkActive(link)
                    ? "text-black font-bold"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
              {link.sublinks && activeDropdown === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute w-[270px] left-0 mt-2 bg-white shadow-md p-3 rounded-md"
                >
                  {link.sublinks.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sublink.url}
                      className="block p-2 text-gray-500 hover:text-black"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Book Now Button */}
        <Link
          href={`/filterpage?checkindate=${checkindate}&checkoutdate=${checkoutdate}&adultsSelect=1&childSelect=0`}
          className="hidden lg:flex"
        >
          <Button
            radius="full"
            className="bg-[#800000] text-white font-semibold px-4"
          >
            Book Now
          </Button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col bg-white w-full space-y-4 absolute z-50 top-[8rem] left-0 px-6">
          {links.map((link, index) => (
            <div key={index} className="relative">
              {link.sublinks ? (
                <button
                  onClick={() => toggleMobileDropdown(index)}
                  className="flex justify-between w-full p-2 text-gray-500 hover:text-black"
                >
                  {link.name}
                  {activeMobileDropdown === index ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </button>
              ) : (
                <Link
                  href={link.url}
                  onClick={handleLinkClick}
                  className="block p-2 text-gray-500 hover:text-black"
                >
                  {link.name}
                </Link>
              )}
              {link.sublinks && activeMobileDropdown === index && (
                <div className="flex flex-col mt-2 bg-gray-100">
                  {link.sublinks.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sublink.url}
                      onClick={handleLinkClick}
                      className="block p-2 pl-4 text-gray-500 hover:text-black"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
          href={`/filterpage?checkindate=${checkindate}&checkoutdate=${checkoutdate}&adultsSelect=1&childSelect=0`}
          className="flex mt-4 pb-4"
        >
          <Button
            radius="full"
            className="bg-[#800000] text-white font-semibold px-4"
          >
            Book Now
          </Button>
        </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
