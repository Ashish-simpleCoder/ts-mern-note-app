import { memo, ReactNode } from "react";
import styled from "styled-components";

const Wrapper = memo(({children, styles, page}:{children:ReactNode, styles?:any, page?:string})=>{
    return (
        <StyledWrapper style={styles} page={page}>
            {children}
        </StyledWrapper>
    )
})
export default Wrapper

const StyledWrapper = styled.section<{page?:string}>`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:${(props)=>props.page === 'note' && 'unset'} !important;
    left:${(props)=>props.page === 'note' && 'unset'} !important;
    width:${(props)=>props.page === 'note' && '100%'} !important;
`