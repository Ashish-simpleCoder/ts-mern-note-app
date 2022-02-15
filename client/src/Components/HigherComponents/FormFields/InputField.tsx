import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import Img from '../../PureComponents/Img'

const InputField = (({props, setFocus}:{props:InputProps, setFocus?:Dispatch<SetStateAction<boolean>>})=>{
    const {state, name, handleChanges} = props
    return(
        <>
        <Img src={`./imgs/${name}.avif`} alt={name}/>
        <StyledInput type="text" value={state} name={name} onChange={(e)=>handleChanges(e)} onFocus={()=>setFocus && setFocus(true)}
            onBlur={(e)=>{
                setFocus && setFocus(e.target.value.length>0 )
            }}
            />
        </>
    )
})
export default InputField

const StyledInput = styled.input`
    border:none;
    outline:none;
    padding:0.5rem 1rem;
    background:var(--focused) !important;
    font-size:clamp(1.5rem, 1.6rem, 1.6vw);
`



type InputProps = {
    name:string,
    state:string,
    handleChanges: (e: ChangeEvent<HTMLInputElement>) => void
}