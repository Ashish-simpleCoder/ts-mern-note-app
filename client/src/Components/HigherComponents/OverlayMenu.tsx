import { ReactNode } from "react"
import styled from "styled-components"

const OverlayMenu = ({children}:{children:ReactNode})=> {
    return(
        <StyledMenu className="overlay-menu">
            {children}
        </StyledMenu>
    )
}
export default OverlayMenu



const StyledMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:row;
`