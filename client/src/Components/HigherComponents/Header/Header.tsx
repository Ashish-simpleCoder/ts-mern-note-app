import { memo } from "react";
import styled from "styled-components";
import H1 from "../../PureComponents/H1";
import Img from "../../PureComponents/Img";
import LogoContainer from "./LogoContainer";
import Nav from "./Nav";

const Header = memo(()=>{
    return(
        <StyledHeader>
            <LogoContainer>
                <Img src='./imgs/note.png' alt='note'/>
                <H1 heading="Material Note App"/>
            </LogoContainer>
            <Nav/>
        </StyledHeader>
    )
})
export default Header

const StyledHeader = styled.header`
    display:flex;
    align-items:center;
    padding:1rem clamp(1rem, 3rem, 3vw);
`