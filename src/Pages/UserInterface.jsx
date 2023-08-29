import React, { useEffect, useRef, useState } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Message from '../Components/Message'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { db , auth } from '../fireBase.config'

const UserInterface = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState([])
  const [loading, setLoading] = useState('')
  const scrool = useRef()

  useEffect(() => {
    setLoading("loading...")
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    console.log(q);
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id});
        
        
      });
      setLoading("")
      setMessages(messages); // Mettez à jour l'état avec les messages récupérés
      console.log(messages);
    });
  
    return () => unsubscribe(); // N'oubliez pas de retourner la fonction de désinscription pour nettoyer lors du démontage du composant
  }, []);

  const sendMessage = async (e) => {
      e.preventDefault()
      if (input === ''){
        alert('please enter a valid messge') 
        return
      }
      const {uid, email} = auth.currentUser
      await addDoc(collection(db, 'messages'), {
        text: input,
        name: email,
        uid,
        timestamp: serverTimestamp()
      })
      setInput('')
      scrool.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className=''>
    <Nav />
    <div className='rounded-md bg-[#005C5C] h-[80vh] py-4 relative max-w-[1640px] mx-auto m-4 overflow-hidden'>
      <div ref={scrool} className='overflow-y-auto h-[70vh]'>
        <div className=' grid place-content-center'>
          <p className='text-3xl font-title'>{loading}</p>
        </div>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </div>
      <form onSubmit={sendMessage} className='w-full absolute flex h-14 bottom-0'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className='w-full placeholder:text-black outline-none bg-teal-500 px-4'
          placeholder='Type in your message'
        />
        <button type='submit' className='w-[15%] font-title bg-black text-teal-500 md:text-base text-sm'>Send message</button>
      </form>
    </div>
    <Footer />
  </div>
  )
}

export default UserInterface
