import { memo } from "react";
import styled from "styled-components";

const H1 = memo(({heading}:{heading:string})=>{
    return <StyledH1>{heading}</StyledH1>
})
export default H1

const StyledH1 = styled.h1`
    font-size:clamp(2rem, 2.2rem,2.2vw);
`