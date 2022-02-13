import { ChangeEvent, memo, ReactNode, useCallback, useContext } from "react";
import styled from "styled-components";
import Input from "../../Components/HigherComponents/Input";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import Button from "../../Components/PureComponents/Button";
import Textarea from "../../Components/PureComponents/Textarea";
import { ThemeCtx } from "../../Context/UserContext";
import useDeleteNote from "./CustomHooks/useDeleteNote";
import { useEditNoteCtx } from "./Note.page";



const NoteModal = memo(({children, mode}:{
    children?:ReactNode
    mode:string
})=>{
    // const {note:edit_note ,handleDeleteNote, handleUpdateNote, setEditNote} = useContext(EditNoteCtx)
    const {note:edit_note , setEditNote} = useEditNoteCtx()
    const {dark_theme} = useContext(ThemeCtx)
    const {loader, handleDeleteNote, handleUpdateNote} = useDeleteNote()

    const handleChange = useCallback((e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setEditNote(v=>({
            ...v,
            [e.target.name]:e.target.value
        }))
    },[setEditNote])


    if(mode === 'edit_note'){
      return (
        <Wrapper mode={mode}>
            <StyledEditModal  id='modal' className='edit_modal' style={{background:dark_theme ? edit_note.bg[1] : edit_note.bg[0]}} >
                <Input   name='title' value={edit_note.title} handleChange={handleChange} mode="edit_note"/>
                <Textarea   name='content' value={edit_note.content} handleChange={handleChange}/>
                <div className="btns">
                    <Button text='save' loader={loader}  handleClick={()=>handleUpdateNote(edit_note)} />
                    <Button text='delete' loader={loader} handleClick={()=>handleDeleteNote(edit_note._id)}  />
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