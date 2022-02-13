import { useMemo } from "react"
import FormField from "../../Components/HigherComponents/FormFields/FormField"
import InputField from "../../Components/HigherComponents/FormFields/InputField"
import LabelField from "../../Components/HigherComponents/FormFields/LabelField"
import Button from "../../Components/PureComponents/Button"
import ErrorDisplayer from "../../Components/PureComponents/Error"
import Form from "../../Components/PureComponents/Form"
import H3 from "../../Components/PureComponents/H3"
import useRegister from "../LoginRegister/Hooks/useRegister"



const LoginModal = ()=>{
    const {handleSubmit, loader, errors, state, handleChanges} = useRegister()


    const EmailProps = useMemo(()=>({
        state:state.email, handleChanges, name:'email'
    }),[state.email, handleChanges])
    const PasswordProps = useMemo(()=>({
        state:state.password, handleChanges, name:'password'
    }),[state.password, handleChanges])

    return(
        <>
            <Form mode='login' handleSubmit={handleSubmit}>
                <H3  text='Login'  styles={{color:'var(--secondary-clr)'}}  />
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
                <Button  text='submit'  mode='login_btn' loader={loader} />
            </Form>
        </>
    )
}
export default LoginModal