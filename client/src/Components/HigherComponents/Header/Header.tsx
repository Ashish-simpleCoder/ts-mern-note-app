import { memo } from "react";
import styled from "styled-components";
import AnchorLink from "../../PureComponents/AnchorLink";
import Img from "../../PureComponents/Img";
import Hamburger from "./Hamburger";
import LogoContainer from "./LogoContainer";
import Nav from "./Nav";
import useMediaQuery from "./useMediaQuery";


const Header = memo(()=>{
    const {isHamVisible, isDeskNavVisible, enableResNav , Overlay} = useMediaQuery()

    return(
        <StyledHeader>
            <LogoContainer>
                <Img src='./imgs/note.png' alt='note'/>
                <AnchorLink  path="/" styles={{ fontSize:'2rem'}}>
                    <span className="accent">Material Note</span> App
                </AnchorLink>
            </LogoContainer>

            <Nav cls={isDeskNavVisible ? '' : 'hide'}/>
            { isHamVisible && <Hamburger handleClick={enableResNav}/>  }
            {/* when res nav is opened then user can close it by clicking it on this overlay  */}
            <Overlay cls={'nav_overlay'} />
        </StyledHeader>
    )
})
export default Header

const StyledHeader = styled.header`
    background:var(--header-bg);
    display: flex;
    align-items: center;
    height: var(--header-height);
    /* padding: 0 clamp(1rem, 2rem, 2vw); */
    padding-inline:clamp(1rem, 2rem, 2vw);
    overflow-x:hidden;
    overflow-y:hidden;
    box-shadow:0 0.2rem 0.2rem rgba(0, 0,0, 0.1);

    a,button{
        &:hover{
            color:var(--secondary-clr);
        }
    }

    /* class for toggling the nav bar for mobile devices */
    .hide{
        transform:translateX(120%);
        opacity:0;
    }

    @media (min-width:700px){
        position:sticky;
        top:0;
        z-index:2;
    }
`