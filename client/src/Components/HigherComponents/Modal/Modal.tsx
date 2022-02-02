import { setDefaultResultOrder } from "dns/promises"
import { memo, ReactNode, useState, createContext, Dispatch, SetStateAction, ChangeEvent, useMemo, FormEvent, useRef, useContext } from "react"
import { useHistory } from "react-router-dom"
import UserStates from "../../../Context/UserContext"

export const State = createContext({} as {email:string,password:string, handleChange:(e:ChangeEvent<HTMLInputElement>)=>void})


const Modal = memo(({children, mode}:{children:ReactNode,mode?:string})=>{
    const [states, setState] = useState({email:'', password:''})
    const [errors, setErrors] = useState<any>()
    const {setUser, user} = UserStates()
    const history = useHistory()



    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setState(old=>({
            ...old,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = useMemo(()=>async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setErrors('')
        if(mode === 'login'){
            const data = await loginUser(states.email, states.password)
            console.log(data)
            if(data?._id){
                setUser({_id:data._id})
                history.push('/')
            }
            data?.error && setErrors(data.error)
        }
    },[states])

    return(
        <form onSubmit={(e)=>handleSubmit(e)}>
            <State.Provider value={{...states, handleChange}}>
                {children}
            </State.Provider>
            <div className="error">{errors}</div>
            <button>submit</button>
        </form>
    )
})
export default Modal




const loginUser = async(email:string, password:string) =>{
    try{
        const res = await fetch('/api/v1/user/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
           headers:{ 'Content-Type':"application/json"}
        })
        const data:{error:string, _id:string} = await res.json()
        const {error, _id} =  data
        return {error, _id}
    }catch(err){
        console.log(err)
    }
}