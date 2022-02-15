import { memo } from "react"
import styled from "styled-components"


const Hamburger = memo(({handleClick} : {handleClick?:()=>void}) => {
    return(
        <StyledHamburger onClick={handleClick}>
            <div className="line l1"></div>
            <div className="line l2"></div>
            <div className="line l3"></div>
        </StyledHamburger>
    )
})
export default Hamburger


const StyledHamburger = styled.div`
   width:3rem;
   display:flex;
   justify-content:space-between;
   flex-direction:column;
   cursor:pointer;
   z-index:3;

   .line{
      height:0.2rem;
      background:var(--secondary-clr);
      margin-top:0.4rem;
   }
   .l2{
      width:80%;
   }
   .l3{
      width:70%;
   }

   @media (min-width:700px){
      display:none;
   }
`