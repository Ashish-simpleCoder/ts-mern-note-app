import { memo } from "react";
import styled, { CSSProperties } from "styled-components";

const H3 = memo(({text, styles, handleClick, cls}:{text:string, styles?:CSSProperties, handleClick?:() =>void, cls?:string})=>{
    return(
        <StyledH3 style={styles} onClick={handleClick} className={cls}>{text}</StyledH3>
    )
})
export default H3

const StyledH3 = styled.h3<{styles?:CSSProperties}>`
    font-size:2.2rem;
`