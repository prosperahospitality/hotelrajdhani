'use client';
import { MoveDown } from 'lucide-react';
import React, { useEffect } from 'react';
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

    useEffect(() => {
        try {
            const deleteolddates = async () => {
                let payload = {
                    action: "deleteOldDates"
                };

                const response = await fetch(
                    `/api/admin/rates_and_inventory/managerateandinventory`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(payload),
                    }
                );
                const result = await response.json();
                console.log("result::::::::::>", result)
            }
            deleteolddates()
        } catch (error) {

        }
    }, [])


    return (
        <div className="relative w-full h-[75vh] md:h-[85vh]">
            {/* Top Right Section */}
            <div className="absolute top-1 right-3 text-gray-600 z-20 font-serif">
                <div className="w-16 h-16 flex items-center justify-center">
                    <img alt="since" src="/img/since.png" className="object-fill" />
                </div>
            </div>

            {/* Overlays and Central Content */}
            <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-transparent ">
                {/* Mobile Central Text Section */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-gray-600 drop-shadow-2xl z-20 font-serif px-4 lg:hidden mb-20">
                    <span className="text-lg md:text-4xl bg-black text-gray-100 p-2 rounded-lg px-4 bg-opacity-30 font-bold">
                        Your Gateway to Relaxation.
                    </span>
                    <span className="text-sm md:text-2xl bg-black text-gray-100 mt-4 p-2 rounded-lg px-4 bg-opacity-30 italic">
                        20+ Years of Exceptional Service
                    </span>
                </div>

                {/* Desktop Central Text Section */}
                <div className="absolute inset-0 lg:flex flex-col items-center justify-center text-center text-gray-600 drop-shadow-2xl z-20 px-4 hidden">
                    <span className="text-lg md:text-5xl p-2 px-4 text-white font-serif drop-shadow-2xl">
                        Your Gateway to Relaxation.
                    </span>
                    <span className="text-sm md:text-xl text-white p-2 px-4 drop-shadow-2xl italic">
                        20+ Years of Exceptional Service
                    </span>
                </div>

                {/* SearchBar Section */}
                <div className="absolute inset-0 flex justify-center items-end mb-4 md:mb-16 z-20 px-4 w-full">
                    <SearchBar />
                </div>
            </div>

            {/* Landing Section */}
            <div className="relative w-full h-full flex justify-center items-center bg-black opacity-95">
                {/* Swiper Background Images */}
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
                        <Image src={IMAGES.landing6} alt="landing-bg" fill className="object-cover" />
                    </SwiperSlide>
                    <SwiperSlide className="relative w-full h-full">
                        <Image src={IMAGES.landing5} alt="landing-bg" fill className="object-cover" />
                    </SwiperSlide>
                    <SwiperSlide className="relative w-full h-full">
                        <Image src={IMAGES.landing7} alt="landing-bg" fill className="object-cover" />
                    </SwiperSlide>
                </Swiper>

                {/* Mobile Content Centered */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-4 lg:hidden z-20 text-center">
                    {props.content && props.content.map((e, i) => (
                        <div
                            key={i}
                            className="flex flex-col gap-4 justify-center items-center"
                        >
                            <h1 className="text-2xl sm:text-4xl text-[#800000] font-bold">
                                {e.title}
                            </h1>
                            <p className="w-full sm:w-[90%] text-sm sm:text-base text-gray-300 font-medium">
                                {e.description}
                            </p>
                            <Link href="/contact-us">
                                <Button radius="full" className="bg-[#800000] text-white font-semibold px-4">
                                    Let’s Get Started!
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Desktop Content */}
                <div className="absolute inset-0 hidden lg:flex flex-col justify-center items-center px-4 z-20 text-center">
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
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-4 right-8 md:right-28 flex-col justify-end hidden lg:flex z-20 text-white">
                    <div className="flex flex-col items-center justify-end gap-2 md:gap-4 animate-bounce">
                        <span className="transform rotate-90 rounded font-semibold">
                            Scroll
                        </span>
                        <span>
                            <MoveDown />
                        </span>
                    </div>
                </div>

                {/* Background Overlay for Desktop */}
                <div className="absolute inset-0 bg-black bg-opacity-20 z-10 lg:block hidden" />

                {/* Bottom Gradient for Mobile */}
                <div className="absolute bottom-0 left-0 h-8 md:h-10 w-full z-10 bg-gradient-to-t from-white via-white to-transparent lg:hidden"></div>
            </div>
        </div>

    );
};

export default Landing;
