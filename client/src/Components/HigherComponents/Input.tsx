import { ChangeEvent, CSSProperties, Dispatch, memo, SetStateAction, useContext } from "react";
import styled, { css } from "styled-components";
import UserStates from "../../Context/UserContext";
import { useLoginCtx } from "../../Pages/Login/Login.modal";
import { NoteState, useNoteCtx } from "../../Pages/Note/Note.input.section";
import { EditNoteCtx } from "../../Pages/Note/Note.page";
import { State } from "./Modal/Modal";


const Input = memo(({type, placeholder, name, mode}: InputPropsTypes)=>{
    const {email, password, handleChange} = useContext(State)
    const {setSearch, search} = UserStates()
    const {note, handleEditNoteChange} = useContext(EditNoteCtx)
    const {title,content, handleNoteChange} = useContext(NoteState)
    const {handleChanges, state} = useLoginCtx()


    // for login page
    if(type==='login'){
        return <StyledInput
        type='text' name={name} value={mode && state[mode]}
        id={mode}
        onChange={(e)=>handleChanges && handleChanges(e)}
        placeholder={placeholder}
        />
    }

    // for creating new note-title
    if(type === 'title'){
        return (<StyledInput type="text" name='title' value={title} onChange={(e)=>handleNoteChange && handleNoteChange(e)} placeholder={placeholder}
            mode='note_title'
            />)
        }

    // for creating new note-content
    if(type === 'content'){
        return (<StyledTextArea name='content' value={content} onChange={(e)=>handleNoteChange && handleNoteChange(e)} placeholder={'placeholder'} />)
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


type InputPropsTypes = {
    type?:string,
    mode?:'email'|'password',
    handleChange?:(value:string)=>void,
    placeholder?:string,
    name:string,
}



const StyledInput = styled.input<{mode?:string}>`
    font-size:clamp(1.5rem,1.6rem,1.6vw);
    border:none;
    padding:0.5rem 1rem;
    background:var(--input-bg);
    outline:none;
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
