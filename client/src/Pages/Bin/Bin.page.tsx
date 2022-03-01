import { memo } from "react";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import H3 from "../../Components/PureComponents/H3";
import Loader from "../../Components/PureComponents/Loader";
import { useThemeStates } from "../../Context/ThemeContext";
import { useUserCtx } from "../../Context/UserContext";
import useFetchUser from "../../Hooks/useFetchUser";
import Note from "../Note/Note";
import useNoteFetch from "../Note/NotesHooks/useNoteFetch";


const BinPage = memo(()=>{
    useFetchUser({auth:true})    //first checking if the user is loggedin or not
    const {loader} = useNoteFetch()     //fetching the notes of logged user
    const {user} = useUserCtx()
    const {dark_theme} = useThemeStates()


    return(
        <>
            <H3 text='Permanent Delete Your Notes' />
            <Wrapper mode='notes_container'>
            {
                    loader
                        ?
                    <Loader size='big' />
                        :
                    user.notes?.map((note, index)=>{
                        if(note.delete){
                            return <Note key={note._id} note={note} mode='recycle.page'  styles={{'--note-order':index+1, background:dark_theme ? note.bg[1] : note.bg[0]}}/>
                        }
                        return null
                    })
                }
            </Wrapper>
        </>
    )
})
export default BinPage