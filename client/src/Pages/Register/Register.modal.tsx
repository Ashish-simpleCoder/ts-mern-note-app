import { ChangeEvent,  FormEvent, memo, useCallback,  useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import FormField from "../../Components/HigherComponents/FormFields/FormField";
import InputField from "../../Components/HigherComponents/FormFields/InputField";
import LabelField from "../../Components/HigherComponents/FormFields/LabelField";
import Button from "../../Components/PureComponents/Button";
import ErrorDisplayer from "../../Components/PureComponents/Error";
import Form from "../../Components/PureComponents/Form";
import H3 from "../../Components/PureComponents/H3";
import UserStates from "../../Context/UserContext";



const RegisterModal = memo(()=>{
    const [state, setState] = useState({email:'', password:""})
    const [errors, setErrors] = useState<{email:string, password:string}>()
    const {setUser} = UserStates()
    const history = useHistory()
    const [register_loader, setRegisterLoader] = useState(false)


    const handleChange = useCallback((e:ChangeEvent<HTMLInputElement>) =>{
        setState(old=>({
            ...old,
            [e.target.name]:e.target.value
        }))
    },[setState])

    const registerUser = useCallback(async(email:string, password:string)=>{
        try{
            const res = await fetch('/api/v1/user',{
                method:'POST',
                body:JSON.stringify({email,password}),
                headers:{ 'Content-Type':"application/json"}
            })
            const data:{errors:{email:string, password:string}, _id:string} = await res.json()
            const {errors, _id} =  data
            return {errors, _id}
        }catch(err){
            console.log(err)
        }
    },[])

    const handleSubmit = useCallback(async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setRegisterLoader(true)
        const data = await registerUser(state.email, state.password)
        if(data?._id){
            setUser(v=>({...v,_id:data._id}))
            history.push('/login')
        }
        setRegisterLoader(false)
        data?.errors && setErrors(data.errors)
    },[state, setUser, history, registerUser])

    const EmailProps = useMemo(()=>({
        state:state.email, handleChange, name:'email'
    }),[state.email, handleChange])
    const PasswordProps = useMemo(()=>({
        state:state.password, handleChange, name:'password'
    }),[state.password, handleChange])

    return(
        <>
            <Form mode='register' handleSubmit={handleSubmit}>
                <H3 text='Register'/>
                <FormField>
                    <LabelField text='email'/>
                    <InputField props={EmailProps}/>
                </FormField>
                <FormField>
                    <LabelField text='password'/>
                    <InputField props={PasswordProps}/>
                </FormField>
                {  errors?.email && <ErrorDisplayer error={errors.email}/> }
                {  errors?.password && <ErrorDisplayer error={errors.password}/> }
                <Button  text='submit'  mode='login_btn' loader={register_loader} />
            </Form>
        </>
    )
})
export default RegisterModal