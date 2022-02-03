import { memo } from "react";
import styled from "styled-components";

const Button = memo(({text, styles}:{text:string, styles?:any})=>{
    return(
        <StyledBtn style={styles}>{text}</StyledBtn>
    )
})
export default Button

const StyledBtn = styled.button`
    font-size:clamp(1.6rem, 1.8rem, 1.8vw);
    padding:0.5rem 1rem;
    border:none;
    width:100%;
    cursor:pointer;
`