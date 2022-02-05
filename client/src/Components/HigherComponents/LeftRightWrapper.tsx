import { memo, ReactNode } from "react";
import styled from "styled-components";

const LeftRightWrapper = memo(({children}:{children:ReactNode})=>{
    return(
        <StyledLeftRightWrapper >
            {children}
        </StyledLeftRightWrapper>
    )
})
export default LeftRightWrapper

const StyledLeftRightWrapper = styled.section`
    display:flex;
    width:100%;
    flex-direction:column;
    flex-wrap:wrap;
    height:100vh;
    max-height:60rem;

    @media (min-width:700px){
        flex-direction:unset;
    }
`