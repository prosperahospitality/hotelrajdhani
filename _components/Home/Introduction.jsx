"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Milestone, SendHorizontal } from "lucide-react";
import IMAGES from '@/public';
import Link from "next/link";

const Introduction = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Set a maximum value for the Y axis movement (e.g., 100 pixels)
  const maxY = 100;

  // Add maxY to restrict how far the card can move
  const limitY = (animateY) => Math.min(Math.max(animateY, -maxY), maxY);

  return (
    <div className="flex flex-col gap-20 py-10 lg:py-20">
      <div className="h-full  w-[95%] mx-auto flex justify-center items-center flex-col lg:flex-row gap-5 ">
        <div className="flex flex-col w-full lg:w-[50%] justify-center h-full items-center gap-2 ">
          <p className="flex justify-start w-full text-green-500 text-2xl leading-relaxed">
            Hotel Rajdhani, The Best Hotel In Pavaghad And Halol
          </p>
          <div className="flex justify-start w-full ">
            <h1 className="text-2xl lg:text-4xl font-semibold text-gray-600">Stay Close, Live Comfortably</h1>
          </div>
          <div className="flex flex-col gap-8">

            <p className="mt-6 text-justify text-gray-800 leading-relaxed">
              Welcome to Our Hotel in Halol, best hotel in pavaghad, best hotel in halol, your perfect escape in the heart of the town. Located just 300 meters from the bus stand, our family-friendly hotel offers a blend of comfort and convenience. Whether you’re here for relaxation or adventure, enjoy cozy rooms, delicious meals, and secure parking, all while being close to local attractions like the Pavagadh Mahakali Temple.
            </p>
            <Link
              href={`/`}
            >
              <button className="bg-[#800000] px-6  py-3 rounded-full text-white flex-1 font-semibold mt-5">
                Book Now
              </button>
            </Link>
            {/* <div className="flex  gap-5">
              <span className="size-12 flex justify-center items-center  rounded-lg bg-blue-100">
                <SendHorizontal className="text-blue-500 " />
              </span>
              <div className="flex flex-col gap-2 w-full">
                <h2 className="text-lg font-semibold">Explore the Holy Chardham</h2>
                <p className="text-gray-400">
                Discover hidden gems of our Holy Himalayas, Experience the Spiritual peace admist ancient temples of our divinity.  
                </p>
              </div>
            </div> */}

            {/* <div className="flex  gap-5">
              <span className="size-12 flex justify-center items-center  rounded-lg bg-pink-100">
                <SendHorizontal className="text-pink-500" />
              </span>
              <div className="flex flex-col gap-2 w-full">
                <h2 className="text-lg font-semibold">Enjoy the Bliss</h2>
                <p className="text-gray-400">
                  Explore the peaceful and the hustle bustle at the lassi capital of India, With tours all ranging from Wagah border to the Divine shrine  .
                </p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex w-full lg:w-[50%] h-full  justify-center items-center relative mt-24 lg:my-0">
          <div className="flex justify-center items-center h-full w-full translate-x-2 lg:translate-x-16 z-10 mx-auto">
            <motion.div
              className="w-full h-full  text-white flex items-center justify-center "
              initial={{ y: 0 }}
              animate={{ y: limitY(-scrollY / 20) }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <img
                src={IMAGES.passage}
                alt="abc"
                className="w-full h-full object-contain shadow-xl"
              />
            </motion.div>
          </div>
          <div className="flex justify-center items-center h-full w-full -translate-x-2 lg:-translate-x-16 z-20 mx-auto">
            <motion.div
              className="w-full h-full  text-white flex items-center justify-center "
              initial={{ y: 0 }}
              animate={{ y: limitY(scrollY / 30) }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <img
                src={IMAGES.reception2}
                alt="xyz"
                className="w-full h-full object-contain shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-full w-[95%] mx-auto flex justify-center items-center flex-col-reverse lg:flex-row gap-5">
        <div className="flex w-full lg:w-[50%] h-full  justify-center items-center relative mt-24 lg:my-0">
          <div className="flex justify-center items-center h-full w-full translate-x-2 lg:translate-x-16 z-10 mx-auto">
            <motion.div
              className="w-full h-full  text-white flex items-center justify-center "
              initial={{ y: 0 }}
              animate={{ y: limitY(-scrollY / 20) }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <img
                src={IMAGES.room2}
                alt="sdf"
                className="w-full h-full object-contain shadow-xl"
              />
            </motion.div>
          </div>
          <div className="flex justify-center items-center h-full w-full -translate-x-2 lg:-translate-x-16 z-20 mx-auto">
            <motion.div
              className="w-full h-full  text-white flex items-center justify-center "
              initial={{ y: 0 }}
              animate={{ y: limitY(scrollY / 30) }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <img
                src={IMAGES.room1}
                alt="werwe"
                className="w-full h-full object-contain shadow-xl"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[50%] justify-center h-full items-center gap-10 ">
          <div className="flex justify-start w-full ">
            <h1 className="text-2xl lg:text-4xl font-semibold text-gray-600">Perfect Place To Stay</h1>
          </div>
          <div className="flex flex-col gap-8">

            <p className="mt-6 text-justify text-gray-800 leading-relaxed">
              Best hotel in halol GIDC, Enjoy delicious meals, secure parking, and essential amenities like CCTV, hot water, clean drinking water, and extra mattresses. Check-in and check-out are hassle-free at 11:00 AM. While staying with us, explore the nearby Pavagadh town, home to the ancient Kalika Mata Temple and the UNESCO-listed Pavagadh Archaeological Park. Experience a memorable blend of comfort and culture at Hotel Rajdhani.
            </p>
            <Link
              href={`/`}
            >
              <button className="bg-[#800000] px-6  py-3 rounded-full text-white flex-1 font-semibold mt-5">
                Book Now
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-8 w-full">
            {/* <div className="flex gap-5">
              <span className="size-12 flex justify-center items-center  rounded-lg bg-blue-100">
                <SendHorizontal className="text-blue-500 " />
              </span>
              <div className="flex flex-col gap-2 w-full">
                <h2 className="text-lg font-semibold">Bond in the Mountains</h2>
                <p className="text-gray-400">
                  Join us for hikes, laughter, and unforgettable memories with your closest friends in nature.
                </p>
              </div>
            </div> */}

            {/* <div className="flex  gap-5">
              <span className="size-12 flex justify-center items-center  rounded-lg bg-pink-100">
                <SendHorizontal className="text-pink-500" />
              </span>
              <div className="flex flex-col gap-2 w-full">
                <h2 className="text-lg font-semibold">Team Building in Nature!</h2>
                <p className="text-gray-400">
                  Escape the office, connect with nature, and reignite your team’s passion and creativity together.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
