import { memo } from "react";

const H2 = memo(({text}:{text:string})=>{
    return(
        <h2>{text}</h2>
    )
})
export default H2