import { createContext, useEffect, useState} from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./fireBase.config";

export const themecontext = createContext()

export function UserContextProvider(props) {

    const [currentUser, setCurrentUser] = useState()
    const [loadingData, setLoadingData] = useState(true)
    const [theme, setTheme] = useState("light")
    const [nav, setNav] = useState(false)

    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
    const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            setLoadingData(false)
        })
        return unsubscribe
    }, [])

    useEffect(() => {
        if (theme === 'dark'){
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme ==='dark' ? 'light' : 'dark')
    }


    return (
        <themecontext.Provider value={{theme, handleThemeSwitch, signUp, currentUser, signIn, nav, setNav}}>
            {!loadingData && props.children}
        </themecontext.Provider>
    )
}