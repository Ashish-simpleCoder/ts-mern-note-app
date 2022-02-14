import { memo } from "react";
import styled, { CSSProperties } from "styled-components";

const Caption = memo(({text, styles}:{text?:string, styles?:CSSProperties | any})=>{
    return(
        <StyledCaption style={styles}>{text}</StyledCaption>
    )
})
export default Caption

const StyledCaption = styled.p`
    font-size:clamp(1.8rem, 2rem ,2vw);
    opacity:0.9;
    white-space:pre-line;
    word-break:break-all;
    margin-top:1rem;
    /* width:max-content; */
`