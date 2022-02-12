import { useCallback} from "react";
import { ChangeEvent, FormEvent, memo, useEffect, useMemo, useState } from "react";
import Input from "../../Components/HigherComponents/Input";
import Button from "../../Components/PureComponents/Button";
import ErrorDisplayer from "../../Components/PureComponents/Error";
import Form from "../../Components/PureComponents/Form";
import Textarea from "../../Components/PureComponents/Textarea";
import UserStates from "../../Context/UserContext";




const NoteInput = memo(()=>{
    const [note, setNote] = useState({title:'', content:''})
    const [note_error, setNoteError] = useState({err:''})
    const {setUser} = UserStates()
    const [loader, setLoader] = useState(false)

    const handleNoteChange = useCallback((e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setNote(old=>({
            ...old,
            [e.target.name]:e.target.value
        }))
    }, [])

    const handleNoteSubmit = useMemo(()=>async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLoader(true)
        const {default:createNote} = await import('../../modules/createNote')
        const data = await createNote(note)
        if(data?.error) setNoteError({err:data.error})
        if(data?.success){
            const {default:fetchNotes} = await import("../../modules/fetchNotes")
            const data = await fetchNotes('/api/v1/user/notes')
            if(data?.notes) {
                setUser(old=>({...old, notes:data.notes}))
                setNote({title:'', content:''})
            }
        }
        setLoader(false)
    },[note, setUser])


    useEffect(()=>{
        const clr = note_error && setTimeout(()=>setNoteError({err:''}), 3000)
        return(()=>{
            clearInterval(clr)
        })
    },[note_error])



    return(
        <Form no_bg={true} handleSubmit={handleNoteSubmit}>
            <Input type='title' placeholder='note title...' name='title' value={note.title} handleChange={handleNoteChange} mode='note_title'/>

            <Textarea name='content'  value={note.content} handleChange={handleNoteChange} placeholder="type your notes...."   hover_bg={true}/>

            <Button text='create a new note' mode='create_note_btn' loader={loader}/>

            { note_error.err &&  <ErrorDisplayer error={note_error.err}/>}
        </Form>
    )
})
export default NoteInput
