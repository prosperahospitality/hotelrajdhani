'use client'
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
import SearchBar from '@/_components/Home/SearchBar'

const Landing = (props) => {
    return (
        <div className="relative w-full h-[38rem]">

            <div className="absolute top-4 right-4 text-gray-600 z-20 font-serif">
                <span className="text-sm text-red-900 px-4 italic">
                    Established in 2004
                </span>
            </div>


            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 drop-shadow-2xl z-20 font-serif mb-8">
    <span
        className="text-4xl bg-black text-gray-100 p-2 rounded-lg px-4 bg-opacity-30"
        style={{
            fontFamily: "Times New Roman, Georgia, serif",
            // fontStyle: "italic",
            fontWeight: "bold",
        }}
    >
        Your Gateway to Relaxation.
    </span>
    <span
        className="text-2xl bg-black text-gray-100 mt-4 p-2 rounded-lg px-4 bg-opacity-30"
        style={{
            fontFamily: "Times New Roman, Georgia, serif",
            fontStyle: "italic",
        }}
    >
        20+ Years of Exceptional Service
    </span>
</div>




            {/* SearchBar Section */}
            <div className="absolute inset-0 flex justify-center items-end mb-16 z-20">

                <SearchBar />
            </div>

            {/* Landing Section */}
            <div className="relative w-full h-full flex justify-center items-center bg-black opacity-95">

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

                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    {props.content && props.content.map((e, i) => (
                        <div key={i} className="flex flex-col gap-10 justify-start lg:justify-center items-center">
                            <h1 className="text-center text-5xl md:text-8xl lg:text-8xl text-[#800000] font-bold">
                                {e.title}
                            </h1>
                            <p className="w-full lg:w-[70%] md:w-[80%] text-center text-lg text-gray-500 font-medium">
                                {e.description}
                            </p>
                            <Link href="/contact-us">
                                <Button radius="full" className="bg-[#800000] text-white font-semibold px-4">
                                    Let’s Get Started!
                                </Button>
                            </Link>
                        </div>
                    ))}

                    <div className="absolute bottom-4 right-28 flex-col justify-end hidden lg:flex z-20">
                        <div className="flex flex-col items-center justify-end gap-4 animate-bounce">
                            <span className="transform rotate-90 rounded font-semibold">
                                Scroll
                            </span>
                            <span>
                                <MoveDown />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 h-10 w-full z-10 bg-gradient-to-t from-white via-white to-transparent">
                </div>
            </div>
        </div>
    );
};

export default Landing;
