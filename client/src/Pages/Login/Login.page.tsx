import { memo } from "react";
import Input from "../../Components/HigherComponents/Input";
import Modal from "../../Components/HigherComponents/Modal/Modal";

const LoginPage = memo(()=>{
    return(
        <>
            <Modal mode='login'>
                <Input type='email'/>
                <Input type='password'/>
            </Modal>
        </>
    )
})
export default LoginPage