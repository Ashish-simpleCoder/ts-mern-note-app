import { memo } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import H2 from "../../Components/PureComponents/H2";

const NotFoundPage = memo(()=>{
    return(
        <Wrapper>
            <H2 text="Page not found"/>
            <Link to='/'>Go back to home page</Link>
        </Wrapper>
    )
})
export default NotFoundPage