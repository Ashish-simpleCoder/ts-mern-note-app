import { CSSProperties, memo } from "react";
import styled, {css} from "styled-components";
import Loader from "./Loader";


type BtnProps = {
    text?:string,
    handleClick?: () => void
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
    mode,
    loader,
    styles
}: BtnProps)=>{


    return (
        <StyledButton mode={mode && mode} onClick={(e)=>{
            e.stopPropagation()
            handleClick && handleClick()
        }}
            style={styles}
        >
            {  (mode === 'login_btn' || mode === 'register_btn' || mode==='logout_btn' || mode=== 'create_note_btn' || mode === 'delete_note_btn' || mode === 'restore_btn') && (loader ? <Loader/> : text)  }
            { mode === 'hero_btn' && text }
            { mode === undefined && text }
        </StyledButton>
    )
})
export default Button


//mode - login_btn, register_btn, create_note_btn, delete_note_btn, hero_btn



const StyledButton = styled.button<{mode:string|undefined}>`
    border-radius:0.5rem;
    font-size:clamp(1.5rem, 1.6rem, 1.6vw);
    height:3.5rem;
    transition:background 0.3s;
    position:relative;

    &:focus{
        /* background:var(--input-hover-bg) !important; */
        outline:1px solid var(--secondary-clr);
    }

    ${(props)=>{
        switch(props.mode){
            case "hero_btn": return css`
                padding:1rem 3rem;
                height:unset;
                display:flex;
                align-items:center;    //making text vertically center
                margin-top:5rem;
                background:var(--secondary-clr);
                color:var(--hero-btn-clr);
                font-weight:600 !important;
                box-shadow:0 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
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
            `

            case 'create_note_btn': return css`
                background:var(--green);
                color:hsl(0, 0%, 90%);
                box-shadow:0 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
            `
            case 'logout_btn': return css`
                height:unset;
            `
            case 'login_btn': return css`
                background:var(--green);
                color:hsl(0, 0%, 90%);
                width:100%;
            `
        }
    }}
`