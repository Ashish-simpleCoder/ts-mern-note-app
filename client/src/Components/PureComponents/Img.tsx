import { memo } from "react";
import styled from "styled-components";
import { img_props } from "../../types";

const Img = memo(({
    src,
    alt,
    title,
    styles,
    handleClick,
    cls,
    animate
}:img_props)=>{


    return <StyledImg
        src={src}
        className={cls}
        alt={alt}
        title={title}
        style={styles}
        onClick={()=>handleClick && handleClick((v:boolean)=>!v)}
        animate={animate}
    />
})
export default Img

const StyledImg = styled.img<{animate?:boolean}>`
    animation:${props=>props.animate && 'animate 2s ease-in-out infinite alternate-reverse'};

    @keyframes animate{
        from{
            transform:scale(0.7) rotate(-20deg);
        }
        to{
            transform:scale(0.6) rotate(-20deg);
        }
    }
`