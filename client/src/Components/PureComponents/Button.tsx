import { memo, useContext } from "react";
import styled from "styled-components";
import { EditNoteCtx } from "../../Pages/Note/Note.page";

const Button = memo(({text,
    styles,
    bg,
    type,
    handleClick,
    _id,
    cls
}:{text:string,
    styles?:any,
    bg?:string,
    type?:string,
    handleClick?: (note_id?: string) => Promise<void>,
    cls?:string
    _id?:string
})=>{
    const {handleDeleteNote} = useContext(EditNoteCtx)


    if(type === 'note_delete_btn'){
        return(
            <StyledDeleteBtn className={cls} onClick={(e)=>{e.stopPropagation();handleDeleteNote(_id)}}>{text}</StyledDeleteBtn>
        )
    }
    return(
        <StyledBtn style={styles}className={cls} bg={bg} onClick={()=>handleClick && handleClick()}>{text}</StyledBtn>
    )
})
export default Button

const StyledBtn = styled.button<{bg?:string}>`
    font-size:clamp(1.6rem, 1.8rem, 1.8vw);
    padding:0.5rem 1rem;
    border:none;
    width:100%;
    cursor:pointer;
    border-radius:0.3rem;
    color:var(--btn-clr);
    background:${({bg})=>bg};
    transition:background 0.3s;
    &:hover{
        background:var(--btn-hover-bg);
    }
`

const StyledDeleteBtn = styled.button`
    position:absolute;
    bottom:1rem;
    right:1rem;
`