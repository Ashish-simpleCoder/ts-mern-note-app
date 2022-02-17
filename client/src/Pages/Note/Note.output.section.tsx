import { memo } from 'react'
import Input from '../../Components/HigherComponents/Input'
import SectionHeader from '../../Components/HigherComponents/Section.header'
import Wrapper from '../../Components/HigherComponents/Wrapper'
import Caption from '../../Components/PureComponents/Caption'
import H3 from '../../Components/PureComponents/H3'
import { useThemeStates, useUserCtx } from '../../Context/UserContext'
import { NoteInterface } from '../../types'
import Dummy from './Dummy'
import Note from './Note'
import useNoteFetch from "./CustomHooks/useNoteFetch";
import Loader from '../../Components/PureComponents/Loader'



const NoteOutput = memo(()=>{
    const {loader} = useNoteFetch()     //fetching the notes of logged user
    const {user, search} = useUserCtx()
    const {dark_theme} = useThemeStates()
    const search_key = search?.trim().toLowerCase()
    const matched = (note : NoteInterface) => note.title.trim().toLowerCase().includes(search_key)  || note.content.trim().toLowerCase().includes(search_key)


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
           {user.notes?.length !== 0 && <Wrapper mode='notes_container' styles={{minHeight:'calc(100vh - 2 * var(--header-height))'}}>
                {
                    loader ?
                        <Loader size='big' />
                        :
                        user.notes?.map((note, index)=><Note key={note._id} note={note}  styles={{'--note-order':index+1, background:dark_theme ? note.bg[1] : note.bg[0], display:matched(note) ? 'block' : 'none'}}/>) }
            </Wrapper>}
        </Wrapper>
    )
})
export default NoteOutput