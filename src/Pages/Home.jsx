import React, { useContext } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { themecontext } from '../usercontext'

export const Home = () => {
   const {currentUser} = useContext(themecontext)
   
  return (
    <div className='sm:h-screen flex justify-between flex-col '>
      <Nav />
      <div className='w-full  p-4 max-w-[1640px]  mx-auto  '>
        <div className='flex items-center flex-col'>
            <h1 className=' dark:text-black max-w-5xl text-center text-4xl my-16 font-title text-white md:text-6xl'>Your Gateway to <span className='text-teal-500'>Seamless Conversations!</span></h1>
            <p className='text-center text-white dark:text-black text-sm max-w-[450px] md:max-w-[600px] lg:text-lg'> 
                Welcome to <span className='text-teal-500'>ChatSwift</span> - Our 
                <span className='text-teal-500'> cutting-edge messaging platform</span> is designed to bring you <span className='text-teal-500'>lightning-fast 
                and hassle-free communication</span>. Whether you're connecting with friends, 
                family, or colleagues, ChatSwift ensures that your messages flow effortlessly,
                creating <span className='text-teal-500'>meaningful connections</span> in an instant. Join us today and experience 
                the future of messaging.
            </p>
            {!currentUser ? <div className='flex flex-wrap my-16'>
              <Link to={"/signup"}>
                <button type="button" className="text-teal-500 font-title bg-[#050708] hover:bg-[#050708]/90 md:text-lg font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                    Sign up
                </button>
              </Link>
              <Link to={"/login"}>
                <button type="button" className="text-black font-title bg-teal-500 hover:bg-teal-600 md:text-lg font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                    Log in
                </button>
              </Link>
            </div> : 
            <Link to={"/private/homechat"}> <button className='text-2xl text-black bg-teal-500 rounded-md px-3 py-2 mx-auto font-title my-6'> Back to chat</button> </Link> }
        </div>
       </div>
       <Footer />
    </div>
   
  )
}
