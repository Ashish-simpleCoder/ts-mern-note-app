import {memo} from 'react'
import UserStates from '../../Context/UserContext'
import Note from './Note'



const NoteOutput = memo(()=>{
    const {user} = UserStates()
    return(
        <>
        { user.notes &&  user.notes?.map(note=><Note key={note._id} note={note}/>) }
        </>
    )
})
export default NoteOutput