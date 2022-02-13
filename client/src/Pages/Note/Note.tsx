import { memo, useContext } from "react";
import styled from "styled-components";
import OverlayMenu from "../../Components/HigherComponents/OverlayMenu";
import Button from "../../Components/PureComponents/Button";
import H3 from "../../Components/PureComponents/H3";
import RandomSpan from "../../Components/PureComponents/RandomSpan";
import { ThemeCtx } from "../../Context/UserContext";
import { NoteInterface } from "../../types";
import { EditNoteCtx } from "./Note.page";
import Clr from "../../Components/Svg/Clr";
import ActionLink from "../../Components/PureComponents/ActionLink";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import ColorList from "../../Components/HigherComponents/ColorList";
import useDeleteNote from "./CustomHooks/useNoteOperations";


const Note = memo(({note, search}:{note:NoteInterface, search:string})=>{
    const {setEditNote} = useContext(EditNoteCtx)
    const {dark_theme} = useContext(ThemeCtx)
    const {loader, handleDeleteNote} = useDeleteNote()

    const search_key = search?.trim().toLowerCase()
    const matched = note.title.trim().toLowerCase().includes(search_key)  || note.content.trim().toLowerCase().includes(search_key)

    const handleClick = () => setEditNote(note)


    return(
        <StyledNote id={note._id} style={{background:dark_theme ? note.bg[1] : note.bg[0], display:!matched ? 'none' : 'block'}}
            className="note"
        >
            <Wrapper >
                <RandomSpan cls='random_span'/>
                <H3 text={note.title} styles={{width:'100%'}} handleClick={handleClick}/>
            </Wrapper>

            <Wrapper styles={{overflow:'hidden',height:'60%'}}>
                <p onClick={handleClick}>{note.content}</p>
            </Wrapper>

            {/* <Button text="D"  mode='delete_note_btn' _id={note._id}/> */}
            <Button  text='d' mode='delete_note_btn' handleClick={()=>handleDeleteNote(note._id)} loader={loader}/>
            {/* <OverlayMenu> */}
                {/* <ActionLink tooltip_text="change color of note"> */}
                    {/* <a href="#/notes"><Clr/></a> */}
                    {/* <summary><Clr/></summary> */}
                    {/* <details> */}
                    {/* <ColorList note={note} /> */}
                    {/* </details> */}
                {/* </ActionLink> */}
                {/* <ActionLink><Clr/></ActionLink>
                <ActionLink><Clr/></ActionLink> */}
            {/* </OverlayMenu> */}
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

    h3,p{
        font-size:clamp(1.6rem,1.7rem,1.7vw);
        padding:0.5rem;
    }
    h3{
        border-bottom:var(--border);
        font-weight:400;
        text-align:center;
        width:100%;
    }
    p{
        opacity:0.8;
        white-space:pre-line;
        word-break:break-all;
        /* flex:1; */
        /* height:100%; */
        /* border:1px solid; */
    }

    span.random_span{
        position:absolute;
        top:0;left:0;
        width:5rem;
        height:5rem;
        border-radius:50%;
        transform:translate(-50%, -50%);
    }

    div.overlay_menu{
        height:4rem;
        width:100%;
        display:flex;
        opacity:0;
        pointer-events:none;
    }
    &:hover, &:focus, &:focus-within{
        div.overlay_menu{
            opacity:1;
            pointer-events:all;
        }
    }
`