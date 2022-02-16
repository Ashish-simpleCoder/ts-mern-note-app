import { ChangeEvent, createContext, memo, MouseEvent, useCallback, useContext, useState } from "react";
import LeftRightWrapper from "../../Components/HigherComponents/LeftRightWrapper";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import { EditNoteType, NoteInterface } from "../../types";
import useFetchUser from "../Home/hooks/useFetchUser";
import useEnableEditModal from "../Login/useEnableEditModal";
import NoteInput from "./Note.input.section";
import NoteModal from "./Note.modal";
import NoteOutput from "./Note.output.section";
import useClickListener from "./useClickListener";
import useEventListener from "./useEvent";
import useHandleChange from "./CustomHooks/useHandleChange";
import useNoteOperations from "./CustomHooks/useNoteOperations";
import useEnableMenu from "./CustomHooks/useEnableMenu";
import ColorList from "../../Components/HigherComponents/ColorList";
import OverlayMenu from "../../Components/HigherComponents/OverlayMenu";
import ActionLink from "../../Components/PureComponents/ActionLink";
import Button from "../../Components/PureComponents/Button";
import Clr from "../../Components/Svg/Clr";


export const EditNoteCtx = createContext({} as EditNoteType)
export const useEditNoteCtx = () => useContext(EditNoteCtx)


const NotePage = memo(()=>{
    useFetchUser({auth:true})    //first checking if the user is loggedin or not
    const [edit_note, setEditNote] = useState<NoteInterface>({_id:'', title:'', content:'', bg:[]})
    useEnableEditModal({_id:edit_note._id})        //this is for enabling note modal for editing the note


    //custom hooks for saving notes with escape key
    const {handleUpdateNote} = useNoteOperations()
    useEventListener({eventType:'keyup', handler:()=>handleUpdateNote(edit_note, setEditNote), element:window})
    // saving the note when user clicks outside of the edit modal or on body(edit_modal_wrapper)
    useClickListener({eventType:'click', handler:()=>handleUpdateNote(edit_note, setEditNote), element:document.body})


    const {handleChange} = useHandleChange()
    const handleNoteChange = useCallback((e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        handleChange(e, setEditNote)
    }, [handleChange])


    const {menu, setMenuDetails, setMenu} = useEnableMenu({element: document.querySelector('.overlay') as HTMLDivElement, handler:()=>setMenu(v=>({...v,enable:false})), eventType:'click'})

    const {handleDeleteNote, loader} = useNoteOperations()

    return(
        <LeftRightWrapper styles={{height:'calc(100% - 5rem)', minHeight:'unset'}}>
            <Wrapper  mode='create_note_container'>
                <NoteInput />
            </Wrapper>

            <EditNoteCtx.Provider value={{note:edit_note, setEditNote, handleNoteChange, menu, setMenuDetails}}>
                <NoteOutput />
                <NoteModal mode="edit_note" >
                    {/* <OverlayMenu>
                        <ActionLink handleClick={(e:MouseEvent<HTMLDivElement , MouseEvent>)=>{setMenuDetails && setMenuDetails(e, note)}}><Clr/></ActionLink>
                        <Button  text='d' mode='delete_note_btn' handleClick={()=>handleDeleteNote(note._id)} loader={loader}/>
                    </OverlayMenu> */}
                    { menu.enable && <ColorList note={edit_note} styles={menu.position} /> }
                </NoteModal>
                { menu.enable && <ColorList note={edit_note} styles={menu.position} /> }
            </EditNoteCtx.Provider>
        </LeftRightWrapper>
    )
})
export default NotePage