import { CSSProperties, memo } from "react";
import styled, {css} from "styled-components";
import Loader from "./Loader";


type BtnProps = {
    text?:string,
    handleClick?: () => void
    // _id?:string
    mode?:
        | 'login_btn' | 'register_btn' | 'logout_btn'
        | 'create_note_btn' | 'delete_note_btn' | 'restore_btn'
        | 'hero_btn',
    loader?:boolean
    styles?:CSSProperties | any
}

const Button = memo(({
    text,
    handleClick,
    // _id,
    mode,
    loader,
    styles
}: BtnProps)=>{


    return (
        <StyledButton mode={mode && mode} onClick={(e)=>{
            e.stopPropagation();
            handleClick && handleClick()
        }}
            style={styles}
        >
            {  (mode === 'login_btn' || mode === 'register_btn' || mode==='logout_btn' || mode=== 'create_note_btn' || mode === 'delete_note_btn') && (loader ? <Loader/> : text)  }
            { mode === 'hero_btn' && text }
            { mode === undefined && text}
        </StyledButton>
    )
})
export default Button


//mode - login_btn, register_btn, create_note_btn, delete_note_btn, hero_btn



const StyledButton = styled.button<{mode:string|undefined}>`
    border-radius:0.5rem;
    font-size:clamp(1.5rem, 1.6rem, 1.6vw);
    height:3.5rem;
    /* color:var(--btn-clr); */
    transition:background 0.3s;
    position:relative;

    ${(props)=>{
        switch(props.mode){
            case "hero_btn": return css`
                padding:1rem 3rem;
                height:unset;
                display:flex;
                align-items:center;    //making text vertically center
                font-size:clamp(1.8rem, 2rem, 2vw);
                margin-top:5rem;
                background:var(--secondary-clr);
                color:var(--hero-btn-clr);
                box-shadow:0 0.3rem 0.5rem rgba(0, 0, 0, 0.6);
            `

            case 'delete_note_btn': return css`
                width:3rem;
                display:flex;
                align-items:center;
                justify-content:center;
                &::before{
                    content:'';
                    position:absolute;
                    background-image:url("./imgs/trash.png");
                    background-repeat:no-repeat;
                    width:100%;
                    height:100%;
                    display:flex;
                    z-index:1;
                }
                /* position:absolute;
                bottom:1rem;
                right:1rem;
                color:red; */
            `

            case 'create_note_btn': return css`
                background:var(--note-create-btn-bg);
                color:hsl(0, 0%, 90%);
            `
            case 'logout_btn': return css`
                height:unset;
            `
            case 'login_btn': return css`
                background:var(--note-create-btn-bg);
                color:white;
                width:100%;
            `
        }
    }}
`