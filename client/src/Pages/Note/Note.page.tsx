import { ChangeEvent, createContext,  memo, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../Components/HigherComponents/Input";
import LeftRightWrapper from "../../Components/HigherComponents/LeftRightWrapper";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import Button from "../../Components/PureComponents/Button";
import Form from "../../Components/PureComponents/Form";
import UserStates from "../../Context/UserContext";
import { EditNoteType, NoteInterface } from "../../types";
import fetchUser from "../../utils/fetchUser";
import NoteInput from "./Note.input.section";
import NoteModal from "./Note.modal";
import NoteOutput from "./Note.output.section";


export const EditNoteCtx = createContext<EditNoteType>({} as EditNoteType)



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


    const handleDeleteNote = useCallback(async(_id?:string) =>{
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


    const handleEditNoteChange = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>{
        setEditNote(old=>({
            ...old,
            [e.target.name]:e.target.value
        }))
    }



    return(
        <LeftRightWrapper>
            <Wrapper  mode='create_note_container'>
                <NoteInput  mode='create_note' >
                   <Form no_bg={true}>
                        <Input type='title' placeholder='note title...' name='title'/>
                        <Input type='content' placeholder='type your notes here...' name='content'/>
                        <Button text='create a new note' mode='create_note_btn'/>
                   </Form>
                </NoteInput>
            </Wrapper>


            <EditNoteCtx.Provider value={{note:edit_note, setEditNote, handleEditNoteChange, handleDeleteNote, handleUpdateNote}}>
                <NoteOutput />
                <NoteModal mode="edit_note" />
            </EditNoteCtx.Provider>
        </LeftRightWrapper>
    )
})
export default NotePage