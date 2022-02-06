import { memo } from "react";
import styled from "styled-components";

const H3 = memo(({text}:{text:string})=>{
    return(
        <StyledH3>{text}</StyledH3>
    )
})
export default H3

const StyledH3 = styled.h3`
    font-size:clamp(2rem, 2.2rem,2.2vw);
    font-weight:500;
`