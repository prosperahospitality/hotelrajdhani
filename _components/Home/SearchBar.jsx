'use client'
import React, { useState } from 'react'
import { CalendarRange, Search } from "lucide-react"
import Daterangepickerreact from "@/_components/Home/Daterangepickerreact"
import { PiUsersLight } from "react-icons/pi";
import RoomsAndGuests from '@/_components/Home/RoomsAndGuests'
import { Button } from '@nextui-org/react'
import { today, getLocalTimeZone } from "@internationalized/date";

const SearchBar = () => {

    let defaultDate = today(getLocalTimeZone());
    const nextDay = defaultDate.add({ days: 1 });

    console.log("Dates::::::::>", defaultDate, nextDay)

    const formatDate = (date) => {
        const day = String(date.day).padStart(2, "0");
        const month = String(date.month).padStart(2, "0");
        const year = String(date.year);
        return `${day}-${month}-${year}`;
    };

    const [searchedDate, setSearchedDate] = useState(formatDate(defaultDate));
    const [checkoutdate, setCheckoutdate] = useState(formatDate(nextDay));

    const [selectedDateRange, setSelectedDateRange] = useState(null);

    // const searchedDate = "25-11-2024";
    // const checkoutdate = "26-11-2024";

    const differenceInDays = (date1, date2) => (new Date(date2.split('-').reverse().join('-')) - new Date(date1.split('-').reverse().join('-'))) / (1000 * 3600 * 24);
    const [initialDate, setInitialDate] = useState(
        differenceInDays(searchedDate, checkoutdate)
    );

    const handleDateSelect = (val) => {

        setSelectedDateRange(val);
    };


    return (
        <div className="my-4 w-[45rem]">

            {/* <div class="p-6 rounded-lg shadow-md">
                <span class="flex items-center justify-center text-center text-3xl font-bold text-green-500 drop-shadow-2xl">
                    Experience Royal Comfort, Modern Luxury, and Unmatched Hospitality at Hotel Rajdhani
                </span>
            </div> */}




            <div className="flex-col h-full lg:flex-row w-full gap-2 flex items-center m-auto  transition-all duration-200 delay-200 ease-in-out text-black ">
                <div className="flex w-full bg-black/20 flex-col lg:flex-row p-4 rounded-xl gap-5 backdrop-blur-sm">
                    <div className="w-full gap-2 flex-2">
                        <p className="flex gap-2 justify-center items-center pb-2 text-white">
                            <CalendarRange className="size-8" />
                            Check In-Check Out
                        </p>

                        <Daterangepickerreact
                            className=""
                            initialDate={initialDate}
                            onDateValue={handleDateSelect}
                            checkindate={searchedDate}
                        />
                    </div>

                    <div className="flex justify-center items-center flex-col lg:flex-row gap-5 lg:gap-0 flex-2">
                        <div className="w-full gap-2">
                            <p className="flex gap-2 justify-center items-center pb-2 text-white">
                                <PiUsersLight className="size-8" />
                                Guests
                            </p>
                            <RoomsAndGuests
                                adultsSelectParam={"2"}
                                childSelectParam={"2"}
                                roomsSelectParam={"2"}
                            // onAdultsSelect={handleAdultSelect}
                            // onChildSelect={handleChildSelect}
                            // onRoomsSelect={handleRoomSelect}
                            // childPolicyOverview={childPolicyOverview}
                            // childRates={childRates}
                            // ageArray={ageArray}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center  items-center  lg:items-end flex-1 w-full ">
                        <Button
                            isIconOnly
                            // color="secondary"
                            // variant="shadow"
                            size="lg"
                            onClick={(e) => searchAction()}
                            className="w-full p-4 bg-[#800000]"
                        >
                            <Search className="text-white" />
                            <p className="text-white ml-2">Check Availability</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar