import { memo } from "react";
import styled from "styled-components";
import { img_props } from "../../types";

const Img = memo(({src,alt, title, styles}:img_props)=>{
    return <StyledImg src={src} alt={alt} title={title} style={styles}/>
})
export default Img

const StyledImg = styled.img`
`