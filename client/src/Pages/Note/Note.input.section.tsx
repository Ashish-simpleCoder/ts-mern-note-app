import { ChangeEvent, createContext, FormEvent, memo, ReactNode, useEffect, useMemo, useState } from "react";
import UserStates from "../../Context/UserContext";



export const NoteState = createContext({} as {
    title:string,content:string,
    handleNoteChange:(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void,
    handleNoteSubmit:(e: FormEvent<HTMLFormElement>) => Promise<void>
})


const NoteInput = memo(({children, mode}:{children:ReactNode, mode:string})=>{
    const [note, setNote] = useState({title:'', content:''})
    const [note_error, setNoteError] = useState('')
    const {setUser} = UserStates()

    const handleNoteChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setNote(old=>({
            ...old,
            [e.target.name]:e.target.value
        }))
    }

    const handleNoteSubmit = useMemo(()=>async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(mode === 'create_note'){
            const {default:createNote} = await import('../../modules/createNote')
            const data = await createNote(note)
            if(data?.error) setNoteError(data.error)
            if(data?.success){
                const {default:fetchNotes} = await import("../../modules/fetchNotes")
                const data = await fetchNotes('./api/v1/user/notes')
                if(data?.notes) {
                    setUser(old=>({...old, notes:data.notes}))
                    setNote({title:'', content:''})
                }
            }
        }
    },[note, mode, setUser])


    useEffect(()=>{
       note_error && setTimeout(()=>setNoteError(''),2000)
    },[note_error])



    return(
        <NoteState.Provider value={{...note, handleNoteChange, handleNoteSubmit}}>
            {children}
            { note_error && <p>{note_error}</p> }
        </NoteState.Provider>
    )
})
export default NoteInput