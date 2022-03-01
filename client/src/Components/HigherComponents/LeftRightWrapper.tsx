import { memo, ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

const LeftRightWrapper = memo(({children, styles}: {children:ReactNode, styles?:CSSProperties })=>{
    return(
        <StyledLeftRightWrapper style={styles}>
            {children}
        </StyledLeftRightWrapper>
    )
})
export default LeftRightWrapper

const StyledLeftRightWrapper = styled.section<{before_obj?:boolean}>`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;

    @media (min-width:700px){
        flex-direction:unset;
    }
`