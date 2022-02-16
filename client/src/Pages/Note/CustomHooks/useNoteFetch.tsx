import { useEffect, useState } from 'react'
import { useUserCtx } from '../../../Context/UserContext'
import fetchNotes from '../../../modules/fetchNotes'

const useNoteFetch = () =>{
    const {setUser} = useUserCtx()
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        fetchNotes('/api/v1/user/notes').then((data)=>{
            if(data?.notes) setUser(old=>({...old, notes:data.notes}))
        }).catch(err=>console.log(err)).finally(()=>setLoader(false))
    },[setUser])
    return {loader}
}
export default useNoteFetch