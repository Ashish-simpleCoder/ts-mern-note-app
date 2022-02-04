import {memo} from 'react'
import UserStates from '../../Context/UserContext'
import Note from './Note'



const NoteOutput = memo(()=>{
    const {user, setUser} = UserStates()

    const handleDeleteNote = async(note_id:string) =>{
        // const data = await deleteNote(`/api/v1/user/notes/${note_id}`)
        const res = await fetch(`/api/v1/user/notes/${note_id}`,{
            method:'DELETE',
        })
        const data:{success:boolean} = await res.json()
        if(data.success){
            const {default: fetchNotes}  = await import('../../modules/fetchNotes')
            const data = await fetchNotes('./api/v1/user/notes')
            if(data?.notes) setUser(old=>({...old, notes:data.notes}))
        }
    }

    return(
        <>
        { user.notes &&  user.notes?.map(note=><Note key={note._id} note={note} handleDeleteNote={handleDeleteNote}/>) }
        </>
    )
})
export default NoteOutput