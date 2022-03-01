import { createContext, ReactNode, useContext, useEffect, useState, useMemo } from "react"
import { ThemeCtxInterface } from "../types"

const ThemeCtx = createContext<ThemeCtxInterface>({} as ThemeCtxInterface)
export const useThemeStates = () => useContext(ThemeCtx)
export default ThemeCtx

export const ThemeProvider = ({children}: { children: ReactNode}) =>{
    const [dark_theme, setDarkTheme] = useState(()=>{
        if(localStorage.getItem('dark-theme')){
            return JSON.parse(localStorage.getItem('dark-theme')!)
        }else{
            return true
        }
    })
    useEffect(()=>{
        localStorage.setItem('dark-theme',JSON.stringify(dark_theme))
        document.body.classList.toggle('dark-theme',dark_theme)
    },[dark_theme])

    const theme_props = useMemo(()=>({dark_theme, setDarkTheme}), [dark_theme, setDarkTheme])

    return(
        <ThemeCtx.Provider value={theme_props}>
        {children}
        </ThemeCtx.Provider>
    )
}