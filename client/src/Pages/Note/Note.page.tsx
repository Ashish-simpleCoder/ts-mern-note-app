import { ChangeEvent, createContext, memo, useCallback, useContext, useState, useMemo } from "react"
import LeftRightWrapper from "../../Components/HigherComponents/LeftRightWrapper"
import Wrapper from "../../Components/HigherComponents/Wrapper"
import { EditNoteType, NoteInterface } from "../../types"
import useFetchUser from "../../Hooks/useFetchUser"
import useEnableEditModal from "../../Hooks/useEnableEditModal"
import NoteInput from "./Note.input.section"
import NoteModal from "./Note.modal"
import NoteOutput from "./Note.output.section"
import useClickListener from "./useClickListener"
import useEventListener from "./useEvent"
import useHandleChange from "../../Hooks/useHandleChange"
import useNoteOperations from "./NotesHooks/useNoteOperations"
import useEnableMenu from "./NotesHooks/useEnableNoteMenu"
import ColorList from "../../Components/HigherComponents/ColorList"
import If from "../../UtilComponents/If"

const EditNoteCtx = createContext({} as EditNoteType)
export const useEditNoteCtx = () => useContext(EditNoteCtx)


const NotePage = memo(()=>{
    useFetchUser({auth:true})    //first checking if the user is loggedin or not
    const [edit_note, setEditNote] = useState<NoteInterface>({_id:'', title:'', content:'', bg:[]})
    useEnableEditModal({_id:edit_note._id})        //this is for enabling note modal for editing the note


    //custom hooks for saving notes with escape key
    const {handleUpdateNote} = useNoteOperations()
    useEventListener({eventType:'keyup', handler:()=>{
        (edit_note._id) && handleUpdateNote(edit_note, setEditNote)
    }, element:window})

    // saving the note when user clicks outside of the edit modal or on body(edit_modal_wrapper)
    useClickListener({eventType:'click', handler:()=>handleUpdateNote(edit_note, setEditNote), element:document.body})


    const {handleChange} = useHandleChange()
    const handleNoteChange = useCallback((e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        handleChange(e, setEditNote)
    }, [handleChange])


    const {menu, setNoteClrMenuPosition, setNoteClrMenu} = useEnableMenu({element: document.querySelector('.overlay') as HTMLDivElement, handler:()=>setNoteClrMenu(v=>({...v,enable:false})), eventType:'click'})


    const EditNoteCtxProps = useMemo(() =>( {
        note:edit_note, setEditNote, handleNoteChange, menu, setNoteClrMenuPosition, setNoteClrMenu
    }), [edit_note, setEditNote, setNoteClrMenuPosition, menu, setNoteClrMenu, handleNoteChange])


    return(
        <LeftRightWrapper styles={{height:'calc(100% - 5rem)', minHeight:'unset'}}>
            <Wrapper  mode='create_note_container'>
                <NoteInput />
            </Wrapper>

            <EditNoteCtx.Provider value={EditNoteCtxProps}>
                <NoteOutput />
                <NoteModal mode="edit_note">
                    <If condition={menu.enable}>
                        <ColorList styles={menu.position} />
                    </If>
                </NoteModal>
                <If condition={menu.enable}>
                    <ColorList styles={menu.position} />
                </If>
            </EditNoteCtx.Provider>
        </LeftRightWrapper>
    )
})
export default NotePage