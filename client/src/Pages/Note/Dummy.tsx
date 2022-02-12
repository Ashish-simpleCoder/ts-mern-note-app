import {ReactNode} from 'react'
import Wrapper from '../../Components/HigherComponents/Wrapper'

const Dummy = ({children}:{children:ReactNode}) =>{
    return(
       <Wrapper styles={{height:'90vh',display:'flex', alignItems:'center',justifyContent:'center', flexDirection:'column'}}>
        { children }
       </Wrapper>
    )
}
export default Dummy