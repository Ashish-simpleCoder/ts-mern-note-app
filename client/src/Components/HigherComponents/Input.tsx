import { memo, useContext } from "react";
import { State } from "./Modal/Modal";


const Input = memo(({type}:{
    type?:string,
    handleChange?:(value:string)=>void
})=>{
    const {email, password, handleChange} = useContext(State)

    if(type === 'email'){
        return <input type="text" name={type} value={email} onChange={(e)=>handleChange && handleChange(e)}/>
    }
    return(
        <input type="text" name={type} value={password} onChange={(e)=>handleChange && handleChange(e)}/>
    )
})
export default Input