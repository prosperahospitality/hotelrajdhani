import React from 'react'

const Process = () => {
    return (
        <div className='relative flex w-full justify-center item-center md:mt-10 md:mb-10 mb-16'>
            <div className='w-[90%] lg:w-[80%] mx-auto z-30'>
                <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-5 py-'>
                    <div className='flex flex-col w-full gap-2'>
                        <span className='text-[#333333] text-xl font-semibold'>What We Offer</span>
                        <h2 className='text-2xl md:text-4xl  font-bold w-full lg:w-[90%] text-[#333333]'>Best Gujarati & Punjabi Delights Near Pavagadh</h2>
                        <p className='text-gray-500 text-sm mt-2'>At Hotel Rajdhani, indulge in the authentic flavors of Gujarati Thali for just  <span className='font-semibold text-lg'>₹99/-</span>. Our expertly crafted thali brings you a delightful taste of tradition, packed with fresh ingredients and spices that transport you to the heart of Gujarat. Located in Halol, near Pavagadh, we offer an unmatched culinary experience that will leave you craving for more. Come and enjoy a meal that&apos;s as rich in taste as it is affordable!</p>
                    </div>
                    <div className='w-full grid grid-cols-2 gap-5'>
                        <div className='p-1 h-52 bg-white shadow-xl rounded-xl flex flex-col justify-between gap-2'>

                            <img src="/img/rest1.jpeg" className='object-fill md:object-cover h-full w-full rounded-xl' alt='google' />


                        </div>
                        <div className='p-1 h-52 bg-white shadow-xl rounded-xl flex flex-col justify-between gap-2'>

                            <img src="/img/gujratiThali.jpg" className='object-fill md:object-cover h-full w-full rounded-xl' alt='meta' />

                        </div>
                        <div className='p-1 h-52 bg-white shadow-xl rounded-xl flex flex-col justify-between gap-2'>

                            <img src="/img/punjabiThali.avif" className='object-fill md:object-cover h-full w-full rounded-xl' alt='amazon' />


                        </div>
                        <div className='p-1 h-52 bg-white shadow-xl rounded-xl flex flex-col justify-between gap-2'>
                            <img src="/img/rest2.jpeg" className='object-fill md:object-cover h-full w-full rounded-xl' alt='linked' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-[20%] lg:top-0 lg:bottom-0 lg:my-auto right-0 w-[70%] lg:w-[50%] h-48 lg:h-52 bg-[#F5F5DC] rounded-l-2xl'></div>
        </div>
    )
}

export default Process