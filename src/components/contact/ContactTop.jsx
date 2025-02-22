import { ArrowRightIcon, ArrowUpRight } from 'lucide-react'
import React from 'react'

function ContactTop() {
    return (
        <div className=' space-y-8 mt-8'>
            <p className=' text-xl ml-8'>How Can We Help You ?</p>
            <div className='flex flex-col md:flex-row justify-evenly gap-5 md:gap-0'>
                <div className='border border-black py-4 pl-5 pr-12 flex flex-col 
                                 rounded-lg'>
                    <p>Email Us</p>
                    <p className=' opacity-70 mt-1'>
                        One of our agents will respond at the earliest</p>
                    <button className='flex justify-between text-blue-600 mt-5 border border-black'>
                        <input placeholder='sujeetgupta@2801@gmail.com' />
                        <ArrowRightIcon />
                    </button>

                </div>
                <div className='border border-black py-4 pl-5 pr-12 flex flex-col 
                                gap-5 rounded-lg'>
                    <p>Email Us</p>
                    <p className=' opacity-70'>
                        One of our agents will respond at the earliest
                    </p>

                    <button className='flex justify-between text-blue-600'>
                        <input placeholder='sujeetgupta@2801@gmail.com' />
                        <ArrowRightIcon />
                    </button>

                </div>

            </div>
        </div>
    )
}

export default ContactTop