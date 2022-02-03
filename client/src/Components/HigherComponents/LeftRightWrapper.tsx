import { memo, ReactNode } from "react";
import styled, {StyledComponentInnerAttrs} from "styled-components";

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

    @media (min-width:700px){
        flex-direction:unset;
    }
`