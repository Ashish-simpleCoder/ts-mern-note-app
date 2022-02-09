import { memo, ReactNode } from "react";
import styled, { css } from "styled-components";



const Wrapper = memo(({children, styles, page, mode}:{
    children:ReactNode, styles?:any, page?:string
    mode?:string
})=>{
    if(mode === 'edit_note'){
        return (
            <StyledEditModalWrapper className='edit_modal_wrapper'>
                {children}
            </StyledEditModalWrapper>
        )
    }
    if(page === 'note_output'){
        return(
            <StyledNoteOutWrapper style={styles}>
                {children}
            </StyledNoteOutWrapper>
        )
    }
    return (
        <StyledWrapper mode={mode}>
            {children}
        </StyledWrapper>
    )
})
export default Wrapper

const StyledWrapper = styled.section<{mode?:string}>`
    display:flex;

    ${(props)=>{
        switch(props.mode){
            case 'hero': return css`
                width:100%;
                align-items:center;
                justify-content:center;
                transform-origin:center;
                flex-direction:column;
                text-align:center;

                @media (min-width:700px){
                    width:50%;
                }
            `

            case "create_note_container": return css`
                padding:2rem;
                justify-content:center;
                margin-bottom:3rem;
                button{
                    width:100%;
                }

                @media (min-width:700px){
                    margin-bottom:0rem;
                        border-right:var(--border);
                        height:100%;
                        position:fixed;
                        width:var(--width);
                    }
            `

            case 'notes_container_wrapper': return css`
                flex-direction:column;
                @media (min-width:700px){
                    position:relative;
                    left:var(--width);
                    width:calc(100% - var(--width));
                }
            `

            case 'notes_container': return css`
                justify-content:center;
                gap:3rem;
                padding:2rem;
                flex-wrap:wrap;
                @media (min-width:700px){
                    justify-content:space-around;
                }
            `
            default: return css`
            `
        }
    }}

    img{
        display:flex;
        width:32rem;
        height:35rem;
        transform:rotate(-20deg) scale(0.8);
        transform-origin:center;
    }
`


const StyledNoteOutWrapper = styled.section`
    display:flex;
    justify-content:center;
    gap:2rem;
    flex-wrap:wrap;
    padding:2rem;


    @media (min-width:700px){
        position:relative;
        left:var(--width);
        width:calc(100% - var(--width));
        justify-content:space-around;
    }
`

const StyledEditModalWrapper = styled.section`
    width:100%;
    top:0;
    inset:0;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    background:var(--edit-modal-bg);
    display:none;
    border-radius:0.5rem;
`