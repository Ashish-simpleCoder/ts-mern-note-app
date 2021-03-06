import { ReactNode } from "react"
import styled from "styled-components"

const OverlayMenu = ({children, cls}:{children:ReactNode, cls?:string})=> {
    return(
        <StyledMenu className={"overlay-menu "+cls}>
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