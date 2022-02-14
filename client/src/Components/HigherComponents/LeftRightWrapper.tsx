import { memo, ReactNode } from "react";
import styled, { css, CSSProperties } from "styled-components";

const LeftRightWrapper = memo(({children, styles, before_obj}:{children:ReactNode, styles?:CSSProperties, before_obj?:boolean})=>{
    return(
        <StyledLeftRightWrapper style={styles} before_obj={before_obj}>
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