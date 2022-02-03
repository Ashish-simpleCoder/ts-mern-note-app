import { memo, ReactNode } from "react";
import styled from "styled-components";

const Wrapper = memo(({children, styles}:{children:ReactNode, styles?:any})=>{
    return (
        <StyledWrapper style={styles}>
            {children}
        </StyledWrapper>
    )
})
export default Wrapper

const StyledWrapper = styled.section`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`