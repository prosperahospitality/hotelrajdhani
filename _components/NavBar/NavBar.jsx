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
import { handleLocateUsFxn, handleTouristSpotsFxn, handlePartnersClickFxn, handleRajdhaniRestaurantFxn } from "@/app/redux/slices/navSlice";


const NavBar = () => {
  const dispatch = useDispatch();
  let defaultDate = today(getLocalTimeZone());
  const nextDay = defaultDate.add({ days: 1 });

  const pathname = usePathname();

  const lastPart = pathname.split('/').filter(Boolean).pop();

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

  const formatRoomNameToUrl = (roomName) => {
    return roomName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
  };

  const sublinks = roomsData.map((item) => ({
    name: item.room_name,
    url: `/rooms/${formatRoomNameToUrl(item.room_name)}`,
  }));

  const sublinkss = [
    {
      name: "Rajputana Stainless Limited",
      logo: "/img/logos/rajputana_stainless_limited.png",
    },
    {
      name: "Setco Auto System Pvt Ltd",
      logo: "/img/logos/setco_auto_system.webp",
    },
    {
      name: "MG Motors",
      logo: "/img/logos/mg_motors.png",
    },
    {
      name: "R.K. Feed Equipments",
      logo: "/img/logos/rk_feed_equipments.jpg",
    },
    {
      name: "Sandhar Engineering Pvt Ltd",
      logo: "/img/logos/sandhar_engineering.png",
    },
    {
      name: "Supreme Treon",
      logo: "/img/logos/supreme_treon.png",
    },
    {
      name: "R.K. Bio Feed Machine",
      logo: "/img/logos/rk_bio_feed_machine.png",
    },
    {
      name: "Purity Flex Pack Ltd",
      logo: "/img/logos/purity_flex_pack.webp"
    },
    {
      name: "R.P. Products Pharma Pvt Ltd",
      logo: "/img/logos/rp_products_pharma.png",
    },
    {
      name: "Krishna Defence and Allied Industries Ltd",
      logo: "/img/logos/krishna_defence.png",
    },
    {
      name: "New Vishwakarma Engineering",
      logo: "/img/logos/new_vishwakarma_engineering.png",
    },
    {
      name: "Rubamin Ltd",
      logo: "/img/logos/rubamin.png",
    },
  ];

  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/aboutus" },
    { name: "Rooms", url: sublinks ? sublinks[0]?.url : "/rooms/single-bed-non-ac-room", sublinks: sublinks },
    { name: "Companies Corporate Stays", sublinks: sublinkss },
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

  const handleRajdhaniRestaurant = () => {
    dispatch(handleRajdhaniRestaurantFxn(true))
  }

  const handlePartnersClick = () => {
    dispatch(handlePartnersClickFxn(true))
  }

  return (
    <div className="h-auto sticky top-0 bg-white z-50 border-b shadow-md">
      {/* Top Info Bar */}
      <div className="w-full border-b py-1 z-50">
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
          <div
            onClick={() => (window.location.href = '/')}
            className="flex items-center cursor-pointer"
          >
            <img
              src={IMAGES.logowithoutbg}
              alt="hotelrajdhanilogo"
              className="w-40 lg:w-60 h-auto object-contain"
            />
          </div>


          {/* Hamburger icon for small devices */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-500 text-2xl">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Links for large devices */}
          <div className="hidden lg:flex space-x-6">
            {links.map((link, index) => {

              if (link.name === "Companies Corporate Stays") {

                return (
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
                        className="absolute w-[300px] h-[275px] overflow-y-auto left-0 bg-white shadow-md px-3 rounded-md"
                      >
                        {(
                          link.sublinks.map((sublink, subIndex) => (
                            <div
                              key={subIndex}
                              onClick={() => handlePartnersClick()}
                              className="flex items-center p-2 text-gray-500 hover:text-black cursor-pointer gap-2"
                            >
                              <img
                                src={sublink.logo}
                                alt={sublink.name}
                                className="w-12 h-12 rounded-full object-fill border border-gray-300"
                              />
                              <p className="text-gray-600 hover:text-black font-medium">{sublink.name}</p>
                            </div>
                          ))
                        )}
                      </motion.div>
                    )}
                  </div>
                )

              } else {

                return (
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
                )
              }
            }
            )}
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
        <div className="w-[95%] mx-auto py-4 grid grid-cols-12 justify-center items-center">
          {/* Logo */}
          <div
            onClick={() => (window.location.href = '/')}
            className="flex items-center col-span-11 place-content-end mr-[35px] cursor-pointer"
          >
            <img
              src={IMAGES.logowithoutbg}
              alt="hotelrajdhanilogo"
              className="w-56 lg:w-60 h-auto object-contain"
            />
          </div>


          {/* Hamburger icon for small devices */}
          <div className="lg:hidden self-baseline text-end z-50">
            <button onClick={toggleMenu} className="text-gray-500 text-2xl">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
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
        <div className="lg:hidden fixed top-0 left-0 w-full h-[100vh] bg-slate-200 z-40 flex flex-col p-6 overflow-y-auto gap-10">

          <img
            src={IMAGES.logowithoutbg}
            alt="hotelrajdhanilogo"
            className="w-56 lg:w-60 h-auto object-contain"
          />

          {/* Navigation Links */}
          <div className="h-[100vh] w-full flex flex-col justify-start items-start uppercase">
            {links.map((link, index) => {
              if (link.name === "Companies Corporate Stays") return null;

              return (
                <div key={index} className="relative w-full">
                  {link.sublinks ? (
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="flex justify-between w-full p-2 text-gray-500 hover:text-black uppercase"
                    >
                      {link.name}
                      {activeMobileDropdown === index ? <ChevronUp /> : <ChevronDown />}
                    </button>
                  ) : (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = link.url;
                      }}
                      className="block px-2 py-3 text-gray-500 hover:text-black w-full"
                    >
                      {link.name}
                    </a>
                  )}

                  {/* Dropdown Sublinks */}
                  {link.sublinks && activeMobileDropdown === index && (
                    <div className="flex flex-col max-h-[217px] mt-2 bg-gray-100 rounded-xl py-2 overflow-y-auto">
                      {isLoading ? (
                        <div className="flex justify-center items-center h-32">
                          <Spinner size="lg" color="danger" />
                        </div>
                      ) : (
                        link.sublinks.map((sublink, subIndex) => (
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
                        ))
                      )}
                    </div>
                  )}
                </div>
              );
            })}


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
                {
                  lastPart === undefined
                    ? <>
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
                    </>
                    : ""
                }
              </div>
              {
                lastPart === undefined
                  ? <>
                    <div className="flex justify-center items-center w-full">
                      <Button
                        radius="full"
                        className="bg-[#F5F5DC] text-[#333333] font-semibold flex mt-4 px-28"
                        onClick={(e) => {
                          handleLinkClick();
                          handleRajdhaniRestaurant();
                        }}
                      >
                        Rajdhani Restaurant
                      </Button>
                    </div>
                  </>
                  : ""
              }
            </div>
          </div>



          {/* Social Icons */}
          {/* <div className="flex space-x-4 w-full justify-center items-center">
                <a href="https://www.facebook.com/Sanikabaugfarmhouse/" className="hover:text-[#c47a5a]">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/sanika_baug/" className="hover:text-[#c47a5a]">
                  <Instagram />
                </a>
              </div> */}
        </div>
      )}
    </div>
  );
};

export default NavBar;
