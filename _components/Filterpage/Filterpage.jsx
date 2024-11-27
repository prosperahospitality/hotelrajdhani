"use client";
import React, { useState, useEffect } from "react";
import { BedDouble, Bus, Camera, Plane, Utensils, UsersRound, Moon } from "lucide-react";
import { Button, Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";
import Image from "next/image";
import Sitefilter from "@/_components/Filterpage/Sitefilter";
import IMAGES from "@/public/index";
import SearchBar from "@/_components/Filterpage/SearchBar";


const BookingSummary = ({ displayBookingSum }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = async () => {
        setIsLoading(true);

        try {
            const formatDate = (date) => {
                const day = String(date.getDate()).padStart(2, "0");
                const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
                const year = date.getFullYear();
                return `${day}-${month}-${year}`;
            };

            const formattedStartDate = formatDate(selectedDateRange[0].startDate);
            const formattedEndDate = formatDate(selectedDateRange[0].endDate);

        } catch (error) {
            console.error("Checkout failed", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between bg-green-600 p-4 shadow-lg z-[100]">
            <div className="flex gap-5 flex-col lg:flex-row flex-2 items-center">
                {/* Date Range */}
                <div className="flex space-x-2 text-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
                        <path d="M8 2v4" />
                        <path d="M16 2v4" />
                        <rect width="18" height="18" x="3" y="4" rx="2" />
                        <path d="M3 10h18" />
                    </svg>
                    <span>
                        {"19-02-2024"} - {"20-02-2024"}
                    </span>
                </div>
                <div className="flex justify-between gap-5 ">
                    {/* Rooms */}
                    <div className="flex items-center space-x-2 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14M5 12a2 2 0 010-4h14a2 2 0 010 4M5 12v6m14-6v6m0 0a2 2 0 01-2 2H7a2 2 0 01-2-2m14 0H5"
                            />
                        </svg>
                        <span>
                            Rooms: {"2"}
                        </span>
                    </div>

                    {/* Guests */}
                    <div className="flex items-center space-x-2 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 20h14M12 14c3.866 0 7-3.134 7-7S15.866 0 12 0 5 3.134 5 7s3.134 7 7 7zm0 0c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"
                            />
                        </svg>
                        <span>Guests: {displayBookingSum.adultCount + displayBookingSum.childCount}</span>
                    </div>
                </div>
            </div>

            {/* Price and Checkout */}
            <div className="flex items-center lg:items-end justify-center lg:justify-end gap-5 flex-1 ">
                <div className="flex gap-5 justify-between  lg:justify-end w-full">
                    <div className="text-white text-xl">
                        Total: ₹ {displayBookingSum.amount}
                        <span className="text-sm text-pink-100 block cursor-pointer">
                            Price Breakup
                        </span>
                    </div>

                    <Button
                        className="bg-white text-pink-600 font-semibold px-6 py-2 rounded-lg hover:bg-pink-200"
                        color="default"
                        auto
                        onClick={handleCheckout}
                        isLoading={isLoading}
                        disabled={isLoading}
                    >
                        {isLoading ? "Checkout" : "Checkout"}
                    </Button>

                </div>
            </div>
        </div>
    );
};





const ThemeSwitch = (props) => {
    const {
        Component,
        slots,
        isSelected,
        getBaseProps,
        getInputProps,
        getWrapperProps
    } = useSwitch(props);

    return (
        <div className="flex flex-col gap-2 w-[33%]">
            <Component {...getBaseProps()}>
                <VisuallyHidden>
                    <input {...getInputProps()} />
                </VisuallyHidden>
                <div
                    {...getWrapperProps()}
                    className={slots.wrapper({
                        className: [
                            "w-[100px] h-[47px]",
                            "flex items-center justify-center",
                            "rounded-lg",
                            isSelected
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-default-100 hover:bg-default-200",
                        ],
                    })}
                >
                    {isSelected ? "Add Room" : "Remove"}
                </div>
            </Component>
        </div>
    );
};


const Filterpage = () => {
    const [loading, setLoading] = useState(false);
    const [isSelected, setIsSelected] = useState([]);
    const [displayBookingSum, setDisplayBookingSum] = useState({});

    const fetchfiltertourdata = [
        {
            id: "1",
            roomname: "Single Bed Non AC Room",
            intro: `Experience ultimate comfort and relaxation in our Double-Bed AC Rooms at Hotel Rajdhani. Designed for a peaceful stay, these rooms feature spacious interiors, modern amenities, and a cool, refreshing ambiance to help you unwind after a day of exploring the beautiful surroundings of Pavagadh. Whether you're here for a short getaway or an extended stay, our AC rooms offer a perfect blend of comfort and convenience, ensuring you have an unforgettable experience.`,
            value: true,
            amount: "1000",
            adultCount: "2",
            childCount: "2",
        },
        {
            id: "2",
            roomname: "Double Bed Non AC Room",
            intro: `Experience ultimate comfort and relaxation in our Double-Bed AC Rooms at Hotel Rajdhani. Designed for a peaceful stay, these rooms feature spacious interiors, modern amenities, and a cool, refreshing ambiance to help you unwind after a day of exploring the beautiful surroundings of Pavagadh. Whether you're here for a short getaway or an extended stay, our AC rooms offer a perfect blend of comfort and convenience, ensuring you have an unforgettable experience.`,
            value: true,
            amount: "2000",
            adultCount: "2",
            childCount: "2",
        },
        {
            id: "3",
            roomname: "Double Bed AC Room",
            intro: `Experience ultimate comfort and relaxation in our Double-Bed AC Rooms at Hotel Rajdhani. Designed for a peaceful stay, these rooms feature spacious interiors, modern amenities, and a cool, refreshing ambiance to help you unwind after a day of exploring the beautiful surroundings of Pavagadh. Whether you're here for a short getaway or an extended stay, our AC rooms offer a perfect blend of comfort and convenience, ensuring you have an unforgettable experience.`,
            value: true,
            amount: "3000",
            adultCount: "2",
            childCount: "2",
        },
        {
            id: "4",
            roomname: "Triple Bed Non AC Room",
            intro: `Experience ultimate comfort and relaxation in our Double-Bed AC Rooms at Hotel Rajdhani. Designed for a peaceful stay, these rooms feature spacious interiors, modern amenities, and a cool, refreshing ambiance to help you unwind after a day of exploring the beautiful surroundings of Pavagadh. Whether you're here for a short getaway or an extended stay, our AC rooms offer a perfect blend of comfort and convenience, ensuring you have an unforgettable experience.`,
            value: true,
            amount: "4000",
            adultCount: "2",
            childCount: "2",
        },
        {
            id: "5",
            roomname: "Super Deluxe AC Room",
            intro: `Experience ultimate comfort and relaxation in our Double-Bed AC Rooms at Hotel Rajdhani. Designed for a peaceful stay, these rooms feature spacious interiors, modern amenities, and a cool, refreshing ambiance to help you unwind after a day of exploring the beautiful surroundings of Pavagadh. Whether you're here for a short getaway or an extended stay, our AC rooms offer a perfect blend of comfort and convenience, ensuring you have an unforgettable experience.`,
            value: true,
            amount: "5000",
            adultCount: "2",
            childCount: "2",
        },
    ];

    useEffect(() => {
        console.log("isSelected:::::::::>", isSelected)

        if (isSelected.length > 0) {
            const total = isSelected
                .filter((item) => item.value !== true)
                .reduce(
                    (acc, item) => {
                        acc.amount += parseInt(item.amount);
                        acc.adultCount += parseInt(item.adultCount, 10);
                        acc.childCount += parseInt(item.childCount, 10);
                        return acc;
                    },
                    { amount: 0, adultCount: 0, childCount: 0 }
                );
            console.log("isSelected::::::1", total)

            setDisplayBookingSum(total);
        }

    }, [isSelected])


    return (
        <div>
            <div className="w-[95%] m-auto">
                <div>
                    <SearchBar />
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5 pt-4">
                    <div className="col-span-1 lg:h-full">
                        <Sitefilter />
                    </div>

                    <div className="col-span-1 lg:col-span-3">
                        <div>
                            <div className="w-full flex justify-between items-center">
                                <div className="w-full lg:w-[55%]">
                                    <p className="font-semibold mt-2 text-xl text-gray-600">
                                        ({"5"} Rooms Option)
                                    </p>
                                </div>
                            </div>

                            {loading ? (
                                <SkeletonCard />
                            ) : (
                                fetchfiltertourdata?.map((tour, index) => (
                                    <div
                                        key={index}
                                        className="rounded-lg w-full mt-7 grid grid-cols-1 lg:grid-cols-4 gap-6 p-4 shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px] mb-16"
                                    >
                                        <div className="col-span-1">
                                            <div className="w-full h-44 relative">
                                                <Image
                                                    alt={"abc"}
                                                    src={IMAGES.passage}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="rounded-lg"
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                            <div className="w-full h-44 relative mt-2">
                                                <Image
                                                    alt={"abc"}
                                                    src={IMAGES.passage}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="rounded-lg"
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-1 lg:col-span-3 flex flex-col justify-between">
                                            <div>
                                                <p className="text-xl font-semibold mt-4">
                                                    {tour.roomname}
                                                </p>

                                                <p className="line-clamp-3 mt-4">{tour.intro}</p>

                                                <div>
                                                    <div className="flex justify-start items-center mt-2 w-full pt-2">
                                                        <div className="w-full text-gray-800 text-lg flex justify-between gap-8 pr-8">
                                                            {/* Max Guests */}
                                                            <div className="flex items-center gap-2">
                                                                <div className="flex justify-center items-center">
                                                                    <UsersRound className="w-6 h-6" />
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <div className="text-sm">Max. Guests</div>
                                                                    <div className="font-semibold text-sm">3 Adults / 2 Children</div>
                                                                </div>
                                                            </div>

                                                            {/* Booking Nights */}
                                                            <div className="flex items-center gap-2">
                                                                <div className="flex justify-center items-center">
                                                                    <Moon className="w-6 h-6" />
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <div className="text-sm">Booking Nights</div>
                                                                    <div className="font-semibold text-sm">1 Night</div>
                                                                </div>
                                                            </div>

                                                            {/* Bed Type */}
                                                            <div className="flex items-center gap-2">
                                                                <div className="flex justify-center items-center">
                                                                    <BedDouble className="w-6 h-6" />
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <div className="text-sm">Bed Type</div>
                                                                    <div className="font-semibold text-sm">Double Bed</div>
                                                                </div>
                                                            </div>

                                                            {/* Area */}
                                                            <div className="flex items-center gap-2">
                                                                <div className="flex justify-center items-center">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                                                                        <path fill="currentColor" d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2m16.002 14H5V5h14z"></path>
                                                                        <path fill="currentColor" d="M15 12h2V7h-5v2h3zm-3 3H9v-3H7v5h5z"></path>
                                                                    </svg>
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <div className="text-sm">Area</div>
                                                                    <div className="font-semibold text-sm">168 sq. ft.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="flex justify-between items-end w-full pb-4">
                                                <div>
                                                    <div className="mt-4 w-full flex items-center gap-5 flex-wrap">
                                                        <div className="flex justify-center items-center flex-col">
                                                            <div className="border bg-gray-100 w-[35px] h-[35px] rounded-large flex justify-center items-center">
                                                                <BedDouble className="w-[25px] h-[25px] text-red-700" />
                                                            </div>
                                                            <p className="text-sm font-semibold mt-1">Hotel</p>
                                                        </div>

                                                        <div className="flex justify-center items-center flex-col">
                                                            <div className="border bg-gray-100 w-[35px] h-[35px] rounded-large flex justify-center items-center">
                                                                <Utensils className="w-[25px] h-[25px] text-red-700" />
                                                            </div>
                                                            <p className="text-sm font-semibold mt-1">Meal</p>
                                                        </div>

                                                        <div className="flex justify-center items-center flex-col">
                                                            <div className="border bg-gray-100 w-[35px] h-[35px] rounded-large flex justify-center items-center">
                                                                <Camera className="w-[25px] h-[25px] text-red-700" />
                                                            </div>
                                                            <p className="text-sm font-semibold mt-1">Sightseeing</p>
                                                        </div>

                                                        <div className="flex justify-center items-center flex-col">
                                                            <div className="border bg-gray-100 w-[35px] h-[35px] rounded-large flex justify-center items-center">
                                                                <Bus className="w-[25px] h-[25px] text-red-700" />
                                                            </div>
                                                            <p className="text-sm font-semibold mt-1">Transport</p>
                                                        </div>

                                                        <div className="flex justify-center items-center flex-col">
                                                            <div className="border bg-gray-100 w-[35px] h-[35px] rounded-large flex justify-center items-center">
                                                                <Plane className="w-[25px] h-[25px] text-red-700" />
                                                            </div>
                                                            <p className="text-sm font-semibold mt-1">Flight</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="flex flex-col justify-end">

                                                        <div className="flex mt-2 mb-2">
                                                            <div className="w-full">
                                                                <p className="text-xs font-extralight">Start From</p>
                                                                <p className="font-semibold text-2xl mt-2">
                                                                    &#8377; {tour.amount}*
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <ThemeSwitch
                                                            isSelected={isSelected?.find(sel => sel.id === tour.id)?.value ?? true}
                                                            onValueChange={(value) => {
                                                                console.log("Value:::::::::>", value)
                                                                setIsSelected(prevval => {
                                                                    const existingIndex = prevval?.findIndex(sel => sel.id === tour.id);

                                                                    if (existingIndex !== -1) {
                                                                        const updatedArray = [...prevval];
                                                                        updatedArray[existingIndex] = { id: tour.id, name: tour.roomname, value: value, amount: tour.amount, adultCount: tour.adultCount, childCount: tour.childCount };
                                                                        return updatedArray;
                                                                    } else {
                                                                        return [...prevval, { id: tour.id, name: tour.roomname, value: value, amount: tour.amount, adultCount: tour.adultCount, childCount: tour.childCount }];
                                                                    }
                                                                })
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                ))
                            )}

                            {isSelected.filter((item) => item.value !== true).length > 0 ? (
                                <BookingSummary displayBookingSum={displayBookingSum} />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filterpage;

const SkeletonCard = () => {
    return (
        <div className="rounded-lg w-full mt-7 grid grid-cols-1 lg:grid-cols-4 gap-6 p-4 shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px] animate-pulse">
            {/* Skeleton card design */}
        </div>
    );
};
