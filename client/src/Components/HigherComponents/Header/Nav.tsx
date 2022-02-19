import { memo, useCallback} from "react";
import {  useHistory } from "react-router-dom";
import styled from "styled-components";
import  { useThemeStates, useUserCtx } from "../../../Context/UserContext";
import AnchorLink from "../../PureComponents/AnchorLink";
import Button from "../../PureComponents/Button";
import Img from "../../PureComponents/Img";


const Nav = memo(({cls}:{cls?:string})=>{
    const {user, setUser} = useUserCtx()
    const history = useHistory()
    const {dark_theme, setDarkTheme} = useThemeStates()

    const handleLogout = useCallback(async() =>{
        const res = await fetch('/api/v1/user/logout')
        const data:{success:boolean} = await res.json()
        if(data.success){
            setUser(v=>({...v,_id:'',email:''}))
            history.push('/')
        }
    }, [history, setUser])

    //giving the src according the theme
    const img_src = dark_theme ? './imgs/dark_mode.png' : './imgs/light_mode.png'


    return(
        <StyledNav className={cls}>
            {
                user._id ?
                    <>
                        <AnchorLink path='/notes' text="notes"/>
                        <Button handleClick={handleLogout} text='logout' mode='logout_btn' />
                    </>
                :
                    <>
                        <AnchorLink text='login' path='/login'/>
                        <AnchorLink text='register' path='/register'/>
                    </>
            }
            <Img src={img_src} alt="dark and light mode" title='switch color themes' handleClick={setDarkTheme} cls='invert' styles={{cursor:'pointer',userSelect:'none'}}/>
        </StyledNav>
    )
})
export default Nav


const StyledNav = styled.nav`
    display:flex;
    gap:3rem;
    align-items:center;

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