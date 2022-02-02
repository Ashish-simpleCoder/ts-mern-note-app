import { memo } from "react";
import styled from "styled-components";
import LogoContainer from "./LogoContainer";
import Nav from "./Nav";

const Header = memo(()=>{
    return(
        <StyledHeader>
            <LogoContainer/>
            <Nav/>
        </StyledHeader>
    )
})
export default Header

const StyledHeader = styled.header`

`