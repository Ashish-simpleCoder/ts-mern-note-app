import { useCallback, useEffect } from "react"
import { useUserCtx } from "../../../Context/UserContext"
// import { NoteInterface } from "../../../types"
import { useEditNoteCtx } from "../Note.page"

const useNoteClickEvents = () => {
    const {user} = useUserCtx()
    const { setEditNote } = useEditNoteCtx()

    // function for checking the if the clicked element is note-title or note-content
    // if true then set the edit_note for edit.modal
    const listenClickEnv = useCallback((e:any) =>{
        const matched = e.target.classList.contains('note-title') || e.target.classList.contains('note-content')
        if(matched){
            const parentElement = e.target.parentElement.parentElement
            parentElement.style.opacity = '0';       //making the note disappear again after opening the note.edit.modal
            const id = parentElement.id   //getting the id of the note
            const note = user.notes?.filter(each_note=> each_note._id === id)       //getting the exact note from user.note and setting it the edit.modal for editing
            note && setEditNote(note[0])
        }
    }, [user.notes])


    useEffect(()=>{
        const timer = setTimeout(()=> document.body.addEventListener('click', listenClickEnv, false), 1000)
        return () => {
            clearTimeout(timer)
            document.body.removeEventListener('click', listenClickEnv, false)
        }
    }, [user.notes])
    return {listenClickEnv}
}
export default useNoteClickEvents