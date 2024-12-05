"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import IMAGES from "@/public/index";
import Image from "next/image";
import { MoveDown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[+]*[0-9]{10,15}$/; // Basic regex for phone numbers
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

    if (!fullName) newErrors.fullName = "Full Name is required.";
    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required.";
    } else if (!phoneRegex.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone Number is not valid.";
    }
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Email is not valid.";
    }
    if (!message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    let sendEmail = async () => {
      const payload = {
        operation: "sendcontactmail",
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        message: message,
      }

      const emailresponse = await fetch(`/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });
      const emailresult = await emailresponse.json();

      alert("Request sent successfully!")
    }

    sendEmail()

    setFullName("");
    setPhoneNumber("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div className="relative w-full h-[38rem]">
        <div className="relative w-full h-full flex justify-center items-center bg-black opacity-95">
          <Image src={IMAGES.contactus} alt="landing-bg" fill className="object-cover" />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/15">
            <div className="m-5 lg:m-12 w-full h-full flex flex-col justify-center items-start gap-10">
              <h1 className="text-white text-3xl lg:text-5xl flex gap-2">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                >
                  Contact
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-themeColor px-1 text-center"
                >
                  Us
                </motion.span>
              </h1>
              <div className="w-[70%] lg:w-1/3">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-white"
                >
                  For any inquiries about your group tour, please contact us. Our
                  team is ready to assist you with tour details, booking, and any
                  other questions you may have for a smooth travel experience.
                </motion.p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-28 flex-col justify-end hidden lg:flex z-20">
            <div className="flex flex-col items-center justify-end gap-4 animate-bounce">
              <span className="transform rotate-90 rounded font-semibold">Scroll</span>
              <span><MoveDown /></span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-10 w-full z-10 bg-gradient-to-t from-white via-white to-transparent"></div>
      </div>

      <div className="flex flex-col gap-20 mt-10">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-5xl font-semibold">Contact Us</h1>
          <p className="w-full lg:w-[80%] text-base text-center text-gray-500">
            We’re here to enhance your experience. If you have questions about
            our services, need help with reservations, or want to provide
            feedback, our dedicated team is ready to assist you. Please fill out
            the form below or contact us directly by phone or email. We look
            forward to connecting with you!
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
            className="flex justify-center flex-col w-[90%] lg:w-[70%] mx-auto gap-5"
          >
            <div className="flex justify-between items-center w-full gap-5 flex-col md:flex-row">
              <input
                type="text"
                placeholder="Full Name"
                className="border flex-1 p-3 rounded-2xl bg-gray-100 w-full"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullName && (
                <span className="text-red-600">{errors.fullName}</span>
              )}
              <input
                type="text"
                placeholder="Phone Number"
                className="border flex-1 p-3 rounded-2xl bg-gray-100 w-full"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {errors.phoneNumber && (
                <span className="text-red-600">{errors.phoneNumber}</span>
              )}
            </div>
            <input
              type="email"
              placeholder="Email ID"
              className="border flex-1 p-3 rounded-2xl bg-gray-100"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email}</span>
            )}
            <textarea
              placeholder="Message"
              className="border flex-1 p-3 rounded-2xl bg-gray-100"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <span className="text-red-600">{errors.message}</span>
            )}
            <div className="w-full">
              <button className="border border-[#333333] bg-[#333333] px-10 py-3 rounded-full text-white flex-1 font-semibold hover:bg-[#F5F5DC] hover:text-[#333333]">
                Submit
              </button>
            </div>
          </motion.div>
        </form>

        <div className="p-10 bg-red-100 w-full h-full">
          <div className="w-full lg:w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full lg:h-60">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={sectionVariants}
              className="bg-white rounded-2xl flex justify-center items-center flex-col p-5 gap-5"
            >
              <h2 className="text-themeColor text-xl font-semibold">+91- 98983 09244</h2>
              <p className="text-gray-500 text-center">
                For all inquiries regarding to booking call us any time at the
                above number
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={sectionVariants}
              className="bg-white rounded-2xl flex justify-center items-center flex-col p-5 gap-5"
            >
              <h2 className="text-themeColor text-xl font-semibold">
                hotelrajdhani22@gmail.com
              </h2>
              <p className="text-gray-500 text-center">
                For all inquiries regarding to booking email us any time at the
                above email address
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={sectionVariants}
              className="bg-white rounded-2xl flex justify-center items-center flex-col p-5 gap-5"
            >
              <h2 className="text-themeColor text-xl font-semibold">Hotel Rajdhani</h2>
              <p className="text-gray-500 text-center">
                Godhra Road, Near V.M College, Halol, Gujarat, 389350
              </p>
            </motion.div>
          </div>
        </div>

        <div className="overflow-hidden h-full rounded-xl w-[90%] mx-auto mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.8276178427345!2d73.46753771036363!3d22.510649935153598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27af00c0062751%3A0xbce61e514e75742e!2sHotel%20Rajdhani%20And%20Guest%20House!5e0!3m2!1sen!2sin!4v1732607993926!5m2!1sen!2sin"
            width="600"
            className="w-full h-72 border-none shadow-lg "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>

      </div>
    </>
  );
};

export default ContactUs;
