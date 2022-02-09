import { memo} from "react";
import Input from "../../Components/HigherComponents/Input";
import Button from "../../Components/PureComponents/Button";
import Form from "../../Components/PureComponents/Form";
import H3 from "../../Components/PureComponents/H3";
import Label from "../../Components/PureComponents/Label";
import LoginModal from "./Login.modal";

const LoginPage = memo(()=>{

    return(
        <>
        <LoginModal />
            {/* <Modal mode='login'>
                <Input type='email' placeholder="your email" name='email'/>
                <Input type='password' placeholder="your password" name='password'/>
            </Modal> */}
        </>
    )
})
export default LoginPage