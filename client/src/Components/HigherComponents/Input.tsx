import { ChangeEvent, memo, useContext } from "react";
import styled, { css } from "styled-components";
import UserStates from "../../Context/UserContext";
// import { EditNoteCtx } from "../../Pages/Note/Note.page";
// import { State } from "./Modal/Modal";



const Input = memo(({ placeholder, name, value, handleChange}: InputPropsTypes)=>{
    // const {email, password, handleChange} = useContext(State)
    const {setSearch, search} = UserStates()
    // const {note, handleEditNoteChange} = useContext(EditNoteCtx)
    // const {title,content, handleNoteChange} = useContext(NoteState)


    // if(type === 'edit_note_title'){
    //     return <StyledInput
    //         name={'title'} value={note.title}
    //         placeholder={placeholder}
    //         onChange={(e)=>handleEditNoteChange && handleEditNoteChange(e)}
    //         mode='edit_note_title'
    //     />
    // }

    // if(type === 'search'){
    //     return (
    //         <StyledInput
    //             name={name} type='text'  value={search}  placeholder={placeholder}  onChange={(e)=>setSearch(e.target.value)}
    //         />
    //     )
    // }

    return <StyledInput
        type='text' name={name} value={value}
        onChange={(e)=>{
            if(name === 'search'){
                setSearch(e.target.value)
            }else{
                handleChange && handleChange(e)
            }
        }}
        placeholder={placeholder}
    />
})
export default Input


type InputPropsTypes = {
    type?:string
    mode?:'email'|'password'
    value?:string
    handleChange?:(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    placeholder?:string
    name:string
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
    outline:var(--border);
`

