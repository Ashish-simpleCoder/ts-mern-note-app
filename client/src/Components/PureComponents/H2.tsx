import { CSSProperties, memo, ReactNode } from "react";
import styled from "styled-components";

const H2 = memo(({text, children, styles}:{text?:string, children?:ReactNode, styles?:CSSProperties | any})=>{
    return(
        <StyledH2 style={styles}>{children}</StyledH2>
    )
})
export default H2


const StyledH2 = styled.h2`
    font-size:clamp(3.5rem,4rem, 4vw);
    /* font-weight:500; */
`