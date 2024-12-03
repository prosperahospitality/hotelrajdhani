
"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import IMAGES from "@/public";

export default function Checkout() {

  const searchParams = useSearchParams();

  const router = useRouter();

  const booking_id = searchParams.get("id");

  const [bookingDetails, setBookingDetails] = useState();

  const [currectYear, setCurrentYear] = useState();

  const [nights, setNights] = useState(0);

  const [salutation, setSalutation] = useState("Mr");

  const [name, setName] = useState("");

  const [number, setNumber] = useState(0);

  const [email, setEmail] = useState("");

  const [check, setCheck] = useState(false);

  const [city, setCity] = useState(false);

  const [zip, setZip] = useState(false);

  function extractYear(dateTimeString) {
    const [datePart] = dateTimeString.split(" ");
    const [day, month, year] = datePart.split("-");
    return year;
  }

  const initialFxn = () => {
    let abc = async () => {
      const response = await fetch(
        `/api/userApi/booking_details?bookingId=${booking_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();

      setBookingDetails(result?.databyid);
      const checkinData =
        result?.databyid?.checkin_date +
        "," +
        " " +
        extractYear(result?.databyid?.booking_date);
      const checkoutData =
        result?.databyid?.checkout_date +
        "," +
        " " +
        extractYear(result?.databyid?.booking_date);

      const checkinDate = new Date(checkinData);
      const checkoutDate = new Date(checkoutData);

      const timeDifference = checkoutDate - checkinDate;

      const numberOfNights = timeDifference / (1000 * 60 * 60 * 24);

      setNights(numberOfNights);

      setCurrentYear(extractYear(result?.databyid?.booking_date));


      if (result?.databyid?.pflag0 === 1) {
        router.push(`/`)
      }



    }

    abc()



  }

  useEffect(() => {
    initialFxn();
  }, []);

  const handleBookingRequest = () => {

    const mainFxn = async () => {

      const insertFxn = async (name, email, number, booking_id, finalAmount, pflag0, city, zip) => {


        let payload = {
          booking_id: booking_id,
          salutation: salutation,
          name: name,
          number: number.toString(),
          email: email,
          city: city,
          zip: zip,
          amt: finalAmount,
          pflag0: pflag0,
          payment_id: '',
          order_id: '',
          signature: '',
          invoice_id: '',
          action: "update",
        }
        const response = await fetch(`/api/userApi/booking_details`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload)
        });
        const result = await response.json();

        let sendEmail = async () => {
          const payload = {
            operation: "sendenquirymail",
            booking_id: booking_id,
            checkindate: bookingDetails.checkin_dateF,
            checkoutdate: bookingDetails.checkout_dateF,
            name: name,
            email: email,
            number: number.toString(),
            city: city,
            zip: zip,
            amt: finalAmount,
            adultcount: bookingDetails.adults_count,
            childrencount: bookingDetails.childrens_count,
            roomdetails: bookingDetails.roomDet,
          }

          const emailresponse = await fetch(`/api/send-email`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
          });
          const emailresult = await emailresponse.json();

          if(emailresult.status === 200) {
            alert("Request sent successfully!")
            router.push(`/`)
          }
        }

        sendEmail()

        return result.response;
      }

      if (name && number) {
        const resp = await insertFxn(name, email, number, booking_id, bookingDetails?.price, 0, city, zip)
      }
    }

    mainFxn()
  }

  return (
    <>

      <div className=" bg-gray-50 flex flex-col lg:flex-col items-center justify-center">

        <div className="container mx-auto p-6">

          <div className="flex justify-between items-start flex-col lg:flex-row gap-6">

            {/* Checkout Details */}
            <div className="w-full lg:w-[70%] bg-white p-6 rounded-lg shadow-lg">
              {/* Coupon Section */}

              <h2 className="flex text-xl font-semibold mb-4 w-full justify-center">
                Booking Summary
              </h2>
              <div className="flex justify-between items-center flex-col md:flex-row gap-2 mb-5 ">
                <div className="flex gap-3 md:flex-col justify-center items-center">
                  <p className="text-sm lg:text-lg">Check In</p>
                  <p className="text-lg font-semibold">
                    {bookingDetails?.checkin_date}
                    {","} {currectYear}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="font-bold"
                    style={{
                      "WebkitTextStroke": "thick",
                      padding: "0 0 7px 0",
                    }}
                  >
                    .
                  </span>
                  <span>----</span>
                  <span className="text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-moon"
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  </span>
                  <span className="text-lg font-semibold">{nights ? nights : nights}</span>
                  <span>----</span>
                  <span
                    className="font-bold"
                    style={{
                      "WebkitTextStroke": "thick",
                      padding: "0 0 7px 0",
                    }}
                  >
                    .
                  </span>
                </div>
                <div className="flex gap-3 md:flex-col justify-center items-center">
                  <p className="text-sm lg:text-lg">Check Out</p>
                  <p className="text-lg font-semibold">
                    {bookingDetails?.checkout_date}
                    {","} {currectYear}
                  </p>
                </div>
              </div>

              {/* Room Details */}
              <div className="mb-4 grid grid-cols-2 gap-4 w-full">
                {bookingDetails?.roomDet.map((item, index) => (
                  <div
                    key={item.id || `room-${index}`}
                    className="mb-4 flex gap-4 w-full flex-col md:flex-row"
                  >
                    <Image
                      src={IMAGES.passage}
                      alt="Superior Room"
                      className="w-full md:w-1/4 h-32 object-cover rounded-lg"
                      width={500}
                      height={500}
                    />
                    <div>
                      <p className="text-lg font-semibold">{item.name || ''}</p>
                      <p>{item.adultCount || ''} Adult</p>
                      <p>Room 1</p>
                      <p>Base Price: ₹ {item.amount || ''}</p>
                    </div>
                  </div>
                ))}
              </div>


              <div className="w-full flex justify-center items-center md:justify-end">
                <button
                  className="bg-red-900 text-white font-medium py-2 px-4 rounded-lg"
                  onClick={(e) => {
                    router.push(
                      `/filterpage?checkindate=${bookingDetails.checkin_dateF}&checkoutdate=${bookingDetails.checkout_dateF}&adultsSelect=${bookingDetails.roomDet[0].adultCount}&childSelect=${bookingDetails.roomDet[0].childCount}&bookId=${booking_id}`
                    );
                  }}
                >
                  Modify
                </button>
              </div>

              <div className="mb-5 bg-white p-6 rounded-lg border-t w-full mt-8">
                {/* <h2 className="text-lg font-semibold mb-4">Have a coupon code?</h2>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Coupon"
                    className="p-2 border border-gray-300 rounded-lg w-full" />
                  <button className="bg-gray-500 text-white py-2 px-4 ml-2 rounded-lg">
                    Apply
                  </button>
                </div> */}
                <div className="flex justify-between items-center">
                  <p>Room Total</p>
                  <p>₹ {bookingDetails?.price}</p>
                </div>
                {/* <div className="flex justify-between items-center">
                            <p>GST</p>
                            <p>₹ {(bookingDetails?.price * 18 / 100).toFixed(2)}</p>
                        </div> */}
                <div className="flex justify-between items-center font-semibold text-lg mt-2">
                  <p>Total Price</p>
                  {/* <p>₹ {(bookingDetails?.price * (1 + 18 / 100)).toFixed(2)}</p> */}
                  <p>₹ {bookingDetails?.price}</p>
                </div>

              </div>

            </div>


            {/* Repeating Guest */}
            <div className="w-full lg:w-[30%] bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Guest Details</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name *</label>
                <div className="inline-flex gap-2 w-full">
                  <select
                    onChange={(e) => setSalutation(e.target.value)}
                    value={salutation}
                    className="border rounded-md p-1"
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                  </select>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4 w-full">
                <label className="block text-sm font-medium mb-1">
                  Phone Number *
                </label>
                <div className="flex justify-between lg:gap-2 flex-col lg:flex-row gap-3">
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Phone Number"
                    onChange={(e) => setNumber(e.target.value)}
                  />


                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Email ID
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex mb-4 gap-2 w-full">
                <div className="">
                  <label className="block text-sm font-medium mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>


                <div className="">
                  <label className="block text-sm font-medium mb-1">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Zip"
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>
              </div>

              {/* <h3 className="text-lg font-semibold mb-2">Payment Methods</h3>
              <p className="mb-4">Prepaid</p> */}

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={(e) => setCheck((prevVal) => !prevVal)}
                />
                <label className="text-sm">
                  I have read and accept the Hotel&apos;s{" "}
                  <a href="#" className="text-pink-500 underline">
                    Terms & conditions, Privacy policies, Cancellation Policies.
                  </a>
                </label>
              </div>
              <div className="w-full flex justify-center lg:justify-start">
                <Button onClick={(e) => handleBookingRequest()} className="bg-red-900 text-white font-medium">Send Booking Request</Button>
              </div>
            </div>
          </div>


        </div>
      </div>


    </>
  );
}
