import { memo, ReactNode } from "react";
import styled, { css } from "styled-components";
import Wrapper from "./Wrapper";

const EditModal = memo(({children, mode}:{
    children:ReactNode,
    mode?:string
})=>{
    return(
        <Wrapper mode='edit_note'>
            <StyledEditModal mode={mode} id='modal' className="edit_modal">
                {children}
            </StyledEditModal>
        </Wrapper>
    )
})
export default EditModal


const StyledEditModal = styled.form<{mode?:string}>`
    display:flex;
    width:100%;
    transition:all 0.3s ease;
    border:var(--border);

    ${(props)=>{
        switch(props.mode){
            case 'edit_note': return css`
            textarea, input{
                width:100% !important;
            }
                flex-direction:column;
                top:0;
                inset:0;
                position:absolute;
                align-items:center;
                justify-content:center;
                background:var(--edit-modal-bg);
                display:none;
                border-radius:0.5rem;
            `
        }
    }}
`