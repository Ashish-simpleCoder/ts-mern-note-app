import { memo } from "react";
import styled from "styled-components";

const SectionHeader = memo(({children})=>{
    return(
        <StyledSectionHeader>
            {children}
        </StyledSectionHeader>
    )
})
export default SectionHeader

const StyledSectionHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    padding:1rem;
    border-bottom:var(--border);
`