import { memo, ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

const LeftRightWrapper = memo(({children, styles}:{children:ReactNode, styles?:CSSProperties})=>{
    return(
        <StyledLeftRightWrapper style={styles}>
            {children}
        </StyledLeftRightWrapper>
    )
})
export default LeftRightWrapper

const StyledLeftRightWrapper = styled.section`
    display:flex;
    /* width:100%; */
    flex-direction:column;
    flex-wrap:wrap;
    /* min-height:100vh; */
    /* height:calc(100vh - 5rem); */

    @media (min-width:700px){
        /* max-height:60rem; */
        flex-direction:unset;
    }
`