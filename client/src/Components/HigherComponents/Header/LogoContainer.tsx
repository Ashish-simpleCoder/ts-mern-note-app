import { memo } from "react";
import styled from "styled-components";
// import H1 from "../../PureComponents/H1";
// import Img from "../../PureComponents/Img";


const LogoContainer = memo(({children})=>{
    return(
        <StyledLogoContainer>
            {children}
        </StyledLogoContainer>
    )
})
export default LogoContainer


const StyledLogoContainer = styled.div`
    display:flex;
    align-items:center;
    flex:1;

    img{
        transform: scale(0.6) rotate(-10deg);
        margin-inline-end:0.5rem;
    }
`