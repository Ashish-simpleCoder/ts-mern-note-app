import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import useHandleChange from "../../Note/CustomHooks/useHandleChange"

const useRegister = () => {
    const [state, setState] = useState({email:'', password:""})
    const [errors, setErrors] = useState<{email:string, password:string, err:string}>({email:'', password:'', err:""})
    const [loader, setLoader] = useState(false)
    const history = useHistory()
    const {handleChange} = useHandleChange()

    const handleChanges = useCallback((e:ChangeEvent<HTMLInputElement>) =>{
        handleChange(e, setState)
    },[])


    const registerUser = useCallback(async(email:string, password:string)=>{
        try{
            const res = await fetch('/api/v1/user',{
                method:'POST',
                body:JSON.stringify({email,password}),
                headers:{ 'Content-Type':"application/json"}
            })
            const data:{errors:{email:string, password:string,err:string}, _id:string} = await res.json()
            return {...data}
        }catch(err){
            console.log(err)
            // setErrors()
        }
    },[])

    const handleSubmit = useCallback(async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLoader(true)
        const data = await registerUser(state.email, state.password)
        if(data?._id){
            return history.push('/login')
        }
        setLoader(false)
        data?.errors && setErrors(data.errors)
    },[state, history, registerUser])

    useEffect(()=>{
        const clr = errors &&  setTimeout(()=>setErrors({email:'', password:'', err:''}), 3000)
        return(()=>{
            clearInterval(clr)
        })
    },[errors])      //resetting the errors or removig or cleanin

    return {handleSubmit, loader, errors, state, setState, handleChanges}
}
export default useRegister