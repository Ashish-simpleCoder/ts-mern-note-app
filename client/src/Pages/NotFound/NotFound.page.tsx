import { memo, useMemo } from "react";
import { CSSProperties } from "styled-components";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import AnchorLink from "../../Components/PureComponents/AnchorLink";
import H2 from "../../Components/PureComponents/H2";

const NotFoundPage = memo(()=>{
    const styles:CSSProperties = useMemo(()=>({
        flexDirection:'column',
        height:'80vh',
        maxHeight:'30rem',
        justifyContent:'space-between',
        padding:'2rem'
    }),[])
    return(
        <Wrapper styles={styles}>
            <H2 text="Page not found"/>
            <AnchorLink path='/' text='Go back to home page' />
        </Wrapper>
    )
})
export default NotFoundPage