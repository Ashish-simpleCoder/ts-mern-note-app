import { memo, useCallback } from 'react'
import Input from '../../Components/HigherComponents/Form/Input'
import SectionHeader from '../../Components/HigherComponents/Section.header'
import Wrapper from '../../Components/HigherComponents/Wrapper'
import Caption from '../../Components/PureComponents/Caption'
import H3 from '../../Components/PureComponents/H3'
import { useUserCtx } from '../../Context/UserContext'
import { NoteInterface } from '../../types'
import Dummy from './Dummy'
import Note from './Note'
import useNoteFetch from "./NotesHooks/useNoteFetch";
import Loader from '../../Components/PureComponents/Loader'
import useNoteClickEvents from './NotesHooks/useNoteClickEvents'
import If from '../../UtilComponents/If'
import { useThemeStates } from '../../Context/ThemeContext'



const NoteOutput = memo(()=>{
    const {loader} = useNoteFetch()     //fetching the notes of logged user
    const {user, search} = useUserCtx()
    const {dark_theme} = useThemeStates()

    const search_key = search?.trim().toLowerCase()
    const matched = useCallback((note : NoteInterface) => note.title.trim().toLowerCase().includes(search_key)  || note.content.trim().toLowerCase().includes(search_key),[search_key])


    // using event delegation for clicking event for each note
    // if we add events in every note then it will take more resource
    // so add events to the parent element of the each note
    useNoteClickEvents()



    return(
        <Wrapper mode='notes_container_wrapper'>
            <If condition={user.notes?.length !== 0}>
                <SectionHeader>
                    <H3 text='Your notes'/>
                    <Input type='search' name='search' placeholder='search your notes...'/>
                </SectionHeader>
            </If>

            <If condition={ user.notes?.length === 0 }>
                <Dummy>
                    <H3 text="Haven't created any notes?" />
                    <Caption text="Then let's get started. "/>
                </Dummy>
            </If>

            {/* displaying the notes in container */}
            <If condition={ user.notes?.length !== 0 }>
                <Wrapper mode='notes_container' styles={{minHeight:'calc(100vh - 2 * var(--header-height))'}}>
                    <If condition={loader}>
                        <Loader size='big'/>
                    </If>
                    <If condition={!loader}>
                    {
                        user.notes?.map((note, i)=>{
                            if(!note.delete) return <Note key={note._id} note={note}  styles={{'--note-order':i+1, background:dark_theme ? note.bg[1] : note.bg[0], display:matched(note) ? 'flex' : 'none'}} />
                            return null
                        })
                    }
                    </If>
                </Wrapper>
            </If>
        </Wrapper>
    )
})
export default NoteOutput