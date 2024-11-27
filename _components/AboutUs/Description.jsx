import React from 'react'
import Image from 'next/image'

const Description = () => {
    return (
        <div className='w-full'>
            <div className='flex w-full justify-center'>
                <div className='flex justify-between w-full'>

                    <div className="flex flex-col-reverse lg:flex-row justify-between pb-8 lg:pb-16 gap-8 w-[95%] mx-auto">
                        <div className="w-full lg:w-[75%] flex-col flex justify-center gap-5 lg:gap-8">
                            <div className="flex flex-col gap-3 lg:gap-5">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-themeColor">
                                    Hotel Rajdhani
                                </h2>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-themeColor">
                                    The Best Hotel In Pavaghad And Halol
                                </h2>
                                <h3 className="text-xl md:text-2xl font-medium">
                                    Creating Lasting Memories Together
                                </h3>
                            </div>
                            <p className="text-justify text-gray-700">
                                Welcome to Hotel Rajdhani, The best hotel in pavaghad and halol, where tradition meets modern comfort. Nestled in the heart of Halol, our hotel offers a blend of warm hospitality, luxurious accommodations, and exceptional service to ensure a memorable stay for every guest.
                            </p>
                            <p className="text-justify text-gray-700">
                                At Hotel Rajdhani, we take pride in being more than just a place to stay. We are a gateway to the rich culture, heritage, and warmth of Halol. Whether you’re here for business, leisure, or a family getaway, our thoughtfully designed rooms, state-of-the-art amenities, and dedicated staff are here to make you feel at home.
                            </p>
                            <p className="text-justify text-gray-700">
                                Our commitment to excellence is reflected in every aspect of your experience. From savoring delectable cuisines at our in-house restaurant to relaxing in our serene ambiance, we strive to create unforgettable moments for our guests.
                            </p>
                            <p className="text-justify text-gray-700">
                                At Hotel Rajdhani, your comfort is our priority, and your happiness is our reward. We look forward to welcoming you and making your stay truly special.
                            </p>
                        </div>
                        <div className="w-full lg:w-[25%] h-full relative group overflow-hidden  shadow-lg">
                            <Image
                                src="/img/collage1.png"
                                width={800}
                                height={800}
                                alt="special-tours"
                                className="w-full h-full object-fill transition-all group-hover:scale-105 aspect-[300/300]"
                                loading="lazy"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Description