'use client'
import React, { useState } from 'react'
import { CalendarRange, Search } from "lucide-react"
import Daterangepickerreact from "@/_components/Home/Daterangepickerreact"
import { PiUsersLight } from "react-icons/pi";
import RoomsAndGuests from '@/_components/Home/RoomsAndGuests'
import { Button } from '@nextui-org/react'
import { today, getLocalTimeZone } from "@internationalized/date";

const SearchBar = ({ checkindateParam,
    checkoutdateParam,
    adultsSelectParam,
    childSelectParam,
    allRoomsDet, 
    onFilteredResults,
    onCheckindate,
    onCheckoutdate,
    onAdultsSelect,
    onChildSelect,
    onSelectedDateRange}) => {

    let defaultDate = today(getLocalTimeZone());
    const nextDay = defaultDate.add({ days: 1 });

    console.log("Dates::::::::>", defaultDate, nextDay)

    const formatDate = (date) => {
        const day = String(date.day).padStart(2, "0");
        const month = String(date.month).padStart(2, "0");
        const year = String(date.year);
        return `${day}-${month}-${year}`;
    };

    const [checkindate, setCheckindate] = useState(checkindateParam);
    const [checkoutdate, setCheckoutdate] = useState(checkoutdateParam);

    const [selectedDateRange, setSelectedDateRange] = useState(null);

    const [adultsSelect, setAdultsSelect] = useState();
    const [childSelect, setChildSelect] = useState();

    const differenceInDays = (date1, date2) => (new Date(date2.split('-').reverse().join('-')) - new Date(date1.split('-').reverse().join('-'))) / (1000 * 3600 * 24);
    const [initialDate, setInitialDate] = useState(
        differenceInDays(checkindate, checkoutdate)
    );

    const handleDateSelect = (val) => {

        const formatDate = (date) => {
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
        };
        const formattedStartDate = formatDate(val[0].startDate);
        const formattedEndDate = formatDate(val[0].endDate);

        setCheckindate(formattedStartDate);
        setCheckoutdate(formattedEndDate);
        setSelectedDateRange(val);

        onCheckindate(formattedStartDate);
        onCheckoutdate(formattedEndDate);
        onSelectedDateRange(val);
    };

    const handleAdultSelect = (value) => {
        setAdultsSelect(value);
        onAdultsSelect(value);
    };
    const handleChildSelect = (value) => {
        setChildSelect(value);
        onChildSelect(value);
    };

    const searchAction = () => {
        try {

            const filteredRooms = allRoomsDet.filter((item) => {

                const isAdultValid = item.base_adult <= adultsSelect && item.max_adult >= adultsSelect;

                const isChildValid = (item.base_child <= childSelect && item.max_child >= childSelect) || (childSelect === 0 && item.base_child >= 1);

                return isAdultValid && isChildValid;

            });

            onFilteredResults(filteredRooms)

            console.log("Filtered result::::::>", filteredRooms, allRoomsDet)

        } catch (error) {
            console.log("Error:::::>", error)
        }

    }


    return (
        <div className="my-4 w-full">

            {/* <div class="p-6 rounded-lg shadow-md">
                <span class="flex items-center justify-center text-center text-3xl font-bold text-green-500 drop-shadow-2xl">
                    Experience Royal Comfort, Modern Luxury, and Unmatched Hospitality at Hotel Rajdhani
                </span>
            </div> */}




            <div className="flex-col h-full lg:flex-row w-full gap-2 flex items-center m-auto  transition-all duration-200 delay-200 ease-in-out text-black ">
                <div className="flex w-full bg-black/10 flex-col lg:flex-row p-4 rounded-xl gap-5 backdrop-blur-sm">
                    <div className="w-[50%] gap-2">
                        <p className="flex gap-2 justify-center items-center pb-2 text-black">
                            <CalendarRange className="size-8" />
                            Check In-Check Out
                        </p>

                        <Daterangepickerreact
                            className=""
                            initialDate={initialDate}
                            onDateValue={handleDateSelect}
                            checkindate={checkindate}
                        />
                    </div>

                    <div className="flex justify-center items-center flex-col lg:flex-row gap-5 lg:gap-0 w-[30%]">
                        <div className="w-full gap-2">
                            <p className="flex gap-2 justify-center items-center pb-2 text-black">
                                <PiUsersLight className="size-8" />
                                Guests
                            </p>
                            <RoomsAndGuests
                                adultsSelectParam={adultsSelectParam}
                                childSelectParam={childSelectParam}
                                onAdultsSelect={handleAdultSelect}
                                onChildSelect={handleChildSelect}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center  items-center  lg:items-end w-[30%]">
                        <Button
                            isIconOnly
                            // color="secondary"
                            // variant="shadow"
                            size="md"
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