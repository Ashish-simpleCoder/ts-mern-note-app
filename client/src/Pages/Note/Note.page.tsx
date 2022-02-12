import { ChangeEvent, createContext,  Dispatch,  memo, SetStateAction, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import LeftRightWrapper from "../../Components/HigherComponents/LeftRightWrapper";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import UserStates from "../../Context/UserContext";
import { EditNoteType, NoteInterface } from "../../types";
import fetchUser from "../../utils/fetchUser";
import NoteInput from "./Note.input.section";
import NoteModal from "./Note.modal";
import NoteOutput from "./Note.output.section";
import useClickListener from "./useClickListener";
import useEventListener from "./useEvent";


export const EditNoteCtx = createContext({} as EditNoteType)



const NotePage = memo(()=>{
    const {setUser} = UserStates()
    const [edit_note, setEditNote] = useState<NoteInterface>({_id:'', title:'', content:'', bg:[]})
    const history = useHistory()


    // layout effect for fetching logged user
    useLayoutEffect(()=>{
        (async () =>{
            const res = await fetchUser()
            res?._id ? setUser({_id:res._id,email:res?.email})  : history.push('/login')
        })()
    },[setUser, history])


    // useEffect for fetching notes
    useEffect(()=>{
        (async()=>{
            const {default:fetchNotes} = await import('../../modules/fetchNotes')
            const data = await fetchNotes('/api/v1/user/notes')
            if(data?.notes) setUser(old=>({...old, notes:data.notes}))
        })()
    },[setUser])


    // function for deleting note
    const handleDeleteNote = useCallback(async(_id?:string, setLoader?:Dispatch<SetStateAction<boolean>>) =>{
        setLoader && setLoader(true)     //displaying the loader while deleting the note
        const {default: deleteNote} = await import('../../modules/deleteNote')
        const data = await deleteNote(`/api/v1/user/notes/${edit_note._id ? edit_note._id : _id}`)

        if(data?.success){
            const {default: fetchNotes}  = await import('../../modules/fetchNotes')
            const data = await fetchNotes('./api/v1/user/notes')
            if(data?.notes) setUser(old=>({...old, notes:data.notes}))
        }

        const modal = document.getElementById('modal') as HTMLDivElement
        const p = modal.parentElement as any
        document.body.classList.remove('edit_mode')
        setTimeout(()=>{
           p.style.display='none'
            modal.style.display='none'
            setEditNote({title:'', content:'', _id:'',bg:[]})
        },310)
    },[edit_note, setUser])


    // function for updating note
    const handleUpdateNote = useCallback(async()=>{
        const modal = document.getElementById('modal') as HTMLDivElement
        const p = modal.parentElement as any
        document.body.classList.remove('edit_mode')
        setTimeout(()=>{
            p.style.display='none'
            modal.style.display='none'
            setEditNote({title:'', content:'', _id:'',bg:[]})
        },310)
        const {default:updateNotes} = await import('../../modules/updateNote')
        const data = await updateNotes(`/api/v1/user/notes/${edit_note._id}`,edit_note)
        if(data?.success){
            const {default: fetchNotes}  = await import('../../modules/fetchNotes')
            const data = await fetchNotes('./api/v1/user/notes')
            if(data?.notes) setUser(old=>({...old, notes:data.notes}))
        }
    },[edit_note, setUser])


    // useeffect for enabling the edit modal for note
    useEffect(()=>{
        const modal = document.getElementById('modal') as HTMLDivElement
        const p = modal.parentElement as any
        if(edit_note._id){
            // note_ref.current = edit_note
            const element = document.getElementById(edit_note._id) as HTMLDivElement
            const {top, left, width, height} = element.getBoundingClientRect()
            modal.style.top = top+'px'
            modal.style.left = left+'px'
            modal.style.width = width+'px'
            modal.style.height = height+'px'
            p.style.display='flex'
            modal.style.display='flex'
            setTimeout(()=> document.body.classList.add('edit_mode'),20)
        }
    },[edit_note, setUser])


    //custom hooks for saving notes with escape key
    useEventListener({eventType:'keyup', handler:handleUpdateNote, element:window})

    // saving the note when user clicks outside of the edit modal or on body(edit_modal_wrapper)
    useClickListener({eventType:'click', handler:handleUpdateNote, element:document.body})



    const handleEditNoteChange = useCallback((e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>{
        setEditNote(old=>({
            ...old,
            [e.target.name]:e.target.value
        }))
    }, [setEditNote])



    return(
        <LeftRightWrapper>
            <Wrapper  mode='create_note_container'>
                <NoteInput  mode='create_note' />
            </Wrapper>

            <EditNoteCtx.Provider value={{note:edit_note, setEditNote, handleEditNoteChange, handleDeleteNote, handleUpdateNote}}>
                <NoteOutput />
                <NoteModal mode="edit_note" />
            </EditNoteCtx.Provider>
        </LeftRightWrapper>
    )
})
export default NotePage