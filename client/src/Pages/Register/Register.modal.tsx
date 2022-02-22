import { memo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FormField from "../../Components/HigherComponents/FormFields/FormField";
import InputField from "../../Components/HigherComponents/FormFields/InputField";
import LabelField from "../../Components/HigherComponents/FormFields/LabelField";
import Button from "../../Components/PureComponents/Button";
import ErrorDisplayer from "../../Components/PureComponents/Error";
import Form from "../../Components/PureComponents/Form";
import H3 from "../../Components/PureComponents/H3";
import { useUserCtx } from "../../Context/UserContext";
import useRegister from "../../Hooks/useRegister";


const RegisterModal = memo(()=>{
    const {handleSubmit, loader, errors, EmailProps, PasswordProps} = useRegister()

    // if user is already logged in then go back
    const history = useHistory()
    const {user} = useUserCtx()
    useEffect(() => {user._id && history.push('/')} , [history, user._id])


    return(
        <Form mode='register' handleSubmit={(e)=>handleSubmit(e, 'register')} animate={true}>
            <H3  text='Register'  styles={{color:'var(--secondary-clr)'}}  />
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
            {  errors?.err && <ErrorDisplayer error={errors.err}/> }
            <Button  text='submit'  mode='login_btn' loader={loader} />
        </Form>
    )
})
export default RegisterModal