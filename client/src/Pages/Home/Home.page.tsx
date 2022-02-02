import { memo, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import UserStates from "../../Context/UserContext";
import fetchUser from "../../utils/fetchUser";

const HomePage = memo(()=>{
    const {user, setUser} = UserStates()
    const history = useHistory()
    useLayoutEffect(()=>{
        (async () =>{
            const res = await fetchUser()
            if(!res?._id) history.push('/login')
            else setUser({_id:res._id})
        })()
    },[])
    return(
        <>
            <h2>home</h2>
        </>
    )
})
export default HomePage