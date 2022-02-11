import { memo } from "react";
import styled, { css, CSSProperties } from "styled-components";

const H3 = memo(({text, styles, handleClick}:{text:string, styles?:CSSProperties, handleClick?:() =>void})=>{
    return(
        <StyledH3 styles={styles} onClick={handleClick}>{text}</StyledH3>
    )
})
export default H3

const StyledH3 = styled.h3<{styles?:CSSProperties}>`
    font-size:clamp(2rem, 2.2rem,2.2vw);
    /* font-weight:500;
    font-size:clamp(1.6rem,1.7rem,1.7vw);
    padding:0.5rem; */
`