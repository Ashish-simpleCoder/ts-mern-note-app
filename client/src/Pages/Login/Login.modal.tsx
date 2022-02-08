import { useContext } from "react";
import { createContext } from "react";
import { ChangeEvent, FormEvent, memo, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import UserStates from "../../Context/UserContext";

const LoginCtx = createContext({} as { state:{email:string, password:string} , handleSubmit:(e: FormEvent<HTMLFormElement>) => Promise<void> , handleChanges: (e: ChangeEvent<HTMLInputElement>) => void})

const LoginModal = memo(({children}:{children: (JSX.Element | Readonly<JSX.Element>)[] | (JSX.Element | Readonly<JSX.Element>)})=>{
    const [state, setState] = useState({email:'', password:""})
    const [errors, setErrors] = useState<any>()
    const {setUser} = UserStates()
    const history = useHistory()


    const handleSubmit = useMemo(()=>async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const data = await loginUser(state.email, state.password)
        if(data?._id){
            setUser({_id:data._id,email:data.email_id})
            history.push('/')
        }
        data?.error && setErrors(data.error)
    },[state, setUser, history])

    const handleChanges = (e:ChangeEvent<HTMLInputElement>) =>{
        setState(old=>({
            ...old,
            [e.target.name]:e.target.value
        }))
    }

    useEffect(()=>{
        errors &&  setTimeout(()=>setErrors(''),2000)
    },[errors])


    const states = useMemo(()=>({
        state,handleChanges, handleSubmit
    }),[,state, handleChanges, handleSubmit])


    return(
        <LoginCtx.Provider value={states}>
            {children}
            <div className="error">{errors}</div>
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
            headers:{ 'Content-Type':"application/json"}
        })
        const data:{error:string, _id:string, email:string} = await res.json()
        console.log(data)
        const {error, _id, email:email_id} =  data
        return {error, _id, email_id}
    }catch(err){
        console.log(err)
    }
}