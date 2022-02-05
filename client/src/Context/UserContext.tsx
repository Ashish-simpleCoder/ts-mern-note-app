import { createContext, memo, useContext, useState, Dispatch, SetStateAction} from "react";
import { UserCtxInterface, UserInterface } from "../types";

const UserCtx = createContext<UserCtxInterface>({} as {user:UserInterface, setUser:Dispatch<SetStateAction<UserInterface>>})
export const ThemeCtx = createContext<{dark_theme:boolean, setDarkTheme: Dispatch<any>}>({} as {dark_theme:boolean, setDarkTheme: Dispatch<any>})

export const UserProvider = memo(({children})=>{
    const [user, setUser] = useState<UserInterface>({_id:'',notes:[], email:''})
    const [dark_theme, setDarkTheme] = useState(()=>{
        if(localStorage.getItem('dark-theme')){
            const x:any = localStorage.getItem('dark-theme')
            return JSON.parse(x)
        }else{
            return false
        }
    })

    return(
        <UserCtx.Provider value={{user, setUser}}>
            <ThemeCtx.Provider value={{dark_theme, setDarkTheme}}>
            {children}
            </ThemeCtx.Provider>
        </UserCtx.Provider>
    )
})

const UserStates = () => useContext(UserCtx)
export default UserStates