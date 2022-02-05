import { memo, useEffect, useState} from "react";
import {  useHistory } from "react-router-dom";
import styled from "styled-components";
import UserStates from "../../../Context/UserContext";
import AnchorLink from "../../PureComponents/AnchorLink";
import Img from "../../PureComponents/Img";



const Nav = memo(()=>{
    const {user, setUser} = UserStates()
    const history = useHistory()
    const [dark_theme, setDarkTheme] = useState(()=>{
        if(localStorage.getItem('dark-theme')){
            const x:any = localStorage.getItem('dark-theme')
            return JSON.parse(x)
        }else{
            return false
        }
    })


    useEffect(()=>{
        localStorage.setItem('dark-theme',JSON.stringify(dark_theme))
        document.body.classList.toggle('dark-theme',dark_theme)
    },[dark_theme])

    const handleLogout = async() =>{
        const res = await fetch('./api/v1/user/logout')
        const data:{success:boolean} = await res.json()
        if(data.success){
            setUser(v=>({...v,_id:'',email:''}))
            history.push('/')
        }
    }

    return(
        <StyledNav>
            {
                user._id ?
                    <>
                        <AnchorLink path='/notes' text="Notes"/>
                        <button onClick={handleLogout}>logout</button>
                    </>
                :
                    <>
                        <AnchorLink text='login' path='/login'/>
                        <AnchorLink text='register' path='/register'/>
                    </>
            }
            <Img src='./imgs/dark_mode.png' alt="dark and light mode" title='switch color themes' handleClick={setDarkTheme} cls='invert'/>
        </StyledNav>
    )
})
export default Nav

const StyledNav = styled.nav`
    @media (min-width:700px){
        display:flex;
        gap:3rem;
        align-items:center;
    }
`