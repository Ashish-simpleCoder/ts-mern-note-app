import { memo, ReactNode, useContext } from "react";
import { NoteState } from "../../Pages/Note/Note.input.section";
import styled from 'styled-components'

const Form = memo(({children}:{children:ReactNode})=>{
    const {handleNoteSubmit} = useContext(NoteState)
    return(
        <StyledForm onSubmit={(e)=>handleNoteSubmit(e)}>
            {children}
        </StyledForm>
    )
})
export default Form

const StyledForm = styled.form`
    background:var(--form-bg);
    height:40rem;
    width:100%;
    display:flex;
    flex-direction:column;

    button{
        margin-top:auto
    }
`