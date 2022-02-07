import { memo } from "react";
import styled from "styled-components";

const Label = memo(({text}:{text:string})=>{
    return(
        <StyledLabel htmlFor={text}>{text}</StyledLabel>
    )
})
export default Label

const StyledLabel = styled.label`
    font-size:clamp(1.5rem,1.6rem,1.6vw);
`