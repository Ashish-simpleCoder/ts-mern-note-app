import { memo } from "react";
import styled from "styled-components";
import H1 from "../../PureComponents/H1";
import Img from "../../PureComponents/Img";


const LogoContainer = memo(()=>{
    return(
        <StyledLogoContainer>
            <Img src='./imgs/note.png' alt='note'/>
            <H1 heading="Material Note App"/>
        </StyledLogoContainer>
    )
})
export default LogoContainer


const StyledLogoContainer = styled.div`
    display:flex;
    align-items:center;

    img{
        transform: scale(0.6) rotate(-10deg);
        margin-inline-end:0.5rem;
    }
`