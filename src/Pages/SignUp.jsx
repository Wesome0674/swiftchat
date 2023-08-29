import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { themecontext } from '../usercontext'
import { useNavigate } from 'react-router-dom'

 export const SignUp = () => {

  const navigate = useNavigate()

  const {signUp} = useContext(themecontext)

  const [validation, setValidation] = useState("")

  const inputs = useRef([])
  const addInputs = el => {
    if (el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }

  const formRef = useRef()

  const handleForm = async (e) => {
    e.preventDefault()
    
    if((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
      setValidation("6 characters min")
      return;
    }
    else if(inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Password do not match")
      return;
    }

    try {
        await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      )
      formRef.current.reset()
      setValidation("")
      /* console.log(cred); */
      navigate("/private/homechat")
    } catch (error) {
        // Gérer les erreurs ici
    if (error.code === "auth/email-already-in-use") {
      setValidation("Email already in use");
    } else if (error.code === "auth/invalid-email") {
      setValidation("Email format invalid");
    }
     else {
      // Gérer d'autres erreurs inattendues ici
      console.error("An unexpected error occurred:", error);
    }
    }
  }


  return (
    <div className=' absolute w-full h-screen bg-white top-0 '>
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleForm} ref={formRef}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input ref={addInputs}  name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                </div>
                <div className="mt-2">
                  <input ref={addInputs}  name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"/>
                </div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Repeat Password</label>
                <div className="mt-2">
                  <input ref={addInputs}  name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <p className=' text-red-600'>{validation}</p>
              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">Sign in</button>
              </div>
            </form>
              <p className="mt-10 text-center text-sm text-gray-500">
                Already a member?
                <Link to={"/login"}  className="font-semibold leading-6 text-teal-500 hover:text-teal-600">Log in</Link>
              </p>
          </div>
        </div>
    </div>
  )
}

