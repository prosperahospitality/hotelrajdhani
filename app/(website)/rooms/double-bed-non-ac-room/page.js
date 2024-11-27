import React from 'react';
import RoomsTemplate from '@/_components/Rooms/Rooms';
import { Wifi, Cctv, Droplets, CircleParking, Dish, GlassWater } from "lucide-react";

const DoubleBedNonAc = () => {
  const content = {
    roomname: "Double Bed Non AC Room",
    price: "1,099",
    images: {
      room1: "https://swiperjs.com/demos/images/nature-1.jpg",
      room2: "https://swiperjs.com/demos/images/nature-1.jpg",
    },
    description: "Experience cozy comfort and budget-friendly accommodation in our Double-Bed Non AC Rooms at Hotel Rajdhani. Thoughtfully designed for a restful stay, these rooms feature spacious interiors, essential amenities, and a naturally airy ambiance that keeps you refreshed after a day of exploring the scenic beauty and cultural heritage of Pavagadh. Perfect for travelers seeking simplicity and relaxation, our Double-Bed Non AC Rooms ensure a comfortable and memorable stay, whether it’s for a short visit or an extended getaway.",
    roomservices: [
      {
        icon: <Wifi className="size-7" />,
        name: "Wifi"
      },
      {
        icon: <Cctv className="size-7" />,
        name: "CCTV Cameras"
      },
      {
        icon: <Droplets className="size-7" />,
        name: "Hot & Cold Water"
      },
      {
        icon: <CircleParking className="size-7" />,
        name: "Parking"
      },
      {
        icon: <GlassWater className="size-7" />,
        name: "Mineral Water"
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 640 512"><path fill="currentColor" d="M256 64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h192zm32 384h288c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H288zM64 160c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z"></path></svg>,
        name: "Extra Matress"
      },
    ],
    similarrooms: [
      {
        roomimage : {
          room1: "https://swiperjs.com/demos/images/nature-1.jpg",
          room2: "https://swiperjs.com/demos/images/nature-1.jpg",
        },
        roomname: "Double Bed AC Room",
        price:"1,699"
      },
      {
        roomimage : {
          room1: "https://swiperjs.com/demos/images/nature-1.jpg",
          room2: "https://swiperjs.com/demos/images/nature-1.jpg",
        },
        roomname: "Triple Bed AC Room",
        price:"1,499"
      }
    ]
  }

  return (
    <div>
      <RoomsTemplate content={content} />
    </div>
  );
}

export default DoubleBedNonAc