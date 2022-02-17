import { CSSProperties, memo, useEffect } from "react"
import styled from "styled-components"
import ColorsArr from "../../utils/ColorArr"
import { NoteInterface } from "../../types"
import { useThemeStates, useUserCtx } from "../../Context/UserContext"
import updateNote from "../../modules/updateNote"
import fetchNotes from "../../modules/fetchNotes"
import { useEditNoteCtx } from "../../Pages/Note/Note.page"


const ColorList = memo(({note, open, styles}:{note:NoteInterface, open?:boolean, styles?:CSSProperties})=>{

   return(
      <StyledColorList className="clr-list" style={styles}>
         { ColorsArr.map((clr:any, index:any)=><ColorBox key={index}  clr={clr} />) }
      </StyledColorList>
   )
})
export default ColorList

const ColorBox = memo(({clr}:{clr:any})=>{
   const clr_name = Object.keys(clr)
   const {dark_theme} = useThemeStates()
   const color = clr[Object.keys(clr)[0]][dark_theme ? 1 : 0]
   const {setUser} = useUserCtx()
   const {menu, setEditNote, setMenu, note} = useEditNoteCtx()
   // console.log(clr[Object.keys(clr)[0]],menu?.item.bg)
   useEffect(()=>{
      console.log(menu?.item.bg)
   }, [menu])


   return(
      <div style={{background:color,width:'3rem',height:'3rem',borderRadius:'50%'}}  onClick={async(e)=>{
         e.stopPropagation()
         if(!menu?.item) return         //if note edit mode enabled then return
         if(menu.item.bg.includes(color)) return      //if user sets the color which is already setted then return

         updateNote(`/api/v1/user/notes/${menu?.item._id}`, {...menu.item, bg:clr[Object.keys(clr)[0]]})
         const data = await fetchNotes('/api/v1/user/notes')
         if(data?.notes) {
            setUser(v=>({...v, notes:data.notes}))    //setting the updated notes from the server to the client
            setEditNote((v) => ({...v, bg:clr[Object.keys(clr)[0]]}))     //setting the updated color to the edit modal as well on live
            setMenu && setMenu(v=>({...v, item:{...v.item, bg:clr[Object.keys(clr)[0]]}}))       //also updating the menu state
         }
      }}></div>
   )
})



const StyledColorList = styled.div`
   display:flex;
   position:fixed;
   flex-direction:row;
   align-items:center;
   justify-content:space-between;
   gap:1rem;
   z-index:3;
   >div{
      cursor:pointer;
   }
`