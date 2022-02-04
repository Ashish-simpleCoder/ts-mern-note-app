import { memo } from "react";
import styled from "styled-components";
import Button from "../../Components/PureComponents/Button";
import H3 from "../../Components/PureComponents/H3";
import { NoteInterface } from "../../types";



const Note = memo(({note, handleDeleteNote}:{note:NoteInterface, handleDeleteNote?: (note_id: string) => Promise<void>})=>{

    return(
        <StyledNote id={note._id} style={{background:note.bg[0]}}>
            <H3 text={note.title}/>
            <p>{note.content}</p>
            <Button text="delete" type='note_delete_btn' handleClick={handleDeleteNote} _id={note._id}/>
        </StyledNote>
    )
})
export default Note

const StyledNote = styled.div`
    width:100%;
    max-width:40rem;
    height:20rem;
    border-radius:0.5rem;
    box-shadow:0 0.3rem 0.5rem rgba(0,0,0,0.3);
    position:relative;

    h3,p{
        font-size:clamp(1.5rem,1.7rem, 1.7vw);
        padding:0.5rem;
    }
    h3{
        border-bottom:var(--note-title-border);
        font-weight:500;
        text-align:center;
    }
    p{
        opacity:0.8;
    }
`