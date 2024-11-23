import React from 'react'
import Landing from '@/_components/Home/Landing'
import Introduction from '@/_components/Home/Introduction'
import Facilities from '@/_components/Home/Facilities'
import Placestovisit from '@/_components/Home/Placestovisit'
import Testimonials from '@/_components/Home/Testimonials'
import SearchBar from '@/_components/Home/SearchBar'

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
      <Facilities />
      <Placestovisit />
      <Testimonials />
      <SearchBar />

    </div>
  )
}

export default Home
