import { memo} from 'react'
import Wrapper from '../../Components/HigherComponents/Wrapper'
import UserStates from '../../Context/UserContext'
import Note from './Note'



const NoteOutput = memo(()=>{
    const {user} = UserStates()

    return(
        <Wrapper page='note_output'>
        { user.notes &&  user.notes?.map(note=><Note key={note._id} note={note}/>) }
        </Wrapper>
    )
})
export default NoteOutput