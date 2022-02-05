import { memo, ReactNode, useContext } from "react";
import styled from "styled-components";
import Input from "../../Components/HigherComponents/Input";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import Button from "../../Components/PureComponents/Button";
import { ThemeCtx } from "../../Context/UserContext";
import { EditNoteCtx } from "./Note.page";



const NoteModal = memo(({children, mode}:{
    children?:ReactNode
    mode:string
})=>{
    const {note ,handleDeleteNote, handleUpdateNote} = useContext(EditNoteCtx)
    const {dark_theme} = useContext(ThemeCtx)
    // console.log(note)

    if(mode === 'edit_note'){
      return (
        <Wrapper mode={mode}>
            <StyledEditModal  id='modal' className='edit_modal' style={{background:dark_theme ? note.bg[1] : note.bg[0]}}>
                <Input type='edit_note_title'/>
                <Input type='edit_note_content'/>
                <div className="btns">
                    <Button text='save'  handleClick={handleUpdateNote} />
                    <Button text='delete' handleClick={handleDeleteNote}  />
                </div>
                {children}
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
    transition:all 0.3s ease;
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
        font-size:clamp(1.5rem,1.6rem, 1.6vw);
        &:focus{
            background:inherit;
        }
    }
    input{
        /* border:var(--note-title-border) !important; */
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