import { ChangeEvent, createContext, memo, useCallback, useContext, useState } from "react";
import LeftRightWrapper from "../../Components/HigherComponents/LeftRightWrapper";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import { EditNoteType, NoteInterface } from "../../types";
import useFetchUser from "../Home/hooks/useFetchUser";
import useEnableEditModal from "../Login/useEnableEditModal";
import useNoteFetch from "./CustomHooks/useNoteFetch";
import NoteInput from "./Note.input.section";
import NoteModal from "./Note.modal";
import NoteOutput from "./Note.output.section";
import useClickListener from "./useClickListener";
import useEventListener from "./useEvent";
import useHandleChange from "./CustomHooks/useHandleChange";
import useNoteOperations from "./CustomHooks/useNoteOperations";

export const EditNoteCtx = createContext({} as EditNoteType)
export const useEditNoteCtx = () => useContext(EditNoteCtx)


const NotePage = memo(()=>{
    useFetchUser({auth:true})    //first checking if the user is loggedin or not
    useNoteFetch()     //fetching the notes of logged user

    const [edit_note, setEditNote] = useState<NoteInterface>({_id:'', title:'', content:'', bg:[]})
    useEnableEditModal({_id:edit_note._id})


    //custom hooks for saving notes with escape key
    const {handleUpdateNote} = useNoteOperations()
    useEventListener({eventType:'keyup', handler:()=>handleUpdateNote(edit_note), element:window})
    // saving the note when user clicks outside of the edit modal or on body(edit_modal_wrapper)
    useClickListener({eventType:'click', handler:()=>handleUpdateNote(edit_note), element:document.body})


    const {handleChange} = useHandleChange()
    const handleNoteChange = useCallback((e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        handleChange(e, setEditNote)
    }, [])


    return(
        <LeftRightWrapper>
            <Wrapper  mode='create_note_container'>
                <NoteInput />
            </Wrapper>

            <EditNoteCtx.Provider value={{note:edit_note, setEditNote, handleNoteChange}}>
                <NoteOutput />
                <NoteModal mode="edit_note" />
            </EditNoteCtx.Provider>
        </LeftRightWrapper>
    )
})
export default NotePage