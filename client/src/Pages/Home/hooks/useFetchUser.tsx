import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { useUserCtx } from "../../../Context/UserContext"

const useFetchUser = ({auth = false} : {auth?:boolean}) =>{
    const {setUser} = useUserCtx()
    const history = useHistory()

    useLayoutEffect(()=>{
        (async () =>{
            const res = await (await import("../../../utils/fetchUser")).default()
            res?._id && setUser(v=>({...v,_id:res._id,email:res?.email}))
            auth && !res?._id && history.push('/login')
        })()
    },[setUser])
}
export default useFetchUser