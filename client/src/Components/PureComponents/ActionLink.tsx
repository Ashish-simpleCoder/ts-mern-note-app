import { Children, cloneElement, useEffect, useState } from "react"
import styled from "styled-components"
import Caption from "./Caption"

const ActionLink = ({children, tooltip_text, handleClick}:{children:JSX.Element | JSX.Element[], tooltip_text?:string, handleClick?:any}) =>{

    return(
        <StyledLink onClick={handleClick}>
            {children}
            {/* { tooltip_text && <Caption text={tooltip_text} styles={{background:'var(--tooltip-bg)', padding:'0.5rem', borderRadius:'0.3rem'}}/>  } */}
        </StyledLink>
    )
}
export default ActionLink


const StyledLink = styled.div<{tooltip_text?:string}>`
    position:relative;
    overflow:none;
    cursor: pointer;

    >p{
        /* display:none; */
        position:absolute;
        top:100%;
        pointer-events:none;
        opacity:0;
        pointer-events:none;
        font-size:clamp(1.3rem, 1.4rem, 1.4vw);
    }

    &:hover{
        >p{        //displaying tooltip text on hover
            animation:show 3s ease both;
        }
    }
    .clr-list{
        opacity:0;
        pointer-events:none;
    }

    &:focus-within, &:focus{
        .clr-list{
            opacity:1;
            pointer-events:all;
        }
    }

`