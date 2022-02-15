import styled from "styled-components"
type LabelProps = { text:string, focus?:string  }

const LabelField = (props:LabelProps)=> <StyledLabel className={props.focus && 'transform'}>{props.text}</StyledLabel>
export default LabelField


const StyledLabel = styled.label`
    font-size:clamp(1.5rem, 1.6rem, 1.6vw);
`