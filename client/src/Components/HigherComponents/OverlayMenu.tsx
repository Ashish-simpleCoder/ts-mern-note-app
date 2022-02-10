import { ReactNode } from "react"
import styled from "styled-components"

const OverlayMenu = ({children}:{children:ReactNode})=> {
    return(
        <StyledMenu className="overlay_menu">
            {children}
        </StyledMenu>
    )
}
export default OverlayMenu



const StyledMenu = styled.div`
    /* border:1px solid; */
    display:flex;
    align-items:center;
    justify-content:space-around;
    transition:all 0.3s;
    flex-direction:row;
`