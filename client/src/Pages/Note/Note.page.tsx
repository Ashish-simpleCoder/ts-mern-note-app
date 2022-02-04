import { ChangeEvent, createContext, Dispatch, memo, SetStateAction, useEffect, useLayoutEffect, useMemo, useState } from "react";
import Input from "../../Components/HigherComponents/Input";
import LeftRightWrapper from "../../Components/HigherComponents/LeftRightWrapper";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import Button from "../../Components/PureComponents/Button";
import Form from "../../Components/PureComponents/Form";
import H2 from "../../Components/PureComponents/H2";
import UserStates from "../../Context/UserContext";
import { NoteInterface } from "../../types";
import fetchUser from "../../utils/fetchUser";
import NoteInput from "./Note.input.section";
import NoteModal from "./Note.modal";
import NoteOutput from "./Note.output.section";


export const EditNoteCtx = createContext<{note:NoteInterface, setEditNote:Dispatch<SetStateAction<NoteInterface>>,handleEditNoteChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void}>({} as {note:NoteInterface, setEditNote:Dispatch<SetStateAction<NoteInterface>>,
    handleEditNoteChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
})


const NotePage = memo(()=>{
    const {setUser} = UserStates()
    const [edit_note, setEditNote] = useState<NoteInterface>({_id:'', title:'', content:'', bg:[]})

    useLayoutEffect(()=>{
        (async () =>{
            const res = await fetchUser()
            res?._id && setUser({_id:res._id,email:res?.email})
        })()
    },[setUser])

    // useEffect for fetching notes
    useEffect(()=>{
        (async()=>{
            const {default:fetchNotes} = await import('../../modules/fetchNotes')
            const data = await fetchNotes('./api/v1/user/notes')
            if(data?.notes) setUser(old=>({...old, notes:data.notes}))
        })()
    },[setUser])


    useEffect(()=>{
        if(edit_note._id){
            console.log(edit_note)
        }
    },[edit_note])

    const handleEditNoteChange = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>{
        setEditNote(old=>({
            ...old,
            [e.target.name]:e.target.value
        }))
    }



    return(
        <LeftRightWrapper>
            <Wrapper  page='note_create'>
                <NoteInput mode='create_note' >
                   <Form>
                        <Input type='note_title' placeholder='note title...'/>
                        <Input type='note_content' placeholder='type your notes here...'/>
                        <Button text='create a new note' bg='green'/>
                   </Form>
                </NoteInput>
            </Wrapper>


            <EditNoteCtx.Provider value={{note:edit_note, setEditNote, handleEditNoteChange}}>
                <Wrapper page='note_output'>
                        <NoteOutput />
                </Wrapper>
               {
                   edit_note._id &&  <NoteModal mode="edit_note">
                   <Input type='edit_note_title'/>
                   <Input type='edit_note_content'/>
               </NoteModal>
               }
            </EditNoteCtx.Provider>
        </LeftRightWrapper>
    )
})
export default NotePage