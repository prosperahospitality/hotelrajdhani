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

const Landing = (props) => {
    return (
        <div className='relative w-full h-[40rem] lg:h-[41rem] flex justify-center items-center'>
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
                    <Image src={IMAGES.landing1} alt="landing-bg" fill className="object-cover" />
                </SwiperSlide>
                <SwiperSlide className="relative w-full h-full">
                    <Image src={IMAGES.landing2} alt="landing-bg" fill className="object-cover" />
                </SwiperSlide>
                {/* <SwiperSlide className="relative w-full h-full">
                    <Image src={IMAGES.outsideview} alt="landing-bg" fill className="object-cover" />
                </SwiperSlide> */}
                {/* <SwiperSlide className="relative w-full h-full">
                    <Image src={IMAGES.reception2} alt="landing-bg" fill className="object-fill" />
                </SwiperSlide> */}
            </Swiper>

            <div className='absolute inset-0 flex flex-col justify-center items-center'>
                {props.content && props.content.map((e, i) => (
                    <div key={i} className='flex flex-col gap-10 justify-start lg:justify-center items-center'>
                        <h1 className='text-center text-5xl md:text-8xl lg:text-8xl text-[#800000] font-bold'>
                            {e.title}
                        </h1>
                        <p className='w-full lg:w-[70%] md:w-[80%] text-center text-lg text-gray-500 font-medium'>
                            {e.description}
                        </p>
                        <Link href="/contact-us">
                            <Button radius="full" className="bg-[#800000] text-white font-semibold px-4">
                                Let’s Get Started!
                            </Button>
                        </Link>
                    </div>
                ))}

<div className="absolute bottom-4 right-28 flex-col  justify-end hidden lg:flex z-20">
                        <div className='flex flex-col items-center justify-end gap-4 animate-bounce'>
                            <span className="transform rotate-90  rounded font-semibold">
                                Scroll
                            </span>
                            <span >
                                <MoveDown />
                            </span>
                        </div>
                    </div>
            </div>

            <div className="absolute bottom-0 left-0 h-20 w-full z-10 bg-gradient-to-t  from-white via-white to-transparent">
            </div>
        </div>
    );
};

export default Landing;














// 'use client'
// import { MoveDown } from 'lucide-react'
// import React from 'react'
// import Link from 'next/link';
// import { Button } from '@nextui-org/react';
// import IMAGES from '@/public';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Autoplay } from "swiper/modules";

// const Landing = (props) => {
//     return (
//         <div className='relative w-full h-[40rem] flex justify-center items-center '>
//             <Swiper
//                 slidesPerView={1}
//                 spaceBetween={10}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 loop={true}
//                 modules={[Autoplay]}
//                 speed={1000}
//                 className="mySwiper w-full h-full bg-black"
//             >
//                 <SwiperSlide className="p-5 f-full flex justify-center items-center rounded-10 "><Image src={IMAGES.landing1} alt="landing-bg" fill className="w-full h-full object-cover " /></SwiperSlide>
//                 <SwiperSlide className="p-5 f-full flex justify-center items-center rounded-10 "><Image src={IMAGES.landing2} alt="landing-bg" fill className="w-full h-full object-cover " /></SwiperSlide>
//                 <SwiperSlide className="p-5 f-full flex justify-center items-center rounded-10 "><Image src={IMAGES.landing3} alt="landing-bg" fill className="w-full h-full object-cover " /></SwiperSlide>
//                 <SwiperSlide className="p-5 f-full flex justify-center items-center rounded-10 "><Image src={IMAGES.landing1} alt="landing-bg" fill className="w-full h-full object-cover " /></SwiperSlide>
//             </Swiper>
            
//             <div className='w-full h-[80vh] md:h-[80vh] py-10 lg:p-0 lg:h-[90vh] flex justify-center items-center'>
//                 <div className='relative w-[90%] lg:w-[80%] mx-auto flex justify-center items-center h-full'>

//                     {props.content && props.content.map((e, i) => (
//                         <div key={i} className='flex flex-col gap-10 justify-start lg:justify-center items-center'>
//                             <div className='w-full flex justify-start lg:justify-center items-center '>
//                                 <h1 className='text-start lg:text-center text-5xl md:text-8xl lg:text-8xl text-[#800000] font-bold w-[90%] md:w-[70%] lg:w-[90%]'>
//                                     {/* Growth Made Easy */}{e.title}
//                                 </h1>
//                             </div>
//                             <div className='flex justify-start lg:justify-center items-center '>
//                                 <p className='w-full lg:w-[70%] md:w-[80%] text-start lg:text-center text-lg text-gray-500 font-medium'>
//                                     {/* At Prospera Hospitality, we create simple, tailored strategies that address your hotel’s unique needs. Our data-driven insights empower you to optimize pricing and maximize occupancy for sustainable revenue growth. */}
//                                     {e.description}
//                                 </p>
//                             </div>

//                             <Link href="contact-us" className='w-full flex lg:hidden'>
//                                 <Button radius="full" className="bg-[#800000] text-white font-semibold px-4 ">
//                                     Let’s Get Started!
//                                 </Button>
//                             </Link>
//                         </div>
//                     ))}


//                     <div className="absolute bottom-4 right-0 flex-col  justify-end hidden lg:flex z-20">
//                         <div className='flex flex-col items-center justify-end gap-4 animate-bounce'>
//                             <span className="transform rotate-90  rounded">
//                                 Scroll
//                             </span>
//                             <span className="">
//                                 <MoveDown />
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="absolute bottom-0 left-0 h-20 w-full z-10 bg-gradient-to-t  from-white via-white to-transparent">
//             </div>

//         </div>
//     )
// }

// export default Landing