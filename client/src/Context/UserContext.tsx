import { createContext, memo, useContext, useState, Dispatch, SetStateAction } from "react";
import { UserCtxInterface, UserInterface } from "../types";

const UserCtx = createContext<UserCtxInterface>({} as {user:UserInterface, setUser:Dispatch<SetStateAction<UserInterface>>})

export const UserProvider = memo(({children})=>{
    const [user, setUser] = useState<UserInterface>({_id:'ssdf',notes:[]})
    return(
        <UserCtx.Provider value={{user, setUser}}>
            {children}
        </UserCtx.Provider>
    )
})

const UserStates = () => useContext(UserCtx)
export default UserStates