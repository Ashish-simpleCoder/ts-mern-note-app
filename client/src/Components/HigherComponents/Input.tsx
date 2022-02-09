import { ChangeEvent, memo } from "react";
import styled, { css } from "styled-components";
import UserStates from "../../Context/UserContext";



const Input = memo(({ placeholder, name, value, handleChange, mode}: InputPropsTypes)=>{
    const {setSearch} = UserStates()



    return <StyledInput
        type='text' name={name} value={value}
        mode={mode}
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
    mode?:string
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
            case 'edit_note': return css`
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

