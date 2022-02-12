import { memo } from "react";
import styled, { CSSProperties } from "styled-components";

const H3 = memo(({text, styles, handleClick}:{text:string, styles?:CSSProperties, handleClick?:() =>void})=>{
    return(
        <StyledH3 style={styles} onClick={handleClick}>{text}</StyledH3>
    )
})
export default H3

const StyledH3 = styled.h3<{styles?:CSSProperties}>`
    font-size:2.2rem;
    font-weight:500;
`