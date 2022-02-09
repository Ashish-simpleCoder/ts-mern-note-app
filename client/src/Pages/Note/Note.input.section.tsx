import { useCallback, useContext } from "react";
import { ChangeEvent, createContext, FormEvent, memo, ReactNode, useEffect, useMemo, useState } from "react";
import Input from "../../Components/HigherComponents/Input";
import Button from "../../Components/PureComponents/Button";
import Form from "../../Components/PureComponents/Form";
import Textarea from "../../Components/PureComponents/Textarea";
import UserStates from "../../Context/UserContext";



export const NoteState = createContext({} as {
    title:string,content:string,
    handleNoteChange:(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void,
    handleNoteSubmit:(e: FormEvent<HTMLFormElement>) => Promise<void>
})

export const useNoteCtx= () => useContext(NoteState)


const NoteInput = memo(({children, mode}:{children?:ReactNode, mode:string})=>{
    const [note, setNote] = useState({title:'', content:''})
    const [note_error, setNoteError] = useState('')
    const {setUser} = UserStates()

    const handleNoteChange = useCallback((e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setNote(old=>({
            ...old,
            [e.target.name]:e.target.value
        }))
    }, [])

    const handleNoteSubmit = useMemo(()=>async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(mode === 'create_note'){
            const {default:createNote} = await import('../../modules/createNote')
            const data = await createNote(note)
            if(data?.error) setNoteError(data.error)
            if(data?.success){
                const {default:fetchNotes} = await import("../../modules/fetchNotes")
                const data = await fetchNotes('/api/v1/user/notes')
                if(data?.notes) {
                    setUser(old=>({...old, notes:data.notes}))
                    setNote({title:'', content:''})
                }
            }
        }
    },[note, mode, setUser])


    useEffect(()=>{
        const clr = note_error && setTimeout(()=>setNoteError(''),3000)
    //    return(()=>{clearInterval(clr)})
    },[note_error])



    return(
        // <NoteState.Provider value={{...note, handleNoteChange, handleNoteSubmit}}>
        <>
            <Form no_bg={true} handleSubmit={handleNoteSubmit}>
                <Input type='title' placeholder='note title...' name='title' value={note.title} handleChange={handleNoteChange} mode='note_title'/>
                {/* <Input type='content' placeholder='type your notes here...' name='content' value={note.content} handleChange={handleNoteChange}/> */}
                <Textarea name='content'  value={note.content} handleChange={handleNoteChange} placeholder="type your notes...."/>
                <Button text='create a new note' mode='create_note_btn'/>
            </Form>
            { note_error && <p>{note_error}</p> }
        </>
        // </NoteState.Provider>
    )
})
export default NoteInput
