import { Fullscreen } from 'lucide-react'
import React from 'react'

const Testimonialssteps = () => {

    return (
        <div className='w-full bg-gray-100 py-12'>
            <div className='w-[90%] lg:w-[80%] m-auto'>
                <p className='text-3xl lg:text-5xl font-semibold text-center w-full text-gray-600 mb-12'>3 Steps to Success</p>
                <div className='my-5 grid grid-cols-1 md:grid-cols-3 gap-8'>

                    <div className='rounded-2xl bg-white p-7 flex flex-col gap-5 justify-center items-center'>
                        <div className='rounded-lg flex justify-center items-center size-14 bg-[#800000]'>
                          
                            <p className='text-3xl text-white flex justify-center items-center font-bold'>1</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <p className='text-[#800000] text-xl font-bold'>Define Your Goal</p>
                            <p className='text-gray-600 font-normal text-center'>{"Establish specific, measurable goals that align with your vision, ensuring clarity and focus for your team's success and growth."}</p>
                        </div>
                    </div>

                    <div className='rounded-2xl bg-white p-4 flex flex-col gap-5 justify-center items-center'>
                        <div className='rounded-lg flex justify-center items-center size-14 bg-[#800000]'>
                        <p className='text-3xl text-white flex justify-center items-center font-bold'>2</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <p className='text-[#800000] text-xl font-bold'>Take Action</p>
                            <p className='text-gray-600 font-normal text-center'>Execute your strategy diligently, maintaining focus and dedication to drive progress and achieve your desired outcomes effectively.</p>
                        </div>
                    </div>

                    <div className='rounded-2xl bg-white p-4 flex flex-col gap-5 justify-center items-center'>
                        <div className='rounded-lg flex justify-center items-center size-14 bg-[#800000]'>
                        <p className='text-3xl text-white flex justify-center items-center font-bold'>3</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <p className='text-[#800000] text-xl font-bold'>Review and Adjust</p>
                            <p className='text-gray-600 font-normal text-center'>Regularly assess your achievements, identify areas for improvement, and make necessary adjustments to stay aligned with your goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonialssteps
