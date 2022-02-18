import { memo } from "react";
import Input from "../../Components/HigherComponents/Input";
import Button from "../../Components/PureComponents/Button";
import ErrorDisplayer from "../../Components/PureComponents/Error";
import Form from "../../Components/PureComponents/Form";
import Textarea from "../../Components/PureComponents/Textarea";
import useNoteOperations from "./CustomHooks/useNoteOperations";


const NoteInput = memo(()=>{
    const {loader, error, handleNoteSubmit, handleNoteChange, note} = useNoteOperations()


    return(
        <Form no_bg={true} handleSubmit={(e)=>handleNoteSubmit(e)} mode='create_note'>
            <Input type='title' placeholder='note title...' name='title' value={note.title} handleChange={handleNoteChange} mode='note_title'/>

            <Textarea name='content'  value={note.content} handleChange={handleNoteChange} placeholder="type your notes...."   hover_bg={true}/>

            <Button text='create a new note' mode='create_note_btn' loader={loader}/>

            { error.err &&  <ErrorDisplayer error={error.err}/>}
        </Form>
    )
})
export default NoteInput
