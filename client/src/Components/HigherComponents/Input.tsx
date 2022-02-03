import { memo, useContext } from "react";
import styled from "styled-components";
import { NoteState } from "../../Pages/Note/Note.input.section";
import { State } from "./Modal/Modal";


const Input = memo(({type, placeholder}:{
    type?:string,
    handleChange?:(value:string)=>void,
    placeholder?:string
})=>{
    const {email, password, handleChange} = useContext(State)
    const {title,content, handleNoteChange} = useContext(NoteState)

    if(type === 'email'){
        return <input type="text" name={type} value={email} onChange={(e)=>handleChange && handleChange(e)}/>
    }
    if(type === 'note_title'){
        return <StyledInput type="text" name={'title'} value={title} onChange={(e)=>handleNoteChange && handleNoteChange(e)} placeholder={placeholder}/>
    }
    if(type === 'note_content'){
        return <StyledInput type="text" name={'content'} value={content} onChange={(e)=>handleNoteChange && handleNoteChange(e)} placeholder={placeholder}/>
    }
    return(
        <input type="text" name={type} value={password} onChange={(e)=>handleChange && handleChange(e)}/>
    )
})
export default Input

const StyledInput = styled.input`
    width:100%;
    margin-top:2rem;
    font-size:clamp(1.6rem,1.8rem,1.8vw);
    border:none;
    padding:0.5rem 1rem;
    background:var(--input-bg);
    outline-color:var(--secondary-clr);
    outline-width:0.1rem;
`