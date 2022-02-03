import { memo, ReactNode, useContext } from "react";
import { NoteState } from "../../Pages/Note/Note.input.section";

const Form = memo(({children}:{children:ReactNode})=>{
    const {handleNoteSubmit} = useContext(NoteState)
    return(
        <form onSubmit={(e)=>handleNoteSubmit(e)}>
            {children}
        </form>
    )
})
export default Form