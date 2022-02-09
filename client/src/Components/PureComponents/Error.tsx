import styled from "styled-components"

const ErrorDisplayer = (({error}:{error:string})=>{
    return(
        <Styled>{error}</Styled>
    )
})
export default ErrorDisplayer

const Styled = styled.p`
    color:red;
    font-size:clamp(1.5rem,1.6rem,1.6vw);
`