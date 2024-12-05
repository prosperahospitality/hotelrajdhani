import React from 'react'
import Landing from '@/_components/Home/Landing'
import Introduction from '@/_components/Home/Introduction'
import Facilities from '@/_components/Home/Facilities'
import Placestovisit from '@/_components/Home/Placestovisit'
import Testimonials from '@/_components/Home/Testimonials'
import CorporateGuestsSection from '@/_components/Home/Companies'


const Home = () => {

  const revenuedata = [
    {
      "key": "1",
      "title": " Growth Made Easy.",
      "description": "At Prospera Hospitality, we create simple, tailored strategies that address your hotel’s unique needs. Our data-driven insights empower you to optimize pricing and maximize occupancy for sustainable revenue growth."
    }
  ]


  return (
    <div className='flex flex-col gap-10 lg:gap-16'>
      {/* <Landing content={revenuedata}/> */}
      <Landing />
      <Introduction />
      <div className='w-full flex justify-center items-center mt-16'>
        <div className="flex flex-col justify-center items-center w-[98%] h-full">
          <div className="border-b border-gray-500  inline-block pb-1">
            <p className="text-center text-gray-500 text-xl lg:text-2xl">Locate Us</p>
          </div>
          <div className="flex justify-center item-center w-full h-full p-4 mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.8276178427345!2d73.46753771036363!3d22.510649935153598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27af00c0062751%3A0xbce61e514e75742e!2sHotel%20Rajdhani%20And%20Guest%20House!5e0!3m2!1sen!2sin!4v1732607993926!5m2!1sen!2sin"
              width="600"
              className="w-full h-72 border-none shadow-lg "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>
      </div>

      <Facilities />
      <CorporateGuestsSection />
      <Placestovisit />
      <Testimonials />
    </div>
  )
}

export default Home
