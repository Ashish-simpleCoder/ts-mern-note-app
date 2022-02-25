import { createContext, memo, useContext, useEffect, useState } from "react";
import { ThemeCtxInterface, UserCtxInterface, UserInterface } from "../types";

const UserCtx = createContext<UserCtxInterface>({} as UserCtxInterface)
export const useUserCtx = () => useContext(UserCtx)

export const ThemeCtx = createContext<ThemeCtxInterface>({} as ThemeCtxInterface)
export const useThemeStates = () => useContext(ThemeCtx)


export const UserProvider = memo(({children})=>{
    const [user, setUser] = useState<UserInterface>({} as UserInterface)
    const [search, setSearch] = useState('')

    const [dark_theme, setDarkTheme] = useState(()=>{
        if(localStorage.getItem('dark-theme')){
            const x:any = localStorage.getItem('dark-theme')
            return JSON.parse(x)
        }else{
            return true
        }
    })

    useEffect(()=>{
        localStorage.setItem('dark-theme',JSON.stringify(dark_theme))
        document.body.classList.toggle('dark-theme',dark_theme)
    },[dark_theme])

    return(
        <UserCtx.Provider value={{user, setUser, search, setSearch}}>
            <ThemeCtx.Provider value={{dark_theme, setDarkTheme}}>
            {children}
            </ThemeCtx.Provider>
        </UserCtx.Provider>
    )
})