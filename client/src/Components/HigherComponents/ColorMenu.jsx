import { memo} from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import ColorList from "./ColorList"

const ColorMenu = memo(()=>{
   return(
      <StyledColorMenu>
         <NavLink to='/note'>
            paint
            <ColorList/>
         </NavLink>

      </StyledColorMenu>
   )
})
export default ColorMenu









const StyledColorMenu = styled.div`
   position:relative;
   &:focus,&:focus-within,&:focus-visible{
      .clr-list{
         display:flex;
      }
   }
`

