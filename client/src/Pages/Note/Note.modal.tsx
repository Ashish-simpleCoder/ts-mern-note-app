import { memo, ReactNode, useContext } from "react";
import styled from "styled-components";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import { NoteState } from "./Note.input.section";
import { EditNoteCtx } from "./Note.page";

const NoteModal = memo(({children, mode}:{
    children:ReactNode
    mode:string
})=>{
    if(mode === 'edit_note'){
      return (
        <Wrapper mode={mode}>
            <StyledEditModal >
                {children}
            </StyledEditModal>
        </Wrapper>
      )
    }
    return(
        <></>
    )
})
export default NoteModal

const StyledEditModal = styled.div`
    height:40rem;
    width:100%;
    max-width:60%;
    background:white;
    border-radius:0.5rem;
`