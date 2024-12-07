import React from "react";
import { Swim } from "./icons";
import { Group } from "./icons";
import { Cook } from "./icons";
import { Parking } from "./icons";
import { Wifi } from "./icons";
import { Dish } from "./icons";
import { Cctv, GlassWater, Droplets } from "lucide-react";

const Facilities = () => {
    const data = [
        {
            id: 1,
            svg: <Parking className="w-[25px] h-[25px] text-[#333333]" />,
            heading: "Parking",
            para: "Convenient onsite parking available for guests. ",
        },
        {
            id: 2,
            svg: <Cctv className="w-[25px] h-[25px] text-[#333333]" />,
            heading: "CCTV Cameras",
            para: "Ensuring your safety and peace of mind. ",
        },
        // {
        //     id: 3,
        //     svg: <Cook className="w-[25px] h-[25px] " />,
        //     heading: "Home Cooked Food",
        //     para: "Indulge in delicious cuisine and crafted cocktails without leavingt the hotel.",
        // },
        {
            id: 3,
            svg: <Droplets className="w-[25px] h-[25px] text-[#333333]" />,
            heading: "Hot & Cold Water",
            para: "Stay hydrated with clean and safe mineral water, available to keep you refreshed throughout your stay.",
        },
        {
            id: 4,
            svg: <Wifi className="w-[25px] h-[25px] text-[#333333]" />,
            heading: "Free Wi-Fi",
            para: "Stay connected with complimentary high-speed internet access.",
        },
        {
            id: 5,
            svg: <Dish className="w-[25px] h-[25px] text-[#333333]" />,
            heading: "Room Service",
            para: "Enjoy meals and amenities delivered to your room.",
        },
        {
            id: 6,
            svg: <GlassWater className="w-[25px] h-[25px] text-[#333333]" />,
            heading: "Mineral Water",
            para: "Enjoy meals and amenities delivered to your room.",
        },
        {
            id: 7,
            svg: <svg xmlns="http://www.w3.org/2000/svg" color="#333333" width="2em" height="2em" viewBox="0 0 640 512"><path fill="currentColor" d="M256 64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h192zm32 384h288c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H288zM64 160c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z"></path></svg>,
            heading: "Extra Mattresses",
            para: "Extra mattresses are available to ensure everyone sleeps comfortably.",
        },
        {
            id: 8,
            svg: <svg xmlns="http://www.w3.org/2000/svg" color="#333333" width="2em" height="2em" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M5.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-3.029 2.886c-.777.54-.971 1.063-.971 1.306c0 .446.362.808.808.808h6.384a.81.81 0 0 0 .808-.808c0-.244-.194-.767-.971-1.306C7.792 9.875 6.719 9.5 5.5 9.5s-2.292.375-3.029.886M0 11.692C0 9.846 2.475 8 5.5 8c1.18 0 2.278.281 3.177.734A5.67 5.67 0 0 1 11.5 8c2.475 0 4.5 1.538 4.5 3.077A1.923 1.923 0 0 1 14.077 13h-3.483c-.416.604-1.113 1-1.902 1H2.308A2.31 2.31 0 0 1 0 11.692m10.991-.192h3.086c.234 0 .423-.19.423-.423c0-.103-.096-.472-.688-.89c-.554-.393-1.375-.687-2.312-.687c-.517 0-.999.09-1.42.236c.526.534.854 1.146.911 1.764M12.5 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M14 5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clipRule="evenodd"></path></svg>,
            heading: "Friendly Staff",
            para: "Our friendly staff is always ready to assist you, ensuring a warm and welcoming experience throughout your stay.",
        },
    ];

    return (
        <div className="bg-white text-black mt-8">
            <div className="w-full pb-6 ">
                <div className=" w-[95%] mx-auto flex flex-col justify-center items-center ">
                    <div>
                        <div className="flex justify-center items-center">
                            <div className="border-b border-gray-500  inline-block pb-1">
                                <p className="text-center text-gray-500 text-2xl lg:text-2xl font-semibold">The Facilities</p>
                            </div>
                        </div>
                        <h3 className="text-center text-2xl lg:text-4xl leading-snug mt-6 font-semibold ">
                            Experience Our Hospitality
                        </h3>
                    </div>
                    <div className=" mt-2 w-full lg:w-[95%] gap-10 p-5 grid grid-cols-1 md:grid-cols-4  place-items-center xl:mt-8 ">
                        {data &&
                            data?.map((e, i) => (
                                <div
                                    key={i}
                                    className="w-[100%] gap-2 flex justify-evenly flex-col h-full border shadow-lg p-5 rounded-xl"
                                >
                                    <div className="flex justify-center items-center">
                                        <div className="size-[60px] rounded-full flex justify-center items-center bg-[#F5F5DC]">
                                            {e.svg}
                                        </div>
                                    </div>
                                    <div className="text-lg font-medium text-center">
                                        <p>{e.heading}</p>
                                    </div>
                                    <div className="text-gray-500 text-center">
                                        <p>{e.para}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;