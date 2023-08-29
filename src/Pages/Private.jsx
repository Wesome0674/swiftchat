import React, {useContext} from 'react'
import { themecontext } from '../usercontext'
import { Outlet, Navigate } from 'react-router-dom'

const Private = () => {

    const {currentUser} = useContext(themecontext)
    console.log("PRIVATE", currentUser);

    if (!currentUser){
        return <Navigate to={"/chatapp"} />
    }

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Private