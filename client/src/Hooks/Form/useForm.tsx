import { ChangeEvent, useCallback, useState } from "react"
import Form from "../../Components/HigherComponents/Form/Form"

const useForm = () =>{
    const [STATE, setSTATE] = useState({} as any)

    const handleSubmit = useCallback(() =>{
        setSTATE({})
    },[STATE])

    const inserter = useCallback(({state, place} : {state:string, place?:string}) => {
        const handleChange = (e : ChangeEvent<HTMLInputElement>) =>{
            setSTATE((old:any) => ({
                ...old,
                [state]:e.target.value
            }))
        }
        return {
            value:STATE[state] || '',
            onChange : handleChange,
            placeholder:place
        }
    }, [STATE])
    return {inserter, handleSubmit, Form}
}
export default useForm