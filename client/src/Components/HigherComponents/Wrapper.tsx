import { memo } from "react";
import styled from "styled-components";

const Wrapper = memo(({children})=>{
    return (
        <StyledWrapper>
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