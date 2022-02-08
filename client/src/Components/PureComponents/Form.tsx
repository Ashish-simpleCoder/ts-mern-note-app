import { FormEvent, memo, ReactNode, useContext } from "react";
import { NoteState } from "../../Pages/Note/Note.input.section";
import styled, { css } from 'styled-components'
import { LoginStates } from "../../Pages/Login/Login.modal";
import {  RegisterStates } from "../../Pages/Register/Register.modal";

const Form = memo(({children, no_bg, mode}:{children:ReactNode, no_bg?:boolean, mode?:string})=>{
    const {handleNoteSubmit} = useContext(NoteState)
    const {handleSubmit} = LoginStates()
    const {handleSubmit:handleRegisterSubmit} = RegisterStates()

    return(
        <StyledForm onSubmit={(e)=>{
                e.preventDefault()
                handleRegisterSubmit && handleRegisterSubmit(e)
                handleSubmit && handleSubmit(e)
                handleNoteSubmit && handleNoteSubmit(e)}
            }
            no_bg={no_bg}
            mode={mode}   //for margin-top
        >
            {children}
        </StyledForm>
    )
})
export default Form



const StyledForm = styled.form<{no_bg?:boolean, mode?:string}>`
    height:40rem;
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    max-width:35rem;
    background:var(--form-bg);

    ${({mode})=>{
        if(mode === 'login'){
            return css`
                margin:auto;
                max-width:40rem;
                margin-top:3rem;
                border-radius:0.5rem;
                box-shadow:0 0.5rem 0.5rem rgba(0,0,0,0.4);
                padding:2rem;
                div{
                    padding:0 2rem;
                    margin-top:2rem;
                    width:100%;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;

                    input{
                        background:var(--focused);
                    }
                }
            `
        }
    }}
    ${({no_bg})=>{
       if(no_bg === true) {
           return css`
            background:inherit;
        `
        }
    }}
    button{
        margin-top:auto
    }

    input,textarea{
        background:var(--input-bg);
    }
`