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

export type NoteProps = {
    note:NoteInterface,
    styles?: CSSProperties | any,
    mode?: | 'note.page' | 'recycle.page'
}

const Note = memo(({note, styles, mode = 'note.page'}:NoteProps)=>{
    const {setMenuDetails} = useEditNoteCtx()
    const {loader, handleDeleteNote} = useNoteOperations()


    return(
        <StyledNote id={note._id} style={{...styles }} className="note">

            <Wrapper styles={{padding:'0.5rem',borderBottom:'var(--border)'}} >
                <RandomSpan cls='random_span'/>
                <H3 text={note.title} styles={{width:'100%'}} cls='note-title'/>
            </Wrapper>

            <Wrapper styles={{overflow:'hidden',flex:'1', padding:'0.5rem'}}>
                <p className='note-content'>{note.content}</p>
            </Wrapper>

            {/* if want to reuse then define note and recycle pages behaviour  */}
            {
                mode === 'note.page'
                    &&
                <OverlayMenu>
                    <ActionLink handleClick={(e:MouseEvent<HTMLDivElement>)=>{setMenuDetails!(e, note)}}>
                        <Clr/>
                    </ActionLink>
                    <Button  mode='delete_note_btn' handleClick={()=>handleDeleteNote({_id:note._id})} loader={loader}/>
                </OverlayMenu>
            }
            {
                mode === 'recycle.page'
                    &&
                <OverlayMenu cls='bin-menu'>
                    <Button  mode='restore_btn' handleClick={()=>handleDeleteNote({_id : note._id, MOVE_TO_BIN:false, RESTORE:true})} loader={loader} text={'restore'}/>
                    <Button  mode='delete_note_btn' handleClick={()=>handleDeleteNote({_id:note._id, MOVE_TO_BIN:false})} loader={loader}/>
                </OverlayMenu>
            }

            {/* <OverlayMenu>
                <ActionLink handleClick={(e:MouseEvent<HTMLDivElement>)=>{setMenuDetails!(e, note)}}>
                    <Clr/>
                </ActionLink>
                <Button  mode='delete_note_btn' handleClick={()=>handleDeleteNote(note._id)} loader={loader}/>
            </OverlayMenu> */}
        </StyledNote>
    )
})
export default Note



const StyledNote = styled.div`
    width:100%;
    max-width:40rem;
    height:20rem;
    border-radius:1rem;
    box-shadow:0 0.3rem 0.5rem rgba(0,0,0,0.1);
    position:relative;
    border:var(--note-border);
    animation:animate_note calc(0.4s  * var(--note-order)) ease-in;
    display:flex;
    flex-direction:column;


    /* title and content */
    h3,p{
        font-size:clamp(1.6rem,1.7rem,1.7vw);
        /* padding:0.5rem; */
    }
    h3{
        /* border-bottom:var(--border); */
        font-weight:400;
        text-align:center;
        width:100%;
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
    }

    /* making the permanent delete and restore btn visible in bin page for every note */
    .bin-menu{
        display:flex;
    }
    @media (min-width:700px){
        div.overlay-menu {
            height:4rem;
            width:100%;
            display:flex;
            opacity:0;
            pointer-events:none;
        }
        &:hover{
            div.overlay-menu{
                opacity:1;
                pointer-events:all;
            }
        }
    }

    @keyframes animate_note{
        0%{
            transform: scale(0.8);
            animation-timing-function: ease;
            /* background:var(--secondary-clr); */
        }50%{
            animation-timing-function: ease-in;
            opacity: 1;
            transform: scale(1.1);
        }100%{
            /* animation-timing-function: ease-out;
            opacity: 1;
            transform: scale(1); */
        }
}
`