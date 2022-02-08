import { memo } from "react"
import Input from "../../Components/HigherComponents/Input"
import Button from "../../Components/PureComponents/Button"
import Form from "../../Components/PureComponents/Form"
import H3 from "../../Components/PureComponents/H3"
import Label from "../../Components/PureComponents/Label"
import RegisterModal from "./Register.modal"

const RegisterPage = memo(()=>{
    return(
        <>
            <RegisterModal>
            <Form mode='register'>
                <H3 text='Register'/>
                <div>
                    <Label text='email'/>
                    <Input type="register" mode='email' name='email' placeholder='your email'/>
                </div>
                <div>
                    <Label text='password'/>
                    <Input type='register' mode='password' name='password' placeholder='your password'/>
                </div>
                <Button  text='submit'  mode='login_btn'  />
            </Form>
            </RegisterModal>
        </>
    )
})
export default RegisterPage