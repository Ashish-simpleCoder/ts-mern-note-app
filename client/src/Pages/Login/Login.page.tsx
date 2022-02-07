import { memo} from "react";
import Input from "../../Components/HigherComponents/Input";
import Button from "../../Components/PureComponents/Button";
import Form from "../../Components/PureComponents/Form";
import H2 from "../../Components/PureComponents/H2";
import H3 from "../../Components/PureComponents/H3";
import Label from "../../Components/PureComponents/Label";
import LoginModal from "./Login.modal";

const LoginPage = memo(()=>{

    return(
        <>
        <LoginModal>
            <Form mode='login'>
                <H3 text='Login'/>
                <div>
                    <Label text='email'/>
                    <Input type="login" mode='email' name='email' placeholder='your email'/>
                </div>
                <div>
                    <Label text='password'/>
                    <Input type='login' mode='password' name='password' placeholder='your password'/>
                </div>
                <Button  text='submit'  mode='login_btn'  />
            </Form>
        </LoginModal>
            {/* <Modal mode='login'>
                <Input type='email' placeholder="your email" name='email'/>
                <Input type='password' placeholder="your password" name='password'/>
            </Modal> */}
        </>
    )
})
export default LoginPage