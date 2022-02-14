import { ChangeEvent } from "react"
import styled, { css, CSSProperties } from "styled-components"

const Textarea = ({value, handleChange, placeholder, name, styles, hover_bg}:TextareaProps)=>{
    return(
        <StyledTextArea
            name={name}
            value={value}
            placeholder={placeholder}
            style={styles}
            hover_bg={hover_bg}
            onChange={(e)=>handleChange && handleChange(e)}
        />
    )
}
export default Textarea

const StyledTextArea = styled.textarea<{hover_bg?:boolean}>`
    width:100%;
    height:15rem;
    @media (min-width:700px){
        height:100%;
    }
    margin-bottom:2rem;
    resize:none;
    margin-top:1rem;
    font-size:clamp(1.6rem,1.7rem,1.7vw);
    border:none;
    padding:0.5rem 1rem;
    background:inherit;
    outline:var(--border);
    border-radius:0.3rem;
    ${({hover_bg})=>{
        if(hover_bg){
            return css`
                &:hover{  background: var(--input-hover-bg);  }
            `
        }
    }}

`



type TextareaProps = {
    value?:string
    handleChange?:(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    placeholder?:string
    name?:string,
    styles?:CSSProperties,
    hover_bg?:boolean
}