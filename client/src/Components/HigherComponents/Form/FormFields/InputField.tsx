import { ChangeEvent, Dispatch, memo, SetStateAction, useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import Img from '../../../PureComponents/Img'


type FieldProps =  {props:InputProps, setFocus?:Dispatch<SetStateAction<boolean>>, focus?:boolean}

const InputField = (({props, setFocus, focus}:FieldProps)=>{
    const {state, name, handleChanges, type} = props
    const [field_type, setFieldType] = useState(type)       //for changint the type of the password from text to password and so forth

    const handleFocus = useCallback(()=>{
        setFocus && setFocus(true)
    } , [setFocus])

    const handleBlur = useCallback((e)=>{
        setFocus && setFocus(e.target.value.length>0 )
    } , [setFocus])


    const changePasswordType = useCallback(()=>{
        setFieldType(v => (v === 'password' ? 'text' :'password'))
    }, [])

    const img_src = useMemo(() =>field_type === 'password' ? './imgs/hide.png' : './imgs/show.png', [field_type])



    return(
        <>
            <Img src={`./imgs/${name}.avif`} alt={name}/>
            <StyledInput type={field_type} value={state} name={name}
                onChange={handleChanges}
                onFocus={handleFocus}
                onBlur={handleBlur}
                autoFocus={name === 'email'}    //if email or first field then autofocus
                title='enter your credentails'
            />
            { type === 'password' && focus && <TogglePassword handleClick={changePasswordType} img_src={ img_src }/> }
        </>
    )
})
export default InputField


const StyledInput = styled.input`
    border:none;
    outline:none;
    height:4rem;
    background:var(--login-input-bg);
    font-size:clamp(1.6rem, 1.7rem, 1.7vw);
    border-radius:0.5rem;

    &:hover{
        background:var(--input-hover-bg) !important;
    }
`



type InputProps = {
    name:string,
    state:string,
    handleChanges: (e: ChangeEvent<HTMLInputElement>) => void
    type:string
}


const TogglePassword = memo(({handleClick, img_src}:TogglePassProps) => {
    return (
        <StyledTogglePassword onClick={handleClick}>
            <Img src={img_src} cls='invert' alt='toggle' />
        </StyledTogglePassword>
    )
})



const StyledTogglePassword = styled.div`
    position:absolute;
    right:1rem;
    top:50%;
    transform:translateY(-50%);
    cursor: pointer;
    z-index:3;
`
type TogglePassProps = {
    handleClick: () => void,img_src:string
}