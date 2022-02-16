import { FormEvent, memo, ReactNode } from "react";
import styled, { css, CSSProperties } from 'styled-components'



const Form = memo(({children, no_bg, mode, handleSubmit, styles, animate}:{
    children:ReactNode, no_bg?:boolean, mode?:string, handleSubmit?: ((e: FormEvent<HTMLFormElement>) => Promise<void>) | undefined
    styles?:CSSProperties,
    animate?:boolean
})=>{

    return(
        <StyledForm onSubmit={(e)=>{
                e.preventDefault()
                handleSubmit && handleSubmit(e)
            }}
            style={styles}
            no_bg={no_bg}
            mode={mode}   //for margin-top
            animate={animate}
        >
            {children}
        </StyledForm>
    )
})
export default Form



const StyledForm = styled.form<{no_bg?:boolean, mode?:string, animate?:boolean}>`
    height:45rem;
    width:90%;
    display:flex;
    align-items:center;
    flex-direction:column;
    max-width:35rem;
    background:var(--form-bg);

    ${({mode})=>{
        if(mode === 'login' || mode === 'register'){
            return css`
                margin: auto;
                max-width:40rem;
                margin-top:5rem;
                border-radius:0.5rem;
                box-shadow:0 0.3rem 0.3rem rgba(0,0,0,0.3);
                padding:0 2rem 2rem 2rem;
                //heading of the form
                >h3{
                    padding:1rem 0 2rem 0;
                }
                //containers of input and label
                .div{
                    padding:0 2rem;
                    margin-top:2rem;
                    width:100%;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                }
            `
        }
        if(mode === 'create_note'){
            return css`
                height:25rem;
                @media (min-width:700px){
                    height:50rem;
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
        margin-top:auto   //button will be at the bottom of the form
    }

    /* animate flag */
    ${({animate})=>{
        if(animate){
            return css`
                animation:animate_form 0.4s ease-in forwards;
            `
        }
    }}

    @keyframes animate_form{
        0%{
            opacity:0;
            transform:translateX(-100%);
        }
        50%{
            transform:translateX(50%);
        }
    }

`