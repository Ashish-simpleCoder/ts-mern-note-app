import { memo, useLayoutEffect } from "react";
// import { useHistory } from "react-router-dom";
import UserStates from "../../Context/UserContext";
import fetchUser from "../../utils/fetchUser";
import HeroSection from "./Hero.section";

const HomePage = memo(()=>{
    const { setUser} = UserStates()
    // const history = useHistory()
    useLayoutEffect(()=>{
        (async () =>{
            const res = await fetchUser()
            res?._id && setUser({_id:res._id,email:res?.email})
        })()
    },[])


    return(
        <>
            <HeroSection/>
        </>
    )
})
export default HomePage