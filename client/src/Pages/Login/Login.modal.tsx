import { useCallback } from "react";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import FormField from "../../Components/HigherComponents/FormFields/FormField";
import InputField from "../../Components/HigherComponents/FormFields/InputField";
import LabelField from "../../Components/HigherComponents/FormFields/LabelField";
import Button from "../../Components/PureComponents/Button";
import ErrorDisplayer from "../../Components/PureComponents/Error";
import Form from "../../Components/PureComponents/Form";
import H3 from "../../Components/PureComponents/H3";
import UserStates from "../../Context/UserContext";



const LoginModal = ()=>{
    const [state, setState] = useState({email:'', password:""})
    const [errors, setErrors] = useState({} as {email?:string, password?:string, err?:string})
    const {setUser} = UserStates()
    const history = useHistory()
    const [login_loader, setLoginLoader] = useState(false)


    const handleSubmit = useCallback(async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLoginLoader(true)       //making loader appear
        const data = await loginUser(state.email, state.password)
        if(data?._id){
            setUser({_id:data._id,email:data.email_id})
            history.push('/')
        }
        setLoginLoader(false)      //making loader disappear
        data?.errors && setErrors(data.errors)
        data?.error && setErrors({email:'', password:'', err:data.error})
    },[state, setUser, history])

    const handleChange = useCallback((e:ChangeEvent<HTMLInputElement>) =>{
        setState(old=>({
            ...old,
            [e.target.name]:e.target.value
        }))
    },[])

    useEffect(()=>{
        const clr = errors &&  setTimeout(()=>setErrors({email:'', password:'', err:''}), 3000)
        // errors &&  setTimeout(()=>setErrors({email:'', password:'', err:''}),3000)
        return(()=>{
            clearInterval(clr)
        })
    },[errors])      //resetting the errors or removig or cleaning



    const EmailProps = useMemo(()=>({
        state:state.email, handleChange, name:'email'
    }),[state.email, handleChange])
    const PasswordProps = useMemo(()=>({
        state:state.password, handleChange, name:'password'
    }),[state.password, handleChange])

    return(
        <>
            <Form mode='login' handleSubmit={handleSubmit}>
                <H3  text='Login'/>
                <FormField>
                    <LabelField text='email'/>
                    <InputField props={EmailProps}/>
                </FormField>
                <FormField>
                    <LabelField text='password'/>
                    <InputField props={PasswordProps}/>
                </FormField>
                { errors.email &&  <ErrorDisplayer  error={errors.email}/> }
                { errors.password &&  <ErrorDisplayer  error={errors.password}/> }
                { errors.err &&  <ErrorDisplayer  error={errors.err}/> }
                <Button  text='submit'  mode='login_btn' loader={login_loader} />
            </Form>
        </>
    )
}
export default LoginModal



const loginUser = async(email:string, password:string) =>{
    try{
        const res = await fetch('/api/v1/user/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{ 'Content-Type':"application/json"},
        })
        const data:{errors:{email?:string, password?:string,}, error?:string, _id:string, email:string} = await res.json()
        const {errors, error,  _id, email:email_id} =  data
        return {errors, error, _id, email_id}
    }catch(err){
        console.log(err)
    }
}