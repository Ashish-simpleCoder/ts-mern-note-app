import { memo } from "react";
import { NoteInterface } from "../../types";



const Note = memo(({note}:{note:NoteInterface})=>{
    return(
        <div id={note._id} style={{background:note.bg[0]}}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
        </div>
    )
})
export default Note