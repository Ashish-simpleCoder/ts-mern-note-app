import { Dispatch, FormEvent, SetStateAction, useCallback, useEffect, useState } from 'react'
import { useUserCtx } from '../../../Context/UserContext'
import { NoteInterface } from '../../../types'

const useDeleteNote = () =>{
    const {setUser} = useUserCtx()
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState({err:''})

    useEffect(()=>{
        const clr = error && setTimeout(()=>setError({err:''}), 3000)
        return(()=>{
            clearInterval(clr)
        })
    },[error])

    const handleDeleteNote = async(_id:string, setEditNote?:Dispatch<SetStateAction<{title:'', content:'', _id:'', bg:[]}>>) =>{
        setLoader(true)     //displaying the loader while deleting the note
        const {default: deleteNote} = await import('../../../modules/deleteNote')
        const data = await deleteNote(`/api/v1/user/notes/${_id}`)

        if(data?.success){
            const {default: fetchNotes}  = await import('../../../modules/fetchNotes')
            const data = await fetchNotes('./api/v1/user/notes')
            if(data?.notes) setUser(old=>({...old, notes:data.notes}))
        }

        const modal = document.getElementById('modal') as HTMLDivElement
        const p = modal.parentElement as any
        document.body.classList.remove('edit_mode')
        setTimeout(()=>{
            p.style.display='none'
            modal.style.display='none'
            setEditNote && setEditNote({title:'', content:'', _id:'',bg:[]})
        },310)
    }


    const handleUpdateNote = async(note:NoteInterface)=>{
        const modal = document.getElementById('modal') as HTMLDivElement
        const p = modal.parentElement as any
        document.body.classList.remove('edit_mode')
        setTimeout(()=>{
            p.style.display='none'
            modal.style.display='none'
            // setEditNote({title:'', content:'', _id:'',bg:[]})
        },310)
        const {default:updateNotes} = await import('../../../modules/updateNote')
        const data = await updateNotes(`/api/v1/user/notes/${note._id}`,note)
        if(data?.success){
            const {default: fetchNotes}  = await import('../../../modules/fetchNotes')
            const data = await fetchNotes('./api/v1/user/notes')
            if(data?.notes) setUser(old=>({...old, notes:data.notes}))
        }
    }

    const handleNoteSubmit = async(e:FormEvent<HTMLFormElement>, note:{title:string, content:string}, setNote:Dispatch<SetStateAction<{title:string, content:string}>>)=>{
        e.preventDefault()
        setLoader(true)
        const {default:createNote} = await import('../../../modules/createNote')
        const data = await createNote(note)
        if(data?.error) setError({err:data.error})
        if(data?.success){
            const {default:fetchNotes} = await import("../../../modules/fetchNotes")
            const data = await fetchNotes('/api/v1/user/notes')
            if(data?.notes) {
                setUser(old=>({...old, notes:data.notes}))
                setNote({title:'', content:''})
            }
        }
        setLoader(false)
    }

    return {loader, setLoader, handleDeleteNote, handleUpdateNote, handleNoteSubmit, error}
}
export default useDeleteNote