import { Children, cloneElement, memo, useState } from "react";
import styled from "styled-components";

const FormField = memo(({children}:{children:JSX.Element[]})=>{
    const [focus, setFocus] = useState(false)

    return(
        <StyledFormField>
            {
                Children.map(children, (child:JSX.Element)=>{
                    if(typeof child.type === 'string') return child
                    return cloneElement(child, {focus, setFocus})
                })
            }
        </StyledFormField>
    )
})
export default FormField


const StyledFormField = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    position:relative;
    margin-top:5rem;
    box-shadow:0 0.1rem 0.3rem rgba(0, 0, 0, 0.5);

    /* giving margin on email form field */
    &:nth-of-type(1){
        margin-top:3rem;
    }

    label{
        position:absolute;
        top:50%;
        left:0;
        transform:translate(4rem, -50%);
        pointer-events:none;
        transition:all 0.25s;
    }
    .transform{
        color:var(--transform-label-clr);
        transform:translate(1rem, -230%);
        font-size:clamp(1.4rem, 1.5rem, 1.5vw);
    }

    >img{
        height:2.5rem;
        position:absolute;
        top:50%;
        left: 0.5rem;
        transform:translateY(-50%);
    }

    >input{
        width:100%;
        padding:1rem 0.5rem 1rem 4rem;
    }
`