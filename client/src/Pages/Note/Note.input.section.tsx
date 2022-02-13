import { useCallback} from "react";
import { ChangeEvent, memo, useState } from "react";
import Input from "../../Components/HigherComponents/Input";
import Button from "../../Components/PureComponents/Button";
import ErrorDisplayer from "../../Components/PureComponents/Error";
import Form from "../../Components/PureComponents/Form";
import Textarea from "../../Components/PureComponents/Textarea";
import useDeleteNote from "./CustomHooks/useNoteOperations";
import useHandleChange from "./CustomHooks/useHandleChange";


const NoteInput = memo(()=>{
    const [note, setNote] = useState({title:'', content:''})
    const {loader, error, handleNoteSubmit} = useDeleteNote()
    const {handleChange} = useHandleChange()

    const handleNoteChange = useCallback((e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        handleChange(e, setNote)
    }, [])



    return(
        <Form no_bg={true} handleSubmit={(e)=>handleNoteSubmit(e, note, setNote)}>
            <Input type='title' placeholder='note title...' name='title' value={note.title} handleChange={handleNoteChange} mode='note_title'/>

            <Textarea name='content'  value={note.content} handleChange={handleNoteChange} placeholder="type your notes...."   hover_bg={true}/>

            <Button text='create a new note' mode='create_note_btn' loader={loader}/>

            { error.err &&  <ErrorDisplayer error={error.err}/>}
        </Form>
    )
})
export default NoteInput
