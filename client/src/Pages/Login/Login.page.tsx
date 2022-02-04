import { memo } from "react";
import Input from "../../Components/HigherComponents/Input";
import Modal from "../../Components/HigherComponents/Modal/Modal";

const LoginPage = memo(()=>{
    return(
        <>
            <Modal mode='login'>
                <Input type='email' placeholder="your email"/>
                <Input type='password' placeholder="your password"/>
            </Modal>
        </>
    )
})
export default LoginPage