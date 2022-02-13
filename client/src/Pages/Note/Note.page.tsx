import { ChangeEvent, createContext,  Dispatch,  memo, SetStateAction, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import LeftRightWrapper from "../../Components/HigherComponents/LeftRightWrapper";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import UserStates from "../../Context/UserContext";
import { EditNoteType, NoteInterface } from "../../types";
import fetchUser from "../../utils/fetchUser";
import useFetchUser from "../Home/hooks/useFetchUser";
import useEnableEditModal from "../Login/useEnableEditModal";
import useDeleteNote from "./CustomHooks/useDeleteNote";
import useNoteFetch from "./CustomHooks/useNoteFetch";
import NoteInput from "./Note.input.section";
import NoteModal from "./Note.modal";
import NoteOutput from "./Note.output.section";
import useClickListener from "./useClickListener";
import useEventListener from "./useEvent";


export const EditNoteCtx = createContext({} as EditNoteType)
export const useEditNoteCtx = () => useContext(EditNoteCtx)


const NotePage = memo(()=>{
    useFetchUser({auth:true})    //first checking if the user is loggedin or not
    useNoteFetch()     //fetching the notes of logged user

    const {setUser} = UserStates()
    const [edit_note, setEditNote] = useState<NoteInterface>({_id:'', title:'', content:'', bg:[]})
    // const editNoteRef = useRef(edit_note)


    // useeffect for enabling the edit modal for note
    // useEffect(()=>{
    //     const modal = document.getElementById('modal') as HTMLDivElement
    //     const p = modal.parentElement as any
    //     if(edit_note._id){
    //         const element = document.getElementById(edit_note._id) as HTMLDivElement
    //         const {top, left, width, height} = element.getBoundingClientRect()
    //         modal.style.top = top+'px'
    //         modal.style.left = left+'px'
    //         modal.style.width = width+'px'
    //         modal.style.height = height+'px'
    //         p.style.display='flex'
    //         modal.style.display='flex'
    //         setTimeout(()=> document.body.classList.add('edit_mode'),20)
    //     }
    // },[edit_note, setUser])

    useEnableEditModal({_id:edit_note._id})


    //custom hooks for saving notes with escape key
    const {handleUpdateNote} = useDeleteNote()
    useEventListener({eventType:'keyup', handler:()=>handleUpdateNote(edit_note), element:window})
    // saving the note when user clicks outside of the edit modal or on body(edit_modal_wrapper)
    useClickListener({eventType:'click', handler:()=>handleUpdateNote(edit_note), element:document.body})


    const handleEditNoteChange = useCallback((e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>{
        setEditNote(old=>({
            ...old,
            [e.target.name]:e.target.value
        }))
    }, [])



    return(
        <LeftRightWrapper>
            <Wrapper  mode='create_note_container'>
                <NoteInput />
            </Wrapper>

            <EditNoteCtx.Provider value={{note:edit_note, setEditNote, handleEditNoteChange}}>
                <NoteOutput />
                <NoteModal mode="edit_note" />
            </EditNoteCtx.Provider>
        </LeftRightWrapper>
    )
})
export default NotePage