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
    height:40rem;
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    /* margin-top:3rem;   //remvoe int */
    max-width:35rem;
    /* margin:auto; */

    button{
        margin-top:auto
    }

    input,textarea{
        background:var(--input-bg);
    }
`