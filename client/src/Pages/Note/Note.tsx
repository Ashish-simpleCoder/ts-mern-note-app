import { CSSProperties, memo, MouseEvent } from "react";
import styled from "styled-components";
import OverlayMenu from "../../Components/HigherComponents/OverlayMenu";
import Button from "../../Components/PureComponents/Button";
import H3 from "../../Components/PureComponents/H3";
import RandomSpan from "../../Components/PureComponents/RandomSpan";
import { NoteInterface } from "../../types";
import {  useEditNoteCtx } from "./Note.page";
import Clr from "../../Components/Svg/Clr";
import ActionLink from "../../Components/PureComponents/ActionLink";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import useNoteOperations from "./NotesHooks/useNoteOperations";
import If from "../../UtilComponents/If";

export type NoteProps = {
    note:NoteInterface,
    styles?: CSSProperties | any,
    mode?: | 'note.page' | 'recycle.page'
}

const Note = memo(({note, styles, mode = 'note.page'}:NoteProps)=>{
    const {setNoteClrMenuPosition} = useEditNoteCtx()
    const {loader, handleDeleteNote} = useNoteOperations()


    return(
        <StyledNote id={note._id} style={{...styles }} className="note">

            <Wrapper styles={{padding:'0.5rem 1rem',borderBottom:'var(--border)'}} >
                <RandomSpan cls='random_span'/>
                <H3 text={note.title} styles={{width:'100%'}} cls='note-title'/>
            </Wrapper>

            <Wrapper styles={{overflow:'hidden',flex:'1', padding:'0.5rem 1rem'}}>
                <p className='note-content'>{note.content}</p>
            </Wrapper>

            {/* if want to reuse then define note and recycle pages behaviour  */}
            <OverlayMenu cls={mode === 'recycle.page' ? 'bin-note-menu' : ''}>
                <If condition={mode === 'note.page'}>
                    <ActionLink handleClick={(e:MouseEvent<HTMLDivElement>)=>{setNoteClrMenuPosition!(e, note)}}>
                        <Clr/>
                    </ActionLink>
                    <Button  mode='delete_note_btn' handleClick={()=>handleDeleteNote({_id:note._id})} loader={loader}/>
                 </If>
                 <If condition={mode === 'recycle.page'}>
                    <Button  mode='restore_btn' handleClick={()=>handleDeleteNote({_id : note._id, MOVE_TO_BIN:false, RESTORE:true})} loader={loader} text={'restore'}/>
                    <Button  mode='delete_note_btn' handleClick={()=>handleDeleteNote({_id:note._id, MOVE_TO_BIN:false, RESTORE:false})} loader={loader}/>
                 </If>
            </OverlayMenu>
        </StyledNote>
    )
})
export default Note



const StyledNote = styled.div`
    position:relative;
    width:100%;
    max-width:40rem;
    height:20rem;

    box-shadow:0 0.2rem 0.2rem rgba(0,0,0,0.2);

    /* border-radius:1rem; */
    border-radius:0 0.5rem 0.5rem 0.5rem;
    border:var(--note-border);

    display:flex;
    flex-direction:column;
    animation:animate_note calc(0.25s  * var(--note-order)) ease-in;

    --note-menu-opacity:0;


    /* title and content */
    h3,p{
        font-size:clamp(1.6rem,1.7rem,1.7vw);
    }
    h3{
        text-align:center;
    }
    p{
        opacity:0.8;
        white-space:pre-line;
        word-break:break-all;
        width:100%;
    }

    /* random span at the left top of the note */
    span.random_span{
        position:absolute;
        top:0;left:0;
        width:5rem;
        height:5rem;
        border-radius:50%;
        transform:translate(-50%, -50%);
    }

    @media (max-width:700px){
        .overlay-menu{
            display:none;
        }
        /* for bin page */
        .bin-note-menu{
            display:flex;
        }
    }

    /* making the permanent delete and restore btn visible in bin page for every note */
    .bin-note-menu{
        --note-menu-opacity:1;
    }
    @media (min-width:700px){
        --note-menu-opacity:0;

        div.overlay-menu {
            height:4rem;
            width:100%;
            display:flex;
            opacity:var(--note-menu-opacity);
            pointer-events:none;
        }
        &:hover{
            --note-menu-opacity:1;
            div.overlay-menu{
                pointer-events:all;
            }
        }
    }

    @keyframes animate_note{
        0%{
            transform: scale(0.8);
            animation-timing-function: ease;
        }50%{
            animation-timing-function: ease-in;
            opacity: 1;
            transform: scale(1.1);
        }100%{  }
}
`