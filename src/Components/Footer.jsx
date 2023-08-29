import React from 'react'
import {AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook, AiFillLinkedin } from "react-icons/ai"


const Footer = () => {
    const today = new Date();

  return (
    <div className='max-w-[1640px] w-full p-4 mx-auto border-t-2 border-t-teal-500/40  ' >
        <div className=' flex flex-col items-center justify-between py-4 md:flex-row gap-4'>
            <div>
                <p className='text-teal-500 '>&copy; {today.getFullYear()}</p>
            </div>
            <div>
            <div>
                <ul className='flex gap-4'>
                    <li className='underline hover:text-teal-500 text-white dark:text-black'><a href="/">Privacy Policy</a></li>
                    <li className='underline hover:text-teal-500 text-white dark:text-black'><a href="/">Terms of Service</a></li>
                    <li className='underline hover:text-teal-500 text-white dark:text-black'><a href="/">Cookies Settings</a></li>
                </ul>
            </div>
            </div>
            <div className='flex cursor-pointer'>
                <AiOutlineInstagram size={30} className='text-teal-500' />
                <AiOutlineTwitter size={30} className='text-teal-500'  />
                <AiFillFacebook size={30} className='text-teal-500'  />
                <AiFillLinkedin size={30} className='text-teal-500'  />
            </div>
        </div>
  </div>
  )
}

export default Footer