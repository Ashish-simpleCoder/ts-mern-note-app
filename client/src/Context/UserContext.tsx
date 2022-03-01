import { createContext, memo, useContext, useMemo, useState } from "react";
import { UserCtxInterface, UserInterface } from "../types";
import { ThemeProvider } from "./ThemeContext";

const UserCtx = createContext<UserCtxInterface>({} as UserCtxInterface)
export const useUserCtx = () => useContext(UserCtx)


export const UserProvider = memo(({children})=>{
    const [user, setUser] = useState<UserInterface>({} as UserInterface)
    const [search, setSearch] = useState('')
    const user_props = useMemo(()=>({user, setUser, search, setSearch}), [user, setUser, search, setSearch])
    return(
        <UserCtx.Provider value={user_props}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </UserCtx.Provider>
    )
})