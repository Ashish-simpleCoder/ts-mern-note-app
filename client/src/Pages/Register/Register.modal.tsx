import { ChangeEvent, createContext, FormEvent, memo, useCallback, useContext, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import UserStates from "../../Context/UserContext";

const RegisterUserCtx = createContext({} as { state:{email:string, password:string} , handleSubmit:(e: FormEvent<HTMLFormElement>) => Promise<void> , handleChanges: (e: ChangeEvent<HTMLInputElement>) => void, register_loader:boolean })

export const RegisterStates = ()=> useContext(RegisterUserCtx)



const RegisterModal = memo(({children})=>{
    const [state, setState] = useState({email:'', password:""})
    const [errors, setErrors] = useState<{email:string, password:string}>()
    const {setUser} = UserStates()
    const history = useHistory()
    const [register_loader, setRegisterLoader] = useState(false)


    const handleChanges = useCallback((e:ChangeEvent<HTMLInputElement>) =>{
        setState(old=>({
            ...old,
            [e.target.name]:e.target.value
        }))
    },[])

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
    },[state, setUser, history])

    const value = useMemo(()=>({
        state,handleChanges, handleSubmit, register_loader
    }),[state,handleChanges, handleSubmit])

    return(
        <RegisterUserCtx.Provider value={value}>
            {children}
            <div className="error">{errors?.email}</div>
            <div className="error">{errors?.password}</div>
        </RegisterUserCtx.Provider>
    )
})
export default RegisterModal