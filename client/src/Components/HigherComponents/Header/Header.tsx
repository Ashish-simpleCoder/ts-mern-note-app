import { memo } from "react";
import styled from "styled-components";
import AnchorLink from "../../PureComponents/AnchorLink";
import Img from "../../PureComponents/Img";
import Overlay from "../../PureComponents/Overlay";
import Hamburger from "./Hamburger";
import LogoContainer from "./LogoContainer";
import Nav from "./Nav";
import useMediaQuery from "./useMediaQuery";


const Header = memo(()=>{
    const {show, enableResNav, show_nav} = useMediaQuery()

    return(
        <StyledHeader>
            <LogoContainer>
                <Img src='./imgs/note.png' alt='note'/>
                <AnchorLink  path="/" styles={{fontWeight:'600', fontSize:'2rem'}}>
                    Material <span className="accent">Note</span> App
                </AnchorLink>
            </LogoContainer>

            <Nav cls={show_nav ? '' : 'hide'}/>

            { show && <Hamburger handleClick={enableResNav}/>  }

            {/* when res nav is opened then user can close it by clicking it on this overlay  */}
            <Overlay/>
        </StyledHeader>
    )
})
export default Header

const StyledHeader = styled.header`
    background:var(--header-bg);
    display: flex;
    align-items: center;
    height: var(--header-height);
    padding: 0 clamp(1rem, 2rem, 2vw);
    overflow-x:hidden;
    overflow-y:hidden;
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