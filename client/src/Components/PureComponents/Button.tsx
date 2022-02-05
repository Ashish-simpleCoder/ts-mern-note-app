import { memo, useContext } from "react";
import styled, {css} from "styled-components";
import { EditNoteCtx } from "../../Pages/Note/Note.page";

const Button = memo(({
    text,
    handleClick,
    _id,
    mode
}:{
    text:string,
    handleClick?: (note_id?: string) => Promise<void> | void
    _id?:string
    mode?:string
})=>{
    const {handleDeleteNote} = useContext(EditNoteCtx)


    return (
        <StyledButton mode={mode && mode} onClick={(e)=>{
            e.stopPropagation();
            handleClick && handleClick()
            mode === 'delete_note_btn' && handleDeleteNote(_id)
        }}>{text}</StyledButton>
    )
})
export default Button



const StyledButton = styled.button<{mode:string|undefined}>`
    border-radius:0.3rem;
    font-size:clamp(1.6rem, 1.8rem, 1.8vw);
    padding:0.5rem 1rem;
    color:var(--btn-clr);
    transition:background 0.3s;

    ${(props)=>{
        switch(props.mode){
            case "hero_btn": return css`
                padding:1rem 3rem;
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
            `

            case 'create_note_btn': return css`
                background:var(--note-create-btn-bg);
                bottom:1rem;
                right:1rem;
            `
        }
    }}
`