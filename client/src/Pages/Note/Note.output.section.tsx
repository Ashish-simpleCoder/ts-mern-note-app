import { memo} from 'react'
import Input from '../../Components/HigherComponents/Input'
import SectionHeader from '../../Components/HigherComponents/Section.header'
import Wrapper from '../../Components/HigherComponents/Wrapper'
import H2 from '../../Components/PureComponents/H2'
import H3 from '../../Components/PureComponents/H3'
import UserStates from '../../Context/UserContext'
import Note from './Note'



const NoteOutput = memo(()=>{
    const {user, search} = UserStates()

    return(
        <Wrapper mode='notes_container_wrapper'>
            <SectionHeader>
                <H3 text='Your notes'/>
                {user.notes?.length !== 0  && <Input type='search' name='search' placeholder='search your notes...'/> }
            </SectionHeader>
            <Wrapper mode='notes_container'>
                { user.notes &&  user.notes?.map(note=><Note key={note._id} note={note} search={search}/>) }
            </Wrapper>
        </Wrapper>
    )
})
export default NoteOutput