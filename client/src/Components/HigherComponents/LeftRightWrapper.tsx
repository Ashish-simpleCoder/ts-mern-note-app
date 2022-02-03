import { memo } from "react";
import styled from "styled-components";

const LeftRightWrapper = memo(({children})=>{
    return(
        <StyledLeftRightWrapper>
            {children}
        </StyledLeftRightWrapper>
    )
})
export default LeftRightWrapper

const StyledLeftRightWrapper = styled.section`
    display:flex;
    width:100%;
    flex-direction:column;

    @media (min-width:700px){
        flex-direction:unset;
    }
`