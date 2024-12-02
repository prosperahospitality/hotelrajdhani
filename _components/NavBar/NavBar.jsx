"use client";
import IMAGES from "@/public";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion"
import { Phone, Mail } from "lucide-react"
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
    return roomName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '');
  };
  
  const sublinks = roomsData.map(item => ({
    name: item.room_name,
    url: `/rooms/${formatRoomNameToUrl(item.room_name)}`
  }));
  
  const links = [
    {
      name: "Home", url: "/"
    },
    { name: "About", url: "/aboutus" },
    {
      name: "Rooms",
      sublinks: sublinks,
    },
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

      setRoomsData(allRoomInform)

    } catch (error) {
      console.log("Abc::::::::::>", error)
    }

  }

  useEffect(() => {
    initialFxn();
  }, []);


  return (
    <div className="h-[11rem] sticky top-0 bg-white z-50">
      <div className="w-full border-b py-1">
        <div className='flex w-full justify-center'>
          <div className="flex justify-evenly items-center w-[95%]">
            <div className='flex justify-between w-[50%] text-gray-400 text-md'>
              Welcome to Hotel Rajdhani
            </div>
            <div className="flex justify-end items-center w-[50%] gap-4 text-gray-400 text-md">
              <div className="inline-flex gap-2 items-center text-center"><Phone className="size-4" /> 98983 09244</div>
              <div className="inline-flex gap-2 items-center text-center"><Mail className="size-4" /> hotelrajdhani22@gmail.com</div>
            </div>
          </div>

        </div>
      </div>
      <div className="py-4 w-[90%] lg:w-[95%] mx-auto flex justify-between items-center">
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
          {links?.map((link, index) => (
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
        <Link href={`/filterpage?checkindate=${checkindate}&checkoutdate=${checkoutdate}&adultsSelect=${"1"}&childSelect=${"0"}`} className="hidden lg:flex">
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
        <div className="lg:hidden flex flex-col items-center bg-white py-4 space-y-4 absolute z-50 top-32 left-0 w-full h-screen">
          {links?.map((link, index) => (
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





