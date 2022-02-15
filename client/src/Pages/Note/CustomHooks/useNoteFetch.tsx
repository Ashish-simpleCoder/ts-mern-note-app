import { useEffect, useState } from 'react'
import { useUserCtx } from '../../../Context/UserContext'

const useNoteFetch = () =>{
    const {setUser} = useUserCtx()
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        (async()=>{
            try {
                const {default:fetchNotes} = await import('../../../modules/fetchNotes')
                const data = await fetchNotes('/api/v1/user/notes')
                if(data?.notes) setUser(old=>({...old, notes:data.notes}))
            } catch (error) {
                console.log(error)
            }
            setLoader(false)
        })()
    },[setUser])
    return {loader}
}
export default useNoteFetch