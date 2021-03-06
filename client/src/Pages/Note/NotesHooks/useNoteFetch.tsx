import { useEffect, useState } from 'react'
import { useUserCtx } from '../../../Context/UserContext'

const useNoteFetch = () =>{
    const {setUser} = useUserCtx()
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        (async()=>{
            try {
                const data = await (await import('../../../modules/fetchNotes')).default('/api/v1/user/notes')
                // if(data?.notes) setUser(old=>({...old, notes:data.notes}))
                if(data?.notes) setUser((old)=>{
                    old.notes = data.notes
                    return old
                })
            } catch (error) {
                console.log(error)
            }finally{
                setLoader(false)
            }
        })()
    },[setUser])
    return {loader}
}
export default useNoteFetch