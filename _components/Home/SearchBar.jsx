'use client'
import React, { useState } from 'react'
import { CalendarRange, Search } from "lucide-react"
import Daterangepickerreact from "@/_components/Home/Daterangepickerreact"
import { PiUsersLight } from "react-icons/pi";
import RoomsAndGuests from '@/_components/Home/RoomsAndGuests'
import { Button } from '@nextui-org/react'

const SearchBar = () => {

    const searchedDate = "25-11-2024";
    const checkoutdate = "26-11-2024";

    const differenceInDays = (date1, date2) => (new Date(date2.split('-').reverse().join('-')) - new Date(date1.split('-').reverse().join('-'))) / (1000 * 3600 * 24);
    const [initialDate, setInitialDate] = useState(
        differenceInDays(searchedDate, checkoutdate)
    );

    const handleDateSelect = (val) => {

        setSelectedDateRange(val);
    };
    const [selectedDateRange, setSelectedDateRange] = useState(null);

    return (
        <div className="my-4">
            <h2 className="text-black text-xl py-4">Availability</h2>

            <div className="flex-col h-full lg:flex-row w-full gap-2 flex items-center m-auto  transition-all duration-200 delay-200 ease-in-out text-black ">
                <div className="flex w-full bg-blue-200 flex-col lg:flex-row p-4 rounded-xl gap-5">
                    <div className="w-full gap-2 flex-2">
                        <p className="flex gap-2 justify-center items-center pb-2">
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
                            <p className="flex gap-2 justify-center items-center pb-2">
                                <PiUsersLight className="size-8" />
                                Travelers
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
                    <div className="flex justify-center  items-center  lg:items-end flex-1 ">
                        <Button
                            isIconOnly
                            color="secondary"
                            variant="shadow"
                            size="lg"
                            onClick={(e) => searchAction()}
                            className="w-full"
                        >
                            <Search className="" />
                            <p className="text-white ml-2">Search</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar