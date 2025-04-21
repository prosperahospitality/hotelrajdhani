"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { PhoneForwarded } from "lucide-react";
import IMAGES from '@/public';
import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { Dish } from "./icons";

const OurProcessData = [
  {
    id: 1,
    img: IMAGES.mahakalikatemple,
    title: "Mahakali Mata Temple",
    svg1: <Clock className="w-[20px] h-[20px] text-[#B76E79]" />,
    para1: "15 mins by car",
    svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
    para2: "5 km from Hotel Rajdhani",
    summary:
      "The Mahakali Mata Temple in Pavagadh, near Halol, is a revered pilgrimage site steeped in history and spirituality. Situated atop the Pavagadh Hill in Gujarat's Panchmahal district, the temple is dedicated to Goddess Mahakali, a form of the Hindu Goddess Durga. This ancient temple is part of the UNESCO World Heritage Site of Champaner-Pavagadh Archaeological Park. Visitors embark on a divine journey through stone-carved steps and historic gates to reach the shrine, which exudes a serene and sacred ambiance. For convenience, a ropeway service is available, offering a breathtaking view of the lush surroundings.",
  },
  {
    id: 2,
    img: IMAGES.jambughoda,
    title: "Jambughoda Wildlife Sanctuary",
    svg1: <Clock className="w-[20px] h-[20px] text-[#B76E79]" />,
    para1: "60 mins by car",
    svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
    para2: "36 km from Hotel Rajdhani",
    summary:
      "The Jambughoda Wildlife Sanctuary, located near Halol in Gujarat, is a haven for nature lovers and wildlife enthusiasts. Spread over lush greenery and rolling hills, this sanctuary is home to a diverse range of flora and fauna, including leopards, sloth bears, and a variety of bird species. The tranquil atmosphere and scenic landscapes make it a perfect escape for those seeking peace amidst nature. The sanctuary also boasts beautiful water bodies, including reservoirs like Targol and Kada, enhancing its charm.",
  },
  {
    id: 3,
    img: IMAGES.pavagadhpark,
    title: "Champaner-Pavagadh Archaeological Park",
    svg1: <Clock className="w-[20px] h-[20px] text-[#B76E79]" />,
    para1: "16 mins by car",
    svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
    para2: "6.5 km from Hotel Rajdhani",
    summary:
      `The Champaner-Pavagadh Archaeological Park, a UNESCO World Heritage Site, is a treasure trove of history, culture, and architectural brilliance. Located near Halol in Gujarat, this park showcases a blend of Hindu and Islamic architectural styles, making it a unique representation of India’s rich heritage. It houses ancient temples, mosques, stepwells, palaces, and fortifications that date back to the 8th to 14th centuries.

`
  },
  {
    id: 4,
    img: IMAGES.vadatalav,
    title: "Vadatalav Lake",
    svg1: <Dish className="w-[20px] h-[20px] text-[#B76E79]" />,
    para1: "16 mins by car",
    svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
    para2: "6 km from Hotel Rajdhani",
    summary:
      `The calm waters of Vada Talav reflect the scenic beauty of the surroundings, creating a mesmerizing view at sunrise and sunset. Visitors often enjoy relaxing by the lakeside or exploring the nearby trails. The lake is also significant for its role in supporting local biodiversity and offering a refreshing retreat away from the hustle and bustle of city life. A visit to Vada Talav Lake is a rejuvenating experience, blending natural beauty with a serene atmosphere.`,
  },
  {
    id: 5,
    img: IMAGES.waterfall,
    title: "Hathni mata waterfall",
    svg1: <Clock className="w-[20px] h-[20px] text-[#B76E79]" />,
    para1: "18 mins by car",
    svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
    para2: "7 km from Hotel Rajdhani",
    summary:
      "Hathni Mata Waterfall, nestled near Jambughoda in Gujarat, is a breathtaking natural wonder and a must-visit destination for nature enthusiasts. Surrounded by dense green forests and hills, the cascading waterfall offers a picturesque escape, especially during the monsoon season when it flows at its full glory. The name Hathni Mata is derived from a rock formation near the waterfall that resembles an elephant adding a touch of mystique to the site.",
  },
  {
    id: 6,
    img: IMAGES.mahadevtemple,
    title: "Mangleshwar Mahadev Temple",
    svg1: <Clock className="w-[20px] h-[20px] text-[#B76E79]" />,
    para1: "47 mins by car",
    svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
    para2: "26 km from Hotel Rajdhani",
    summary:
      "Surrounded by lush greenery and tranquil vibes, the temple is a popular spot for religious gatherings and festivals, especially during Mahashivaratri, when devotees come in large numbers to offer prayers. The location of the temple, away from the hustle and bustle of city life, makes it a perfect place for meditation and finding spiritual solace. A visit to Mangleshwar Mahadev Temple offers a blend of spirituality, history, and natural beauty, providing a peaceful retreat for all.",
  },
  //   {
  //     id: 7,
  //     img: IMAGES.kihim,
  //     title: "Kihim Beach",
  //     svg1: <Clock className="w-[20px] h-[20px] text-[#B76E79]" />,
  //     para1: "30 mins by car",
  //     svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
  //     para2: "15 km from Ocean’s Pearl Resort",
  //     summary:
  //       "A rocky beach of immense beauty, Kihim is known to delight visitors with its sands and surf for the past many years. The climate of Kihim village and beach is mainly tropical with heavy rainfall during the Monsoons. You can easily reach Kihim Beach from Alibaug as it is located just 12km away between Alibaug and Mandwa beaches. Deemed as a bird watcher’s paradise, Kihim still sees a healthy inflow of migratory birds due to the dense cover of trees and forests. The combination of warm sands, rocky outcrops, and rare seashells has been known to have a soothing effect on visitors! If you are more of the adventurous kind, you can also enjoy a tented holiday sojourn right on the shores of Kihim. A walk in the woods across the beach in Alibaug is highly recommended if you want to see rare birds and butterflies flit by. You can also take a short trip to Kihim Pond, Kanakeshwar Temple or Karmarkar Museum.",
  //   },
  //   {
  //     id: 8,
  //     img: IMAGES.alibaug,
  //     title: "Nagaon Beach",
  //     svg1: <Clock className="w-[20px] h-[20px] text-[#B76E79]" />,
  //     para1: "5 mins by car",
  //     svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
  //     para2: "700m from Ocean’s Pearl Resort",
  //     summary:
  //       "Nagaon Beach, located near Alibaug in Maharashtra, is a serene and picturesque coastal destination known for its tranquil atmosphere and natural beauty. Stretching along the Arabian Sea, the beach features soft golden sands, clear waters, and lush palm trees that create a perfect setting for relaxation and leisure. Unlike some of the more crowded beaches, Nagaon Beach offers a peaceful retreat where visitors can enjoy swimming, beach volleyball, and local seafood delicacies from nearby shacks. The calm waves and gentle breeze make it an ideal spot for families, couples, and nature enthusiasts seeking a serene escape from the city.",
  //   },
];
const Placestovisit = () => {
  return (
    <div className="w-screen h-auto bg-white text-black lg:pt-0">
      <div className="w-[95%] mx-auto">
        {/* Mobile View */}
        <div className="w-[90%] lg:hidden grid grid-cols-1 mt-8 mx-auto gap-10">
          <div>
            <div className="flex justify-center items-center">
              <div className="border-b border-gray-500  inline-block pb-1">
                <p className="text-center text-2xl font-semibold text-gray-500 lg:text-2xl">
                  Places To Visit
                </p>
              </div>
            </div>
            <h3 className="text-center text-2xl lg:text-4xl leading-snug mt-6 font-semibold ">
              Tourist Destination Nearby
            </h3>
          </div>
          {OurProcessData.map((item) => (
            <div key={item.id} className="mb-12">
              <div className="relative h-[300px]">
                <Image
                  alt="Mountains"
                  src={item.img}
                  fill
                  sizes="(width: 100%)"
                  style={{
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="text-left mt-6">
                <h1 className="text-xl font-semibold leading-relaxed  border-l-3 border-[#333333] pl-3">
                  {item.title}
                </h1>
                <div className="w-full flex justify-between h-[4rem] mt-3 flex-col md:flex-row xl:flex-row xl:h-[3rem]">
                  <div className="w-[100%] flex xl:w-[30%] gap-3">
                    <div className=" h-full flex justify-center items-center md:w-[8%] xl:w-[15%]">
                      {item.svg1}
                    </div>
                    <div className="w-[85%] h-full flex justify-start items-center">
                      <p>{item.para1}</p>
                    </div>
                  </div>
                  <div className="w-[100%] flex xl:w-[60%] gap-4">
                    <div className=" h-full flex justify-center items-center md:w-[8%]">
                      {item.svg2}
                    </div>
                    <div className="w-[85%] h-full flex justify-start items-center">
                      <p>{item.para2}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-black/60">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PC View */}
        <div className="w-full hidden lg:grid grid-cols-1  mx-auto gap-10">
          <div className="flex justify-center items-center">
            <div>
              <div className="flex justify-center items-center">
                <div className="border-b border-gray-500  inline-block pb-1">
                  <p className="text-center text-xl font-semibold text-gray-500 lg:text-2xl">
                    Places To Visit
                  </p>
                </div>
              </div>
              <h3 className="text-center text-2xl lg:text-4xl leading-snug mt-6 font-semibold ">
                Tourist Destination Nearby
              </h3>
            </div>
          </div>
          {OurProcessData.map((item, index) => (
            <div key={item.id}>
              {index % 2 === 0 ? (
                <div className="grid grid-cols-2 gap-8 p-5">
                  {/* <div className="relative h-[20rem]">
                    <Image
                      alt={"Mountains"}
                      src={item.img}
                      fill
                      sizes="(width: 100%)"
                      style={{
                        objectFit: "cover",
                        borderRadius: "20px", // cover, contain, none
                      }}
                      className="group-hover:scale-105"
                    />
                  </div> */}
                  <div className="w-full h-[20rem] relative group overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={item.img}
                      fill
                      sizes="(width: 100%)"
                      alt={"Mountains"}
                      className="w-full h-full object-cover transition-all group-hover:scale-105 aspect-[300/300]"
                    />
                  </div>
                  <div className="flex flex-col justify-center text-left">
                    <h1 className="text-2xl font-semibold leading-relaxed  border-l-3 border-[#333333] pl-3">
                      {item.title}
                    </h1>
                    <div className="w-full flex justify-between h-[4rem] mt-3 flex-col xl:flex-row xl:h-[3rem]">
                      <div className="w-[100%%] flex xl:w-[30%]">
                        <div className="w-[15%] h-full flex justify-center items-center md:w-[8%] xl:w-[15%]">
                          {item.svg1}
                        </div>
                        <div className="w-[85%] h-full flex justify-start items-center">
                          <p>{item.para1}</p>
                        </div>
                      </div>
                      <div className="w-[100%] flex xl:w-[60%]">
                        <div className="w-[15%] h-full flex justify-center items-center md:w-[8%]">
                          {item.svg2}
                        </div>
                        <div className="w-[85%] h-full flex justify-start items-center">
                          <p>{item.para2}</p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-base text-black/60">
                      {item.summary}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-8 p-5">
                  <div className="flex flex-col justify-center text-left">
                    <h1 className="text-2xl font-semibold leading-relaxed  border-l-3 border-blue-600 pl-3">
                      {item.title}
                    </h1>
                    <div className="w-full flex justify-between h-[4rem] mt-3 flex-col xl:flex-row xl:h-[3rem]">
                      <div className="w-[100%%] flex xl:w-[30%]">
                        <div className="w-[15%] h-full flex justify-center items-center md:w-[8%] xl:w-[15%]">
                          {item.svg1}
                        </div>
                        <div className="w-[85%] h-full flex justify-start items-center">
                          <p>{item.para1}</p>
                        </div>
                      </div>
                      <div className="w-[100%] flex xl:w-[60%]">
                        <div className="w-[15%] h-full flex justify-center items-center md:w-[8%]">
                          {item.svg2}
                        </div>
                        <div className="w-[85%] h-full flex justify-start items-center">
                          <p>{item.para2}</p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-base text-black/60">
                      {item.summary}
                    </p>
                  </div>
                  <div className="w-full h-[20rem] relative group overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={item.img}
                      width={800}
                      height={800}
                      alt="special-tours"
                      className="w-full h-full object-cover transition-all group-hover:scale-105 aspect-[300/300]"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Placestovisit;