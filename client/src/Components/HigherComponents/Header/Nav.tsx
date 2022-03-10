import { memo, useMemo } from "react";
import styled from "styled-components";
import { useThemeStates } from "../../../Context/ThemeContext";
import  { useUserCtx } from "../../../Context/UserContext";
import useRegister from "../../../Hooks/useRegister";
import If from "../../../UtilComponents/If";
import AnchorLink from "../../PureComponents/AnchorLink";
import Button from "../../PureComponents/Button";
import Img from "../../PureComponents/Img";


const Nav = memo(({cls}:{cls?:string})=>{
    const {user } = useUserCtx()
    const {dark_theme, setDarkTheme} = useThemeStates()
    const {handleLogout} = useRegister()

    //giving the src according the theme
    const img_src = useMemo(()=>dark_theme ? './imgs/dark_mode.png' : './imgs/light_mode.png', [dark_theme])


    return(
        <StyledNav className={cls}>
            {/* is user is logged in */}
            <If condition={!!user._id}>
                <AnchorLink path='/notes' text="notes" />
                <AnchorLink path='/bin' text="bin"/>
                <Button handleClick={handleLogout} text='logout' mode='logout_btn' />
            </If>
            {/* is user is not logged in */}
            <If condition={!user._id}>
                <AnchorLink text='login' path='/login'/>
                <AnchorLink text='register' path='/register'/>
            </If>
            <Img src={img_src} alt="toggle theme" title='switch color themes' handleClick={setDarkTheme} cls='invert' styles={{cursor:'pointer',userSelect:'none'}}/>
        </StyledNav>
    )
})
export default Nav


const StyledNav = styled.nav`
    display:flex;
    gap:3rem;
    align-items:center;
    a{
        font-weight:500;
    }

    @media (max-width:700px){
        top:var(--header-height);
        right:0;
        position:fixed;
        width:50%;
        height:calc(100% - var(--header-height));
        transition:all 0.3s ease;
        background:var(--header-bg);
        z-index:3;
        flex-direction:column;
        padding:1rem;

        img{
            margin-top:auto;
        }
    }
`