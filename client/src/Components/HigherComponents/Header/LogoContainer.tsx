import { memo } from "react";
import styled from "styled-components";



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
        width:3rem;
        height:3.5rem;
        transform:rotate(-10deg);
        margin-inline-end:2rem;
    }
`