import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useUserCtx } from "../Context/UserContext"

const useFetchUser = ({auth = false} : {auth?:boolean}) =>{
    const {setUser} = useUserCtx()
    const history = useHistory()

    useEffect(()=>{
        (async () =>{
            const res = await (await import("../modules/fetchUser")).default()
            if(auth && res?._id){
                //for protecting the note page being accessed by logging in
                setUser(v=>({...v,_id:res._id,email:res?.email}))
            }else{
                // for home page
                res?._id && setUser(v=>({...v,_id:res._id,email:res?.email}))
            }
            auth && !res?._id && history.push('/login')
        })()
    },[setUser, history, auth])
}
export default useFetchUser