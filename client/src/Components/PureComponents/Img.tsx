import { memo } from "react";
import styled from "styled-components";

const Img = memo(({src,alt,styles}:img_props)=>{
    return <StyledImg src={src} alt={alt} style={styles}/>
})
export default Img

const StyledImg = styled.img`
`