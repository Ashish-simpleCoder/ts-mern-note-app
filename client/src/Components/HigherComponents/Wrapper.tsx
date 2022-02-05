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
    if(page === 'note_create'){
        return(
            <StyledNoteInputWrapper>
                {children}
            </StyledNoteInputWrapper>
        )
    }
    return (
        <StyledWrapper style={styles} mode={mode}>
            {children}
        </StyledWrapper>
    )
})
export default Wrapper

const StyledWrapper = styled.section<{mode?:string}>`
    display:flex;
    /* width:100%; */
    padding:2rem;

    ${(props)=>{
        switch(props.mode){
            case "create_note_container": return css`
            `

            case 'output_note_container': return css`
            `

            default: return css`
            `
        }
    }}
    width:100%;
    align-items:center;
    justify-content:center;
    /* border:1px solid; */
    transform-origin:center;
    flex-direction:column;

    img{
        display:flex;
        width:32rem;
        height:35rem;
        transform:rotate(-20deg) scale(0.8);
        transform-origin:center;
    }

    @media (min-width:800px){
        width:50%;
    }
`

const StyledNoteInputWrapper = styled.section`
   padding:2rem;
   flex-direction:column;
   position:unset;
   width:100%;

   @media (min-width:700px){
        border-right:var(--border);
        height:100%;
        position:fixed;
        width:var(--width);
        display:flex;
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