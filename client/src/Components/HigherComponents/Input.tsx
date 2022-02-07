import { CSSProperties, memo, useContext } from "react";
import styled, { css } from "styled-components";
import UserStates from "../../Context/UserContext";
import { NoteState } from "../../Pages/Note/Note.input.section";
import { EditNoteCtx } from "../../Pages/Note/Note.page";
import { State } from "./Modal/Modal";


const Input = memo(({type, placeholder, name, style}:{
    type?:string,
    handleChange?:(value:string)=>void,
    placeholder?:string,
    name:string,
    style?:CSSProperties
})=>{
    const {email, password, handleChange} = useContext(State)
    const {title,content, handleNoteChange} = useContext(NoteState)
    const {note, handleEditNoteChange} = useContext(EditNoteCtx)

    const {setSearch, search} = UserStates()

    if(type === 'title'){
        return <StyledInput type="text" name={name} value={title} onChange={(e)=>handleNoteChange && handleNoteChange(e)} placeholder={placeholder}
        mode='note_title'
        />
    }
    if(type === 'content'){
        return <StyledTextArea name={name} value={content} onChange={(e)=>handleNoteChange && handleNoteChange(e)} placeholder={placeholder}/>
    }

    if(type === 'edit_note_title'){
        return <StyledInput
            name={'title'} value={note.title}
            placeholder={placeholder}
            onChange={(e)=>handleEditNoteChange && handleEditNoteChange(e)}
            mode='edit_note_title'
        />
    }
    if(type === 'edit_note_content'){
        return <StyledTextArea name={'content'} value={note.content} onChange={(e)=>handleEditNoteChange && handleEditNoteChange(e)} placeholder={placeholder}/>
    }
    if(type === 'email'){
        return <input type="text" name={type} value={email} onChange={(e)=>handleChange && handleChange(e)} placeholder={placeholder}/>
    }
    if(type === 'search'){
        return (
            <StyledInput
                name={name} type='text'  value={search}  placeholder={placeholder}  onChange={(e)=>setSearch(e.target.value)}
            />
        )
    }
    return(
        <input type="text" name={type} value={password} onChange={(e)=>handleChange && handleChange(e)} placeholder={placeholder}/>
    )
})
export default Input



const StyledInput = styled.input<{mode?:string}>`
    font-size:clamp(1.5rem,1.6rem,1.6vw);
    border:none;
    padding:0.5rem 1rem;
    background:var(--input-bg);
    ${({mode})=>{
        switch (mode){
            case 'edit_note_title': return css`
                background:inherit;
            `
            case 'note_title': return css`
                width:100%;
            `
            default : return css`

            `
    }}}
    outline:var(--border);
    border-radius:0.3rem;

    transition:background 0.3s;
    &:focus{
        background:var(--focused);
    }
`
const StyledTextArea = styled.textarea`
    width:100%;
    height:100%;
    margin-bottom:2rem;
    resize:none;
    margin-top:2rem;
    font-size:clamp(1.5rem,1.6rem,1.6vw);
    border:none;
    padding:0.5rem 1rem;
    background:inherit;
    outline:var(--border);
    border-radius:0.3rem;

    transition:background 0.3s;
    &:focus{
        background:var(--focused);
    }
`
