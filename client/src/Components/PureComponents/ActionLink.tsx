import { Children, cloneElement, ReactChild, ReactNode, useState } from "react"
import styled, { css } from "styled-components"
import Caption from "./Caption"

const ActionLink = ({children, tooltip_text}:{children:JSX.Element, tooltip_text?:string}) =>{
    const [open, setOpen] = useState(false)
    return(
        <StyledLink tooltip_text={tooltip_text} onClick={(e)=>{
            e.stopPropagation()
            setOpen(v=>!v)
        }}>
            {/* {
                Children.map(children, (child:JSX.Element)=>{
                    if(typeof child.type === 'string'){
                        return child
                    }
                    cloneElement(child, {open})
                })
            } */}
        </StyledLink>
    )
}
{/* <Caption text={tooltip_text}/> */}
export default ActionLink


const StyledLink = styled.div<{tooltip_text?:string}>`
    position:relative;
    overflow:none;
    cursor: pointer;

    >p{
        display:none;
        position:absolute;
        top:0%;
        z-index:10;
        width:100rem;
    }
    &:hover{
        /* transform:scale(2); */
        >p{
            display:block;
        }
    }

`