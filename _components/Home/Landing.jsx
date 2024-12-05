'use client';
import { MoveDown } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import IMAGES from '@/public';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from "swiper/modules";
import SearchBar from '@/_components/Home/SearchBar';

const Landing = (props) => {
    return (
        <div className="relative w-full h-[38rem] md:h-[40rem]">
            {/* Top Right Section */}
            <div className="absolute top-4 right-4 text-gray-600 z-20 font-serif">
                {/* <img alt="since" src='/img/since.png' className='h-36 w-36'/> */}
                <div className="lg:w-14 lg:h-14 w-12 h-12 bg-[#D8B4A6] text-black rounded-full flex items-center justify-center">
                    <span className="text-[8px] lg:text-[9px] text-[#333333] italic text-center leading-tight">
                        Established in 2004
                    </span>
                </div>
            </div>





            {/* Central Text Section */}
            <div className="absolute inset-0 flex flex-col items-center justify-start text-start lg:items-center lg:justify-center lg:text-center top-36 lg:top-0 text-gray-600 drop-shadow-2xl z-20 font-serif px-4">
                <span
                    className="text-lg md:text-4xl bg-black text-gray-100 p-2 rounded-lg px-4 bg-opacity-30"
                    style={{
                        fontFamily: "Times New Roman, Georgia, serif",
                        fontWeight: "bold",
                    }}
                >
                    Your Gateway to Relaxation.
                </span>
                <span
                    className="text-sm md:text-2xl bg-black text-gray-100 mt-4 p-2 rounded-lg px-4 bg-opacity-30"
                    style={{
                        fontFamily: "Times New Roman, Georgia, serif",
                        fontStyle: "italic",
                    }}
                >
                    20+ Years of Exceptional Service
                </span>
            </div>

            {/* SearchBar Section */}
            <div className="absolute inset-0 flex justify-center items-end mb-12 md:mb-16 z-20 px-4 w-full">
                <SearchBar />
            </div>

            {/* Landing Section */}
            <div className="relative w-full h-full flex justify-center items-center bg-black opacity-95">
                {/* Swiper for Background Images */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    speed={1000}
                    className="mySwiper w-full h-full"
                >
                    <SwiperSlide className="relative w-full h-full">
                        <Image src={IMAGES.landing3} alt="landing-bg" fill className="object-cover" />
                    </SwiperSlide>
                    <SwiperSlide className="relative w-full h-full">
                        <Image src={IMAGES.landing1} alt="landing-bg" fill className="object-cover" />
                    </SwiperSlide>
                    <SwiperSlide className="relative w-full h-full">
                        <Image src={IMAGES.landing2} alt="landing-bg" fill className="object-cover" />
                    </SwiperSlide>
                </Swiper>

                {/* Content Section */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
                    {props.content && props.content.map((e, i) => (
                        <div
                            key={i}
                            className="flex flex-col gap-4 md:gap-10 justify-start lg:justify-center items-center text-center"
                        >
                            <h1 className="text-2xl md:text-5xl lg:text-8xl text-[#800000] font-bold">
                                {e.title}
                            </h1>
                            <p className="w-full md:w-[80%] lg:w-[70%] text-sm md:text-lg text-gray-500 font-medium">
                                {e.description}
                            </p>
                            <Link href="/contact-us">
                                <Button radius="full" className="bg-[#800000] text-white font-semibold px-4">
                                    Let’s Get Started!
                                </Button>
                            </Link>
                        </div>
                    ))}

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-4 right-8 md:right-28 flex-col justify-end hidden lg:flex z-20">
                        <div className="flex flex-col items-center justify-end gap-2 md:gap-4 animate-bounce">
                            <span className="transform rotate-90 rounded font-semibold">
                                Scroll
                            </span>
                            <span>
                                <MoveDown />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 h-8 md:h-10 w-full z-10 bg-gradient-to-t from-white via-white to-transparent"></div>
            </div>
        </div>
    );
};

export default Landing;
