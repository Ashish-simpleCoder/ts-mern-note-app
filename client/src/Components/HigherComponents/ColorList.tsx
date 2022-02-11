import { memo } from "react"
import styled from "styled-components"
import ColorsArr from "../../utils/ColorArr"
import { NoteInterface } from "../../types"
import UserStates, { useThemeStates } from "../../Context/UserContext"
import updateNote from "../../modules/updateNote"
import fetchNotes from "../../modules/fetchNotes"


const ColorList = memo(({note, open}:{note:NoteInterface, open?:boolean})=>{
   return(
      <StyledColorList className="clr-list">
         { ColorsArr.map((clr:any)=><ColorBox  clr={clr} note={note}/>) }
      </StyledColorList>
   )
})
export default ColorList

const ColorBox = memo(({clr, note}:{clr:any, note:NoteInterface})=>{
   const clr_name = Object.keys(clr)
   const {dark_theme} = useThemeStates()
   const color = clr[Object.keys(clr)[0]][dark_theme ? 1 : 0]
   const {setUser} = UserStates()


   return(
      <div style={{background:color,width:'3rem',height:'3rem',borderRadius:'50%'}}  onClick={async(e)=>{
         e.stopPropagation()
         updateNote(`/api/v1/user/notes/${note._id}`, {...note, bg:clr[Object.keys(clr)[0]]})
         const data = await fetchNotes('/api/v1/user/notes')
         if(data?.notes) setUser(v=>({...v, notes:data.notes}))
      }}></div>
   )
})



const StyledColorList = styled.div`
   /* display:none; */
   display:flex;
   opacity:0;
   pointer-events:none;
   position:absolute;

   flex-direction:row;
   align-items:center;
   justify-content:space-between;
   gap:1rem;
   >div{
      cursor:pointer;
   }
`