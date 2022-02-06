import { memo, useContext } from "react";
import styled from "styled-components";
import Button from "../../Components/PureComponents/Button";
import H3 from "../../Components/PureComponents/H3";
import RandomSpan from "../../Components/PureComponents/RandomSpan";
import { ThemeCtx } from "../../Context/UserContext";
import { NoteInterface } from "../../types";
import { EditNoteCtx } from "./Note.page";



const Note = memo(({note}:{note:NoteInterface})=>{
    const {setEditNote} = useContext(EditNoteCtx)
    const {dark_theme} = useContext(ThemeCtx)

    return(
        <StyledNote id={note._id} style={{background:dark_theme ? note.bg[1] : note.bg[0]}}
            className="note"
            onClick={(e)=>{
                e.preventDefault()
                e.stopPropagation()
                setEditNote(note)
            }}
        >
            <H3 text={note.title}/>
            <p>{note.content}</p>
            <Button text="delete"  mode='delete_note_btn' _id={note._id}/>
            <RandomSpan cls='random_span'/>
        </StyledNote>
    )
})
export default Note

const StyledNote = styled.div`
    width:100%;
    max-width:40rem;
    height:20rem;
    border-radius:0.5rem;
    box-shadow:0 0.3rem 0.5rem rgba(0,0,0,0.1);
    position:relative;
    border:var(--note-border);
    overflow:hidden;

    &:hover{
        overflow-y:auto;
    }

    h3,p{
        font-size:clamp(1.5rem,1.7rem, 1.7vw);
        padding:0.5rem;
    }
    h3{
        border-bottom:var(--border);
        font-weight:500;
        text-align:center;
    }
    p{
        opacity:0.8;
        white-space:pre-line;
        word-break:break-all;
        /* flex:1; */
        height:100%;
    }

    span.random_span{
        position:absolute;
        top:0;left:0;
        width:5rem;
        height:5rem;
        border-radius:50%;
        transform:translate(-50%, -50%);
    }
`