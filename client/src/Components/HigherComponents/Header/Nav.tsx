import { memo } from "react";
import AnchorLink from "../../PureComponents/AnchorLink";

const Nav = memo(()=>{
    return(
        <nav>
            <AnchorLink text='login' path='/login'/>
            <AnchorLink text='register' path='/register'/>
        </nav>
    )
})
export default Nav