"use client";
import React, { useState } from "react";
import { Button, Divider } from "@nextui-org/react";
import { siteConfig } from "@/config/siteConfig";
import { Link } from "@nextui-org/link";

import { usePathname } from "next/navigation";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function Footer() {
  const pathname = usePathname();

  let defaultDate = today(getLocalTimeZone());
  const nextDay = defaultDate.add({ days: 1 });

  const formatDateee = (date) => {
    const day = String(date.day).padStart(2, "0");
    const month = String(date.month).padStart(2, "0");
    const year = String(date.year);
    return `${day}-${month}-${year}`;
  };

  const [checkindate, setCheckindate] = useState(formatDateee(defaultDate));
  const [checkoutdate, setCheckoutdate] = useState(formatDateee(nextDay));

  const itemClasses = {
    base: "w-full",
    title: "text-base xl:text-2xl text-black/60",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-primary-100 rounded-lg h-14 2xl:h-20 flex items-center",
    indicator: "text-small xl:text-large text-black/60",
    content: "text-small xl:text-medium px-2",
  };

  const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const currentDate = getCurrentDate();
  const hotelName = "Ocean's Pearl Resort";

  const addOneDay = (dateString) => {
    const [day, month, year] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    return formatDate(date);
  };

  // Function to format the date as "DD-MM-YYYY"
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const checkoutDate = addOneDay(currentDate);

  return (
    <footer className="w-full h-fit relative bg-white text-black mb-10">
      <div className="w-[95%] mx-auto">
        <div className="mx-auto lg:flex w-full items-center justify-between py-2">
          <div className="md:flex items-center md:justify-between gap-4">
            <p className="text-3xl lg:text-4xl text-green-500 font-semibold antialiased">
              {siteConfig.hotelname}
            </p>
          </div>
          <div className="flex mt-6 lg:mt-0 justify-between items-center gap-4 text-white">
            <h4 className="text-gray-600">Let&apos;s Grow Together !</h4>
            <Link
              href={`/filterpage?checkindate=04-12-2024&checkoutdate=05-12-2024&adultsSelect=1&childSelect=0`}
            >
              <button className="border border-black-900 bg-green-700 px-8 py-2  lg:py-2 rounded-full text-white flex-1 font-medium hover:bg-red-900 hover:text-white">
                Book Now
              </button>
            </Link>

          </div>
        </div>
        <Divider className="w-full" />


        <div className="flex justify-center items-center text-center pt-4 gap-2">
          <div className="p-2">
            <p className="text-black/50  text-start">
              {siteConfig.description}
            </p>
          </div>
        </div>
        <Divider className="w-full mt-4" />

        <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0lg:gap-10 place-content-center">
          <div className=" flex flex-col gap-5 p-5 lg:py-5">
            <h2 className="text-xl font-medium text-green-500">
              Contact Information:
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <h4 className="text-gray-500">Hotel</h4>
                <span className="text-gray-500">-</span>
                <p className="text-gray-500">
                Godhra Road, Near V.M College, Halol, Gujarat, 389350
                </p>
              </div>

              <div className="flex gap-3">
                <h4 className="text-gray-500">Phone</h4>
                <span className="text-gray-500">-</span>
                <div className="flex flex-col">
                  <Link href="tel:9898309244" className="text-gray-500">
                    +91 - 9898309244,
                  </Link>
                  <Link href="tel:7285899244" className="text-gray-500">
                    +91 - 7016984862
                  </Link>
                  {/* <Link href="tel:9136434899" className="text-gray-500">
                    +91 - 9136434899
                  </Link> */}
                </div>
              </div>

              <div className="flex gap-3">
                <h4 className="text-gray-500">Email</h4>
                <span className="text-gray-500">-</span>
                <Link
                  href="mailto:hotelrajdhani22@gmail.com"
                  className="text-gray-500"
                >
                  hotelrajdhani22@gmail.com
                </Link>
              </div>

              <div className="flex gap-3">
                <h4 className="text-gray-500">Website</h4>
                <span className="text-gray-500">-</span>
                <Link
                  href="www.hotelrajdhani.com"
                  className="text-gray-500"
                >
                  www.hotelrajdhani.com
                </Link>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-5 p-5">
            <h2 className="text-xl font-medium text-green-500">Quick Links:</h2>
            {siteConfig.navItems.map((item) => (
              <div className="" key={item.label}>
                <Link
                  href={item.href}
                  className="text-gray-500 hover:underline"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          <div className=" flex flex-col gap-5 p-5">
            <h2 className="text-xl font-medium text-green-500">
              Legal Policies:
            </h2>
            {siteConfig.PoliciesItems.map((item) => (
              <div className="" key={item.label}>
                <Link
                  href={item.href}
                  className="text-gray-500 hover:underline"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          <div className=" flex flex-col gap-5 p-5">
            <h2 className="text-xl font-medium text-green-500">Socials:</h2>
            <div className="flex  items-center gap-5">
              {siteConfig.socialItems.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-800 hover:text-blue-500 transition-colors bg-blue-100 p-2 rounded-full "
                >
                  <Icon className="w-6 h-6 text-green-700" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Divider className="w-full mt-4" />
        <div className="flex py-5">
          <span className="text-gray-500">
            2024@Hotel Rajdhani. All rights reserved.{" "}
          </span>
        </div>
      </div>
    </footer>
  );
}