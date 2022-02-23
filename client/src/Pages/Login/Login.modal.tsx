import FormField from "../../Components/HigherComponents/Form/FormFields/FormField"
import InputField from "../../Components/HigherComponents/Form/FormFields/InputField"
import LabelField from "../../Components/HigherComponents/Form/FormFields/LabelField"
import Button from "../../Components/PureComponents/Button"
import ErrorDisplayer from "../../Components/PureComponents/Error"
import Form from "../../Components/HigherComponents/Form/Form"
import H3 from "../../Components/PureComponents/H3"
import useRegister from "../../Hooks/useRegister"
import { useUserCtx } from "../../Context/UserContext"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"


const LoginModal = ()=>{
    const {handleSubmit, loader, errors, EmailProps, PasswordProps} = useRegister()

    // if user is already logged in then go back
    const history = useHistory()
    const {user} = useUserCtx()
    useEffect(() => {user._id && history.push('/')} , [history, user._id])

    return(
        <Form mode='login' handleSubmit={handleSubmit} animate={true}>
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
    )
}
export default LoginModal