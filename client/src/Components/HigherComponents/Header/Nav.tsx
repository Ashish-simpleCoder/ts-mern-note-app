import { memo, useCallback, useContext, useEffect} from "react";
import {  useHistory } from "react-router-dom";
import styled from "styled-components";
import UserStates, { ThemeCtx } from "../../../Context/UserContext";
import AnchorLink from "../../PureComponents/AnchorLink";
import Button from "../../PureComponents/Button";
import Img from "../../PureComponents/Img";




const Nav = memo(({cls}:{cls?:string})=>{
    const {user, setUser} = UserStates()
    const history = useHistory()
    const {dark_theme, setDarkTheme} = useContext(ThemeCtx)


    useEffect(()=>{
        localStorage.setItem('dark-theme',JSON.stringify(dark_theme))
        document.body.classList.toggle('dark-theme',dark_theme)
    },[dark_theme])

    const handleLogout = useCallback(async() =>{
        const res = await fetch('/api/v1/user/logout')
        const data:{success:boolean} = await res.json()
        if(data.success){
            setUser(v=>({...v,_id:'',email:''}))
            history.push('/')
        }
    }, [])
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
            <Img src={img_src} alt="dark and light mode" title='switch color themes' handleClick={setDarkTheme} cls='invert' styles={{cursor:'pointer'}}/>
        </StyledNav>
    )
})
export default Nav

const StyledNav = styled.nav`

    transition:none;
    display:flex;
    gap:3rem;
    align-items:center;

    @media (max-width:700px){
        top:5rem;
        right:0;
        position:fixed;
        width:50%;
        height:calc(100vh - 5rem);
        transition:all 0.3s ease;
        background:var(--header-bg);
        z-index:2;
        flex-direction:column;
        align-items:center;
        /* justify-content:space-between; */
    }
    img{
        margin-top:auto;
        margin-bottom:1rem;
    }
`