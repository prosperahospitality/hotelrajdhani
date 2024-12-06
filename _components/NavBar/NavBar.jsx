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
import { Spinner } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { handleLocateUsFxn, handleTouristSpotsFxn } from "@/app/redux/slices/navSlice";


const NavBar = () => {
  const dispatch = useDispatch();
  let defaultDate = today(getLocalTimeZone());
  const nextDay = defaultDate.add({ days: 1 });

  const [isLoading, setIsLoading] = useState(true);

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
    { name: "Rooms", url: sublinks ? sublinks[0]?.url : "/rooms/single-bed-non-ac-room", sublinks: sublinks },
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
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    initialFxn();
  }, []);

  const handleLocateus = () => {
    dispatch(handleLocateUsFxn(true))
  }

  const handleTouristSpot = () => {
    dispatch(handleTouristSpotsFxn(true))
  }

  return (
    <div className="h-auto sticky top-0 bg-white z-50 border-b">
      {/* Top Info Bar */}
      <div className="w-full border-b py-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 w-[95%] mx-auto text-sm text-gray-400">
          {/* Welcome Message */}
          <span className="justify-self-center md:justify-self-start">
            Welcome to Hotel Rajdhani
          </span>

          {/* Contact Information */}
          <div className="flex justify-center md:justify-end gap-4 items-center">
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
      <div className="hidden lg:block">
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
                <div
                  onClick={() => (window.location.href = link.url || "#")}
                  className={`p-2 ${isLinkActive(link)
                    ? "text-black font-bold"
                    : "text-gray-500 hover:text-black cursor-pointer"
                    }`}
                >
                  {link.name}
                </div>

                {link.sublinks && activeDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute w-[270px] left-0 bg-white shadow-md px-3 rounded-md"
                  >
                    {isLoading ? (
                      <div className="flex justify-center items-center h-32">
                        <Spinner size="lg" color="danger" />
                      </div>
                    ) : (
                      link.sublinks.map((sublink, subIndex) => (
                        <div
                          key={subIndex}
                          onClick={() => (window.location.href = sublink.url)}
                          className="block p-2 text-gray-500 hover:text-black cursor-pointer"
                        >
                          {sublink.name}
                        </div>
                      ))
                    )}
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
              className="bg-[#F5F5DC] text-[#333333] font-semibold px-4"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="w-[95%] mx-auto py-4 grid grid-cols-4 justify-center items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center col-span-3 place-content-end">
            <img
              src={IMAGES.logowithoutbg}
              alt="hotelrajdhanilogo"
              className="w-48 lg:w-60 h-auto object-contain"
            />
          </Link>

          {/* Hamburger icon for small devices */}
          <div className="lg:hidden self-baseline text-end">
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
                <div
                  onClick={() => (window.location.href = link.url || "#")}
                  className={`p-2 ${isLinkActive(link)
                    ? "text-black font-bold"
                    : "text-gray-500 hover:text-black cursor-pointer"
                    }`}
                >
                  {link.name}
                </div>

                {link.sublinks && activeDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute w-[270px] left-0 bg-white shadow-md px-3 rounded-md"
                  >
                    {isLoading ? (
                      <div className="flex justify-center items-center h-32">
                        <Spinner size="lg" color="danger" />
                      </div>
                    ) : (
                      link.sublinks.map((sublink, subIndex) => (
                        <div
                          key={subIndex}
                          onClick={() => (window.location.href = sublink.url)}
                          className="block p-2 text-gray-500 hover:text-black cursor-pointer"
                        >
                          {sublink.name}
                        </div>
                      ))
                    )}
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
              className="bg-[#F5F5DC] text-[#333333] font-semibold px-4"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </div>


      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col bg-red-100 w-[100%] h-[28rem] space-y-4 absolute z-50 top-[8rem] left-0 p-6 rounded-xl overflow-y-auto">
{links.map((link, index) => (
  <div key={index} className="relative">
    {link.sublinks ? (
      <button
        onClick={() => toggleMobileDropdown(index)}
        className="flex justify-between w-full p-2 text-gray-500 hover:text-black"
      >
        {link.name}
        {activeMobileDropdown === index ? <ChevronUp /> : <ChevronDown />}
      </button>
    ) : (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor behavior
          window.location.href = link.url; // Navigate to the desired URL
        }}
        className="block p-2 text-gray-500 hover:text-black"
      >
        {link.name}
      </a>
    )}
    {link.sublinks && activeMobileDropdown === index && (
      <div className="flex flex-col mt-2 bg-gray-100 rounded-xl py-2">
        {link.sublinks.map((sublink, subIndex) => (
          <a
            key={subIndex}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = sublink.url;
            }}
            className="block p-2 pl-4 text-gray-500 hover:text-black"
          >
            {sublink.name}
          </a>
        ))}
      </div>
    )}
  </div>
))}

          <div>
            <div className="inline-flex gap-4">
              <Link
                href={`/filterpage?checkindate=${checkindate}&checkoutdate=${checkoutdate}&adultsSelect=1&childSelect=0`}
                className="flex mt-4 pb-4"
              >
                <Button
                  radius="full"
                  className="bg-[#F5F5DC] text-[#333333] font-semibold px-4"
                >
                  Book Now
                </Button>
              </Link>
              <Button
                radius="full"
                className="bg-[#F5F5DC] text-[#333333] font-semibold flex mt-4 px-4"
                onClick={(e) => {
                  handleLinkClick();
                  handleLocateus();
                }}
              >
                Locate Us
              </Button>
              {/* <Link
                href={`/`}
                className="flex mt-4 pb-4"
              > */}
              <Button
                radius="full"
                className="bg-[#F5F5DC] text-[#333333] font-semibold flex mt-4 px-4"
                onClick={(e) => {
                  handleLinkClick();
                  handleTouristSpot();
                }}
              >
                Tourist spots
              </Button>
              {/* </Link> */}
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default NavBar;
