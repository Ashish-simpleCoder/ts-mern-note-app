import { memo } from "react";

const H3 = memo(({text}:{text:string})=>{
    return(
        <h3>{text}</h3>
    )
})
export default H3