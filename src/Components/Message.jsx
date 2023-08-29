import React from 'react'
import { auth } from '../fireBase.config'

const style = {
    sent: `flex justify-end m-8`,
    received: `flex m-8`
}

const Message = ({message}) => {
    const messageClass = 
    message.uid === auth.currentUser.uid 
    ? `${style.sent}`
    : `${style.received}`


  return (
    <>
   
        {/* sent */}
        <div className={messageClass}>
            <div>
                <h1 className='text-sm'>{message.name}</h1>
                <div className={message.uid === auth.currentUser.uid ? 'rounded bg-black text-teal-500 p-3 max-w-[300px]' : 'rounded text-black bg-teal-500 p-3 max-w-[300px]'}>
                    <p>{message.text}</p>
                </div>
            </div>
        </div>
        {/* received */}
       {/*  <div className='flex mx-8 '>
            <div>
                <h1 className='text-sm'>Name</h1>
                <div className='rounded text-black bg-teal-500 p-3 max-w-[300px]'>
                    <p>hey men </p>
                </div>
            </div>
        </div> */}
    
 </>
  )
}

export default Message