import { memo, useContext } from "react";
import styled, {css} from "styled-components";
import { EditNoteCtx } from "../../Pages/Note/Note.page";
import Loader from "./Loader";



const Button = memo(({
    text,
    handleClick,
    _id,
    mode,
    loader
}:{
    text:string,
    handleClick?: (note_id?: string) => Promise<void> | void
    _id?:string
    mode?:string,
    loader?:boolean
})=>{
    const {handleDeleteNote} = useContext(EditNoteCtx)


    return (
        <StyledButton mode={mode && mode} onClick={(e)=>{
            e.stopPropagation();
            handleClick && handleClick()
            mode === 'delete_note_btn' && handleDeleteNote(_id)
        }}>
            {  (mode === 'login_btn' || mode === 'register_btn' || mode==='logout_btn') && (loader ? <Loader/> : text)  }
            { mode === 'hero_btn' && text }
        </StyledButton>
    )
})
export default Button


//mode - login_btn, register_btn, create_note_btn, delete_note_btn, hero_btn



const StyledButton = styled.button<{mode:string|undefined}>`
    border-radius:0.3rem;
    font-size:clamp(1.5rem, 1.6rem, 1.6vw);
    /* padding:0.5rem 1rem; */
    height:4rem;
    color:var(--btn-clr);
    transition:background 0.3s;
    position:relative;

    ${(props)=>{
        switch(props.mode){
            case "hero_btn": return css`
                padding:1rem 3rem;
                display:flex;
                align-items:center;    //making text vertically center
                font-size:clamp(1.8rem, 2rem, 2vw);
                margin-top:4rem;
                background:var(--secondary-clr);
                color:var(--hero-btn-clr);
                box-shadow:0 0.3rem 0.5rem rgba(0, 0, 0, 0.6);
            `

            case 'delete_note_btn': return css`
                position:absolute;
                bottom:1rem;
                right:1rem;
                color:red;
            `

            case 'create_note_btn': return css`
                background:var(--note-create-btn-bg);
                bottom:1rem;
                right:1rem;
                color:white;
                `
            case 'login_btn': return css`
                background:var(--note-create-btn-bg);
                color:white;
                width:100%;
            `
        }
    }}
`