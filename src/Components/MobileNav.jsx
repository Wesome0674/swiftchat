import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../fireBase.config'
import { themecontext } from '../usercontext'

const MobileNav = () => {
    const {setNav, nav, currentUser} = useContext(themecontext)
    const navigate = useNavigate()
    const logOut = async () => {
      try {
        await signOut(auth)
        setNav(false)
        navigate("/chatapp")
      } catch (error) {
        alert("for some reasons we can't deconnect, please check your internet connection")
        console.log(error);
      }
    }
  return (
    <div className={ nav ? 'absolute w-[300px] bg-teal-500 left-0 top-0 h-screen z-10 duration-200' : 'absolute w-[300px] bg-teal-500 left-[-100%] h-screen z-10 duration-200'}>
        <div className='flex items-center justify-between m-4'>
            <h1 className='font-title text-2xl cursor-pointer text-white '>Chat <span className='text-black'>Swift</span></h1>
            <AiOutlineClose size={30} onClick={() => setNav(!nav)}/>
        </div>
         <ul className='p-4 mt-10'>
           { !currentUser ? 
           <div> <li className='my-2'> 
                <Link to={"/signup"}>
                    <button type="button" onClick={() => setNav(false)} className="text-teal-500 font-title bg-[#050708] hover:bg-[#050708]/90 md:text-lg font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                        Sign up
                    </button>
                </Link>
           </li> 
            <li className='my-2'>
                <Link to={"/login"}>
                    <button type="button" onClick={() => setNav(false)} className="text-black font-title bg-teal-500 border-2 border-black hover:bg-teal-600 md:text-lg font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                        Log in
                    </button>
                </Link>
            </li> 
            </div> : '' }
            { currentUser ? <li className='my-2'>
                <button onClick={logOut} className='text-black  bg-teal-500 border-black border-2 font-title px-3 py-2 text-lg rounded-md'>
                    Log out
                </button> 
            </li> : ''}
            <li className=' my-6 underline text-white dark:text-black'><a href="/">Privacy Policy</a></li>
            <li className=' my-6  underline text-white dark:text-black'><a href="/">Terms of Service</a></li>
            <li className=' my-6 underline text-white dark:text-black'><a href="/">Cookies Settings</a></li>
         </ul>
    </div>
  )
}

export default MobileNav