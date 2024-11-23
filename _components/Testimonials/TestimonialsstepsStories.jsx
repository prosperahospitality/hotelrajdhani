"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import IMAGES from "@/public/index";
import Image from "next/image";
import { FaStar } from "react-icons/fa";


const TestimonialsstepsStories = () => {

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);


  const testimonials = [
    {
      name: 'Ankit Singh',
      title: 'Frontend Developer',
      image: IMAGES.profile,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil repellendus itaque odio fuga excepturi illum quae veniam quibusdam, sint rem hic obcaecati et temporibus aliquid doloribus eveniet omnis molestiae?',
    },
    {
      name: 'Rohit Gawade',
      title: 'Backend Developer',
      image: IMAGES.profile,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil repellendus itaque odio fuga excepturi illum quae veniam quibusdam, sint rem hic obcaecati et temporibus aliquid doloribus eveniet omnis molestiae?',
    },
    {
      name: 'Avi Thorat',
      title: 'MERN Stack Developer',
      image: IMAGES.profile,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil repellendus itaque odio fuga excepturi illum quae veniam quibusdam, sint rem hic obcaecati et temporibus aliquid doloribus eveniet omnis molestiae?',
    },
    {
      name: 'Omkar Kachare',
      title: 'UI UX Designer',
      image: IMAGES.profile,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil repellendus itaque odio fuga excepturi illum quae veniam quibusdam, sint rem hic obcaecati et temporibus aliquid doloribus eveniet omnis molestiae?',
    },

  ];

  return (
    <>
     
        <p className='w-[90%] lg:w-[80%] mx-auto text-3xl lg:text-5xl font-semibold text-center text-gray-600'>Success Stories of Prospera</p>
        <div className="w-[90%] lg:w-[80%] h-full relative mx-auto">
          <Swiper
            className="mySwiper flex justify-center items-center"
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            style={{
              paddingLeft: "15px",
              paddingRight: "15px",
              "--swiper-navigation-size": "20px",
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768:{
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            <div className="w-full h-full flex justify-center items-center">
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className='shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),_0px_0px_0px_1px_rgba(27,31,35,0.15)] rounded-2xl w-full h-full flex justify-center items-center p-5 my-5'>
                  <div className="w-full flex flex-col gap-5">
                    <div className='text-gray-600 font-normal'>
                      <p>{testimonial.text}</p>
                    </div>
                    <div className="flex justify-start gap-4 items-center">
                      <div className="border border-black size-16 rounded-full overflow-hidden">
                        <img src={testimonial.image} className="w-full h-full" alt="" />
                      </div>
                      <div>
                        <p className='text-[#800000] text-xl font-bold'>{testimonial.name}</p>
                        <p className='text-gray-600 font-normal'>{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>

          <div className="hidden lg:flex top-0 bottom-0 justify-between gap-5 w-full">
            <div className="absolute flex justify-center items-center -translate-x-5 z-40 left-0 top-0 bottom-0 my-auto">
              <button
                className={`swiper-prev p-2 rounded-full bg-gray-300 text-gray-500 ${isBeginning ? "opacity-50" : ""}`}
                disabled={isBeginning}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute flex justify-center items-center translate-x-5 z-40 right-0 top-0 bottom-0 my-auto">
              <button
                className={`swiper-next p-2 rounded-full bg-gray-300 text-gray-500 ${isEnd ? "opacity-50" : ""}`}
                disabled={isEnd}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
    </>

  )
}

export default TestimonialsstepsStories