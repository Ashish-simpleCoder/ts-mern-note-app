import { memo, useEffect, useLayoutEffect, useMemo } from "react";
import Input from "../../Components/HigherComponents/Input";
import LeftRightWrapper from "../../Components/HigherComponents/LeftRightWrapper";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import Button from "../../Components/PureComponents/Button";
import Form from "../../Components/PureComponents/Form";
import UserStates from "../../Context/UserContext";
import fetchUser from "../../utils/fetchUser";
import NoteInput from "./Note.input.section";
import NoteOutput from "./Note.output.section";



const NotePage = memo(()=>{
    const {setUser} = UserStates()

    useLayoutEffect(()=>{
        (async () =>{
            const res = await fetchUser()
            res?._id && setUser({_id:res._id,email:res?.email})
        })()
    },[setUser])

    // useEffect for fetching notes
    useEffect(()=>{
        (async()=>{
            const {default:fetchNotes} = await import('../../modules/fetchNotes')
            const data = await fetchNotes('./api/v1/user/notes')
            if(data?.notes) setUser(old=>({...old, notes:data.notes}))
        })()
    },[setUser])

    // const width = '35rem'
    // const OutputStyles = useMemo(()=>({
    //     left:width,
    //     width:`calc(100% - ${width})`
    // }),[])



    return(
        <LeftRightWrapper>
            <Wrapper  page='note_create'>
                <NoteInput mode='create_note' >
                   <Form>
                        <Input type='note_title' placeholder='note title...'/>
                        <Input type='note_content' placeholder='type your notes here...'/>
                        <Button text='create a new note' bg='green'/>
                   </Form>
                </NoteInput>
            </Wrapper>
            <Wrapper page='note_output'>
                <NoteOutput/>
            </Wrapper>
        </LeftRightWrapper>
    )
})
export default NotePage