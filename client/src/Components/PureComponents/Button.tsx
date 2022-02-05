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
    handleClick?: (note_id?: string) => Promise<void> | void
    cls?:string
    _id?:string
})=>{
    const {handleDeleteNote} = useContext(EditNoteCtx)


    if(type === 'note_delete_btn'){
        return(
            <StyledDeleteBtn className={cls} onClick={(e)=>{e.stopPropagation();handleDeleteNote(_id)}}>{text}</StyledDeleteBtn>
        )
    }
    if(type === 'hero_btn'){
        return <StyledHeroBtn onClick={()=>handleClick && handleClick()}>{text}</StyledHeroBtn>
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

const StyledHeroBtn = styled.button`
    padding:1rem 3rem;
    border-radius:0.3rem;
    font-size:clamp(1.8rem, 2rem ,2vw);
    margin-top:4rem;
    background:var(--secondary-clr);
    color:var(--hero-btn-clr);
    box-shadow:0 0.3rem 0.5rem rgba(0, 0, 0, 0.6);
`