import { createContext, memo, useContext, useState, Dispatch, SetStateAction} from "react";
import { ThemeCtxInterface, UserCtxInterface, UserInterface } from "../types";

const UserCtx = createContext<UserCtxInterface>({} as UserCtxInterface)


export const ThemeCtx = createContext<ThemeCtxInterface>({} as ThemeCtxInterface)



export const UserProvider = memo(({children})=>{
    const [user, setUser] = useState<UserInterface>({_id:'',notes:[], email:''})

    const [search, setSearch] = useState('')

    const [dark_theme, setDarkTheme] = useState(()=>{
        if(localStorage.getItem('dark-theme')){
            const x:any = localStorage.getItem('dark-theme')
            return JSON.parse(x)
        }else{
            return false
        }
    })

    return(
        <UserCtx.Provider value={{user, setUser, search, setSearch}}>
            <ThemeCtx.Provider value={{dark_theme, setDarkTheme}}>
            {children}
            </ThemeCtx.Provider>
        </UserCtx.Provider>
    )
})

const UserStates = () => useContext(UserCtx)
export default UserStates