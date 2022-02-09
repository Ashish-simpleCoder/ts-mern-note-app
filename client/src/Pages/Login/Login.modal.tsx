import { useCallback, useContext } from "react";
import { createContext } from "react";
import { ChangeEvent, FormEvent, memo, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../Components/HigherComponents/Input";
import Button from "../../Components/PureComponents/Button";
import ErrorDisplayer from "../../Components/PureComponents/Error";
import Form from "../../Components/PureComponents/Form";
import H3 from "../../Components/PureComponents/H3";
import Label from "../../Components/PureComponents/Label";
import UserStates from "../../Context/UserContext";

const LoginCtx = createContext({} as { state:{email:string, password:string} , handleSubmit:(e: FormEvent<HTMLFormElement>) => Promise<void> , handleChanges: (e: ChangeEvent<HTMLInputElement>) => void, login_loader:boolean})

const LoginModal = memo(()=>{
    const [state, setState] = useState({email:'', password:""})
    const [errors, setErrors] = useState<any>()
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
        data?.error && setErrors(data.error)
    },[state, setUser, history])

    const handleChanges = useCallback((e:ChangeEvent<HTMLInputElement>) =>{
        setState(old=>({
            ...old,
            [e.target.name]:e.target.value
        }))
    },[])

    useEffect(()=>{
        errors &&  setTimeout(()=>setErrors(''),2000)
    },[errors])      //resetting the errors or removig or cleaning


    const states = useMemo(()=>({
        state,handleChanges, handleSubmit, login_loader
    }),[,state, handleChanges, handleSubmit, login_loader])


    return(
        <LoginCtx.Provider value={states}>
            <Form mode='login'>
                <H3  text='Login'/>
                <div>
                    <Label  text='email'/>
                    <Input  type="login" mode='email' name='email' placeholder='your email'/>
                </div>
                <div>
                    <Label  text='password'/>
                    <Input  type='login' mode='password' name='password' placeholder='your password'/>
                </div>
                { errors &&  <ErrorDisplayer  error={errors}/> }
                <Button  text='submit'  mode='login_btn'  />
            </Form>
        </LoginCtx.Provider>
    )
})
export default LoginModal


// login states context
export const LoginStates = () => useContext(LoginCtx)


const loginUser = async(email:string, password:string) =>{
    try{
        const res = await fetch('/api/v1/user/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{ 'Content-Type':"application/json"},
        })
        const data:{error:string, _id:string, email:string} = await res.json()
        console.log(data)
        const {error, _id, email:email_id} =  data
        return {error, _id, email_id}
    }catch(err){
        console.log(err)
    }
}