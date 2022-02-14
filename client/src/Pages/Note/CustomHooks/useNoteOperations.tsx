import { Dispatch, FormEvent, SetStateAction, useCallback, useEffect, useState } from 'react'
import { useUserCtx } from '../../../Context/UserContext'
import fetchNotes from '../../../modules/fetchNotes'
import { NoteInterface } from '../../../types'

const useNoteOperations = () => {
    const {setUser} = useUserCtx()
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState({err:''})
    const [refetch, setRefetch] = useState(false)

    // console.log('note operations')
    useEffect(()=>{
        console.log('note operations')
    }, [])

    useEffect(()=>{
        if(refetch){
            fetchNotes('/api/v1/user/notes').then(res=>{
                if(res?.notes){
                    setUser(old=>({...old, notes:res.notes}))
                }
            })
        }
    }, [refetch])

    // useEffect(()=>{
    //     if(error.err){
    //         setTimeout(()=>setError({err:''}), 3000)
    //     }
    //     // const clr = error.err && setTimeout(()=>setError({err:''}), 3000)
    //     // return(()=>{
    //     //     clearInterval(clr)
    //     // })
    // },[error])

    const handleDeleteNote = useCallback(async(_id:string, setEditNote?:Dispatch<SetStateAction<{title:'', content:'', _id:'', bg:[]}>>) =>{
        setLoader(true)     //displaying the loader while deleting the note
        const {default: deleteNote} = await import('../../../modules/deleteNote')
        const data = await deleteNote(`/api/v1/user/notes/${_id}`)
        if(data?.success){
            // setLoader(false)
            setRefetch(true)
        }

        const modal = document.getElementById('modal') as HTMLDivElement
        const p = modal.parentElement as any
        document.body.classList.remove('edit_mode')
        setTimeout(()=>{
            p.style.display='none'
            modal.style.display='none'
            setEditNote && setEditNote({title:'', content:'', _id:'',bg:[]})
        },310)
    }, [])


    const handleUpdateNote = useCallback(async(note:NoteInterface, setEditNote?:Dispatch<SetStateAction<NoteInterface>>)=>{
        const modal = document.getElementById('modal') as HTMLDivElement
        const p = modal.parentElement as any
        document.body.classList.remove('edit_mode')
        setTimeout(()=>{
            p.style.display='none'
            modal.style.display='none'
            setEditNote && setEditNote({title:'', content:'', _id:'',bg:[]})
        },310)
        const {default:updateNotes} = await import('../../../modules/updateNote')
        const data = await updateNotes(`/api/v1/user/notes/${note._id}`,note)
        data?.success && setRefetch(true)
    }, [])

    const handleNoteSubmit = useCallback(async(e:FormEvent<HTMLFormElement>, note:{title:string, content:string}, setNote:Dispatch<SetStateAction<{title:string, content:string}>>)=>{
        e.preventDefault()
        setLoader(true)
        const {default:createNote} = await import('../../../modules/createNote')
        const data = await createNote(note)
        if(data?.error) setError({err:data.error})
        if(data?.success){
            setRefetch(true)
            setNote({title:'', content:''})
        }
        setLoader(false)
    },[])

    return {loader, setLoader, handleDeleteNote, handleUpdateNote, handleNoteSubmit, error}
}
export default useNoteOperations