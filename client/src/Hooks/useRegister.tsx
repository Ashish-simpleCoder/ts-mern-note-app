import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState } from "react"
import { useHistory } from "react-router-dom"
import { useUserCtx } from "../Context/UserContext"
import useHandleChange from "./useHandleChange"


const useRegister = () => {
    const [state, setState] = useState({email:'', password:""})
    const [errors, setErrors] = useState<Errors>({} as Errors)
    const [loader, setLoader] = useState(false)
    const history = useHistory()
    const {handleChange} = useHandleChange()
    const {setUser} = useUserCtx()

    const handleChanges = useCallback((e:ChangeEvent<HTMLInputElement>) =>{
        handleChange(e, setState)
    },[handleChange])


    // helper function
    const loginUser = useCallback(async(email:string, password:string) =>{
        try{
            const res = await fetch('/api/v1/user/login',{
                method:'POST',
                body:JSON.stringify({email,password}),
                headers:{ 'Content-Type':"application/json"},
            })
            const data:{errors:{email?:string, password?:string, err?:string}, _id:string, email:string} = await res.json()
            const {errors, _id, email:email_id} =  data
            return {errors, _id, email_id}
        }catch(err){
            console.log(err)
        }
    }, [])

    // helper function
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
        }
    },[])

    // main function for login and registering the user
    const handleSubmit = useCallback(async(e:FormEvent<HTMLFormElement>, mode:string = 'login')=>{
        e.preventDefault()
        setLoader(true)
        let data;
        if(mode === 'login'){
            data = await loginUser(state.email, state.password)
            if(data?._id){
                setUser({_id:data._id,email:data.email_id})
                history.push('/')
            }
        }else{
            data = await registerUser(state.email, state.password)
            if(data?._id){
                return history.push('/login')
            }
        }
        setLoader(false)
        data?.errors && setErrors(data.errors)
    },[state, history, registerUser, loginUser, setUser])

    useEffect(()=>{
        let clear:any;
        if(errors.email || errors.err || errors.password){
            clear = setTimeout(()=>setErrors({email:'', password:'', err:''}), 3000)
        }
        return(()=>{
            clearInterval(clear)
        })
    },[errors])      //resetting the errors or removig or cleanin

    const EmailProps = useMemo(()=>({
        state:state.email, handleChanges, name:'email',
         type:'text'
    }),[state.email, handleChanges])
    const PasswordProps = useMemo(()=>({
        state:state.password, handleChanges, name:'password', type:'password'
    }),[state.password, handleChanges])

    return {handleSubmit, loader, errors, state, setState, handleChanges, EmailProps, PasswordProps}
}
export default useRegister



type Errors = {
    email?:string, password?:string, err?:string
}