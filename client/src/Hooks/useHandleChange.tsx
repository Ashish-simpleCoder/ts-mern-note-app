import { ChangeEvent } from "react"

const useHandleChange = () =>{
    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, handler:any)=>{
        handler((old:any)=>({
            ...old,
            [e.target.name]:e.target.value
        }))
    }
    return {handleChange}
}
export default useHandleChange