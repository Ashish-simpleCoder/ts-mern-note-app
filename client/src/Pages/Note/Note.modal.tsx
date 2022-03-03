import {  memo, MouseEvent, ReactNode } from "react";
import styled from "styled-components";
import Input from "../../Components/HigherComponents/Form/Input";
import OverlayMenu from "../../Components/HigherComponents/OverlayMenu";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import ActionLink from "../../Components/PureComponents/ActionLink";
import Button from "../../Components/PureComponents/Button";
import Textarea from "../../Components/HigherComponents/Form/Textarea";
import Clr from "../../Components/Svg/Clr";
import useNoteOperations from "./NotesHooks/useNoteOperations";
import { useEditNoteCtx } from "./Note.page";
import { useThemeStates } from "../../Context/ThemeContext";

type NoteModalProps = {
    children?: ReactNode,
    mode?: | 'edit_note'
}

const NoteModal = memo(({ mode } : NoteModalProps)=>{
    const {note:edit_note, handleNoteChange} = useEditNoteCtx()
    const {dark_theme} = useThemeStates()
    const {loader, handleDeleteNote} = useNoteOperations()
    const {setNoteClrMenuPosition} = useEditNoteCtx()


    if(mode === 'edit_note'){
      return (
        <Wrapper mode={mode} cls='edit_modal_wrapper'>

            <StyledEditModal  id='modal' className='edit_modal' style={{background:dark_theme ? edit_note.bg[1] : edit_note.bg[0], border:'var(--border)'}} >

                <Input  name='title' value={edit_note.title} handleChange={handleNoteChange} mode="edit_note"/>
                <Textarea  name='content' value={edit_note.content} handleChange={handleNoteChange} styles={{background:'inherit'}}/>

                <OverlayMenu>
                    <ActionLink handleClick={(e:MouseEvent<HTMLDivElement>)=>{setNoteClrMenuPosition!(e, edit_note)}}><Clr/></ActionLink>
                    <Button  mode='delete_note_btn' handleClick={()=>handleDeleteNote({_id : edit_note._id})} loader={loader}/>
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
    background:var(--modal-bg);
    position:fixed;
    overflow:hidden;
    box-shadow:0 0.3rem 1rem rgba(0, 0, 0, 0.4);
    flex-direction:column;
    border:var(--border);
    transition:all 0.2s linear;

    input{
        border-bottom:var(--border);
    }

    textarea{
        flex:1;
        border:none;
        outline:none;
    }

    input,textarea{
        margin-top:0;
        &:focus{
            background:inherit;
        }
    }
    input{
        text-align:center;
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