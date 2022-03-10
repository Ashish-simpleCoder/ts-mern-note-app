import { memo } from "react";
import styled, { css } from "styled-components";

const Loader = memo(({size} :{ size?:string})=>{
    return(
        <StyledLoader size={size}>
            <div className="circle c1"></div>
            <div className="circle c2"></div>
        </StyledLoader>
    )
})
export default Loader


const StyledLoader = styled.div<{size?:string}>`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100%;
    /* padding:0.5rem 1rem; */
    /* position:absolute; */
    /* inset:0; */

    .circle{
      position:absolute;
      width:3rem;
      height:3rem;
      ${({size})=>{
          if(size === 'big'){
              return css`
                  width:5rem;
                  height:5rem;
              `
          }
      }}
      border-radius:50%;
      border:clamp(0.3rem, 0.5rem,0.5vw) solid transparent;
      border-top-color:var(--secondary-clr);
      animation: animate_loaders 1s linear infinite;
   }

   .c2{
      border-bottom-color: var(--secondary-clr);
      border-top-color:transparent;
   }


   @keyframes animate_loaders{
      0%{
         border-width: clamp(0.3rem, 0.5rem, 0.5vw);
         transform: rotate(0);
      }50%{
         border-width: clamp(0.1rem,0.2rem,0.2vw);
         transform: rotate(180deg);
      }100%{
         border-width: clamp(0.3rem, 0.5rem, 0.5vw);
         transform: rotate(360deg);
      }
   }
`