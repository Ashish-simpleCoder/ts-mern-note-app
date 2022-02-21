import styled from "styled-components"


const ActionLink = ({children, handleClick}:{children:JSX.Element | JSX.Element[], handleClick?:any}) =>{
    return(
        <StyledLink onClick={handleClick}>
            {children}
        </StyledLink>
    )
}
export default ActionLink


const StyledLink = styled.div<{tooltip_text?:string}>`
    position:relative;
    overflow:none;
    cursor: pointer;

    >p{
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