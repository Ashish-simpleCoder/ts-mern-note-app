import { memo, useEffect } from "react";
import UserStates from "../../../Context/UserContext";
import AnchorLink from "../../PureComponents/AnchorLink";
import Img from "../../PureComponents/Img";

const Nav = memo(()=>{
    const {user} = UserStates()
    // useEffect(()=>,[user._id])
    return(
        <nav>
            {
                user._id ?
                    <>
                        <button>logout</button>
                    </>
                :
                    <>
                        <AnchorLink text='login' path='/login'/>
                        <AnchorLink text='register' path='/register'/>
                    </>
            }
            <Img src='./imgs/dark_mode.png' alt="dark and light mode" title='switch color themes'/>
        </nav>
    )
})
export default Nav