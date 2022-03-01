import { ChangeEvent, memo } from "react";
import styled, { css } from "styled-components";
import  { useUserCtx } from "../../../Context/UserContext";



const Input = memo(({ placeholder, name, value, handleChange, mode, type}: InputProps)=>{
    const {setSearch} = useUserCtx()

    return <StyledInput
        type={type === 'search' ? 'search' : 'text'} name={name} value={value}
        mode={mode}
        onChange={(e)=>{
            if(name === 'search'){
                setSearch(e.target.value)
            }else{
                handleChange && handleChange(e,)
            }
        }}
        placeholder={placeholder}
    />
})
export default Input


type InputProps = {
    type?:string
    mode?:string
    value?:string
    handleChange?:(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    placeholder?:string
    name:string
}



const StyledInput = styled.input<{mode?:string}>`
    font-size:clamp(1.6rem,1.7rem,1.7vw);
    border:none;
    padding:0 1rem;
    height:3.5rem;
    background:var(--input-bg);
    outline:none;
    border-radius:0.5rem;

    &:focus{
        background:var(--input-hover-bg) !important;
        outline:1px solid var(--secondary-clr);
    }

    ${({mode})=>{
        switch (mode){
            case 'edit_note': return css`
                background:inherit;
                `
            case 'note_title': return css`
                width:100%;
                &:hover{  background: var(--input-hover-bg);  }
                `
            default : return css`
            &:hover{  background: var(--input-hover-bg);  }
            `
    }}}
`

