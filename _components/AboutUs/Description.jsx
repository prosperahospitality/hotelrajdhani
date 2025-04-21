import React from 'react';
import Image from 'next/image';

const Description = () => {
    return (
        <div className="w-full my-8 lg:my-0">
            <div className="flex w-full justify-center">
                <div className="flex flex-col w-full">

                    <div className="flex flex-col-reverse lg:flex-row justify-between pb-8 lg:pb-16 gap-20 md:gap-8 w-[90%] md:w-[95%] mx-auto">

                        {/* Text Content */}
                        <div className="w-full lg:w-[60%] flex-col flex justify-center gap-4 md:gap-6 lg:gap-8">
                            <div className="flex flex-col gap-2 md:gap-4">
                                <h2 className="text-3xl md:text-3xl lg:text-4xl text-themeColor text-center lg:text-left font-serif">
                                    Hotel Rajdhani
                                </h2>
                                <h2 className="text-lg md:text-2xl lg:text-2xl text-themeColor text-center lg:text-left font-serif">
                                    The Best Hotel In Pavaghad And Halol
                                </h2>
                                <h3 className="text-base md:text-xl font-medium text-center lg:text-left">
                                    Creating Lasting Memories Together
                                </h3>
                            </div>
                            <p className="text-justify text-sm md:text-base text-gray-700">
                                Welcome to Hotel Rajdhani, The best hotel in Pavaghad and Halol, where tradition meets modern comfort. Nestled in the heart of Halol, our hotel offers a blend of warm hospitality, luxurious accommodations, and exceptional service to ensure a memorable stay for every guest.
                            </p>
                            <p className="text-justify text-sm md:text-base text-gray-700">
                                At Hotel Rajdhani, we take pride in being more than just a place to stay. We are a gateway to the rich culture, heritage, and warmth of Halol. Whether you’re here for business, leisure, or a family getaway, our thoughtfully designed rooms, state-of-the-art amenities, and dedicated staff are here to make you feel at home.
                            </p>
                            <p className="text-justify text-sm md:text-base text-gray-700">
                                Our commitment to excellence is reflected in every aspect of your experience. From savoring delectable cuisines at our in-house restaurant to relaxing in our serene ambiance, we strive to create unforgettable moments for our guests.
                            </p>
                            <p className="text-justify text-sm md:text-base text-gray-700">
                                At Hotel Rajdhani, your comfort is our priority, and your happiness is our reward. We look forward to welcoming you and making your stay truly special.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className='lg:w-[40%] flex justify-center items-center'>
                            <div className="w-full lg:w-[70%]  h-[500px] lg:h-full relative group overflow-hidden  shadow-lg">
                                <Image
                                    src="/img/collage1.png"
                                    width={800}
                                    height={800}
                                    alt="special-tours"
                                    className="w-full h-full object-fill transition-all group-hover:scale-105 aspect-[300/300] self-center"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Description;
