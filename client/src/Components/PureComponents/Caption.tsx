import { memo } from "react";
import styled, { CSSProperties } from "styled-components";

const Caption = memo(({text, styles}:{text?:string, styles?:CSSProperties | any})=>{
    return(
        <StyledCaption style={styles}>{text}</StyledCaption>
    )
})
export default Caption

const StyledCaption = styled.p`
    font-size:clamp(1.4rem, 1.5rem ,1.5vw);
    opacity:0.8;
    white-space:pre-line;
    word-break:break-all;
    margin-top:1rem;
`