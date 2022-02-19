import {  memo, MouseEvent, ReactNode, useContext } from "react";
import styled from "styled-components";
import Input from "../../Components/HigherComponents/Input";
import OverlayMenu from "../../Components/HigherComponents/OverlayMenu";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import ActionLink from "../../Components/PureComponents/ActionLink";
import Button from "../../Components/PureComponents/Button";
import Textarea from "../../Components/PureComponents/Textarea";
import Clr from "../../Components/Svg/Clr";
import { ThemeCtx } from "../../Context/UserContext";
import useNoteOperations from "./NotesHooks/useNoteOperations";
import { useEditNoteCtx } from "./Note.page";



const NoteModal = memo(({ mode }:{
    children?:ReactNode
    mode:string
})=>{
    const {note:edit_note, handleNoteChange} = useEditNoteCtx()
    const {dark_theme} = useContext(ThemeCtx)
    const {loader, handleDeleteNote} = useNoteOperations()
    const {setMenuDetails} = useEditNoteCtx()


    if(mode === 'edit_note'){
      return (
        <Wrapper mode={mode}>

            <StyledEditModal  id='modal' className='edit_modal' style={{background:dark_theme ? edit_note.bg[1] : edit_note.bg[0]}} >
                <Input  name='title' value={edit_note.title} handleChange={handleNoteChange} mode="edit_note"/>
                <Textarea  name='content' value={edit_note.content} handleChange={handleNoteChange} styles={{background:'inherit'}}/>
                <OverlayMenu>
                        <ActionLink handleClick={(e:MouseEvent<HTMLDivElement , MouseEvent>)=>{setMenuDetails && setMenuDetails(e, edit_note)}}><Clr/></ActionLink>
                        <Button   mode='delete_note_btn' handleClick={()=>handleDeleteNote(edit_note._id)} loader={loader}/>
                    </OverlayMenu>
            </StyledEditModal>

        </Wrapper>
      )
    }
    return(
        <></>
    )
})
export default NoteModal

const StyledEditModal = styled.div`
    height:40rem;
    width:100%;
    max-width:60%;
    border-radius:0.5rem;
    transition:all 0.3s linear;
    background:var(--modal-bg);
    position:fixed;
    overflow:hidden;
    box-shadow:0 0.3rem 1rem rgba(0, 0, 0, 0.4);
    flex-direction:column;

    textarea{
        flex:1;
    }

    input,textarea{
        margin-top:0;
        border:none !important;
        outline:none;
        border-radius:0;
        font-size:clamp(1.6rem,1.7rem, 1.7vw);
        /* background:white; */
        &:focus{
            background:inherit;
        }
    }
    input{
        text-align:center ;
        font-weight:500;
    }

    .btns{
        margin-top:auto;
        display:flex;
        justify-content:space-between;
        flex-direction:row;
        padding:2rem;
    }
    .save_btn{
        background:var(--save-btn-bg);
    }
    .delete_btn{
        background:var(--delete-btn-bg);
    }
`