import { memo } from "react"
import styled from "styled-components"

const Overlay = memo(() => <StyledOverlay className="overlay"></StyledOverlay>)
export default Overlay

const StyledOverlay = styled.div`
    position:fixed;
    inset:0;
    height:100%;
    width:100%;
    background:rgba(0,0,0, 0.3);
    z-index:2;
    display:none;
`