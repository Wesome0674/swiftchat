import React, { useContext } from 'react'
import { CgMenuRightAlt } from 'react-icons/cg'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { themecontext } from '../usercontext'
import { useNavigate } from 'react-router-dom'
import { auth } from '../fireBase.config'
import { signOut } from 'firebase/auth'


const Nav = () => {
    const {theme, handleThemeSwitch, currentUser, setNav, nav} = useContext(themecontext)
    const navigate = useNavigate()
    const logOut = async () => {
      try {
        await signOut(auth)
        navigate("/")
      } catch (error) {
        alert("for some reasons we can't deconnect, please check your internet connection")
        console.log(error);
      }
    }
    
  return (
    <div className='flex  max-w-[1640px]  mx-auto justify-between w-full border-b-2 border-b-teal-500/40 px-4 py-6'>
        <CgMenuRightAlt onClick={() => setNav(!nav)} size={35} className='text-teal-500 cursor-pointer' />
        <h1 className='font-title text-2xl cursor-pointer text-white dark:text-black'>Chat <span className='text-teal-500'>Swift</span></h1>
        <div className='flex gap-6 items-center'>
          { currentUser ? <button onClick={logOut} className='text-black md:block hidden bg-teal-500 font-title px-3 py-2 text-lg rounded-md'>
            Log out
          </button> : ''}
          {theme !== 'dark' ? <MdLightMode size={35} className='text-teal-500 cursor-pointer' onClick={handleThemeSwitch}/>  : <MdDarkMode size={35} className='text-teal-500 cursor-pointer' onClick={handleThemeSwitch}/>} 
        </div>
      
    </div>
  )
}

export default Nav