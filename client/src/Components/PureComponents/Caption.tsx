import { memo } from "react";
import styled from "styled-components";

const Caption = memo(({text}:{text:string})=>{
    return(
        <StyledCaption>{text}</StyledCaption>
    )
})
export default Caption

const StyledCaption = styled.p`
    font-size:clamp(1.8rem, 2rem ,2vw);
    opacity:0.9;
    margin-top:1rem;
`