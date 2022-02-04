import { memo, ReactNode } from "react";
import styled from "styled-components";

const Wrapper = memo(({children, styles, page}:{children:ReactNode, styles?:any, page?:string})=>{
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
        <StyledWrapper style={styles}>
            {children}
        </StyledWrapper>
    )
})
export default Wrapper

const StyledWrapper = styled.section<{page?:string}>`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const StyledNoteInputWrapper = styled.section`
   height:100%;
   padding:2rem;
   border-right:var(--border);
   flex-direction:column;
   position:unset;
   width:100%;
   /* display:none; */

   @media (min-width:700px){
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
    padding:3rem;

    @media (min-width:700px){
        position:relative;
        left:var(--width);
        width:calc(100% - var(--width));
        justify-content:space-around;
    }
`