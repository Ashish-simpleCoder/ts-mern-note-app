import { ChangeEvent } from "react"
import styled from "styled-components"

const Textarea = ({value, handleChange, placeholder, name}:TextareaProps)=>{
    return(
        <StyledTextArea
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={(e)=>handleChange && handleChange(e)}
        />
    )
}
export default Textarea

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
`



type TextareaProps = {
    value?:string
    handleChange?:(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    placeholder?:string
    name?:string
}