import { memo} from 'react'
import Input from '../../Components/HigherComponents/Input'
import SectionHeader from '../../Components/HigherComponents/Section.header'
import Wrapper from '../../Components/HigherComponents/Wrapper'
import Caption from '../../Components/PureComponents/Caption'
import H3 from '../../Components/PureComponents/H3'
import UserStates from '../../Context/UserContext'
import Dummy from './Dummy'
import Note from './Note'



const NoteOutput = memo(()=>{
    const {user, search} = UserStates()

    return(
        <Wrapper mode='notes_container_wrapper'>
            {/* for searching notes */}
            {
                user.notes?.length !== 0  ? (<SectionHeader>
                                                <H3 text='Your notes'/>
                                                <Input type='search' name='search' placeholder='search your notes...'/>
                                            </SectionHeader>)
                                        :
                                        <Dummy>
                                            <H3 text="Haven't created any notes?" />
                                            <Caption text="Then let's get started. "/>
                                        </Dummy>
                }

            {/* displaying the notes in container */}
            <Wrapper mode='notes_container'>
                { user.notes &&  user.notes?.map(note=><Note key={note._id} note={note} search={search}/>) }
            </Wrapper>
        </Wrapper>
    )
})
export default NoteOutput