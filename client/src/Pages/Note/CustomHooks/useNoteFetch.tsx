import { useEffect } from 'react'
import { useUserCtx } from '../../../Context/UserContext'

const useNoteFetch = () =>{
    const {setUser} = useUserCtx()

    useEffect(()=>{
        (async()=>{
            try {
                const {default:fetchNotes} = await import('../../../modules/fetchNotes')
                const data = await fetchNotes('/api/v1/user/notes')
                if(data?.notes) setUser(old=>({...old, notes:data.notes}))
            } catch (error) {
                console.log(error)
            }
        })()
    },[setUser])
}
export default useNoteFetch